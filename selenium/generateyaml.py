import yaml


class SelVPN:
    def __init__(self, port, vnc_port, image, conect, max_instance, max_session):
        self.port = port
        self.vnc_port = vnc_port
        self.conect = conect
        self.image = image
        self.max_instance = max_instance
        self.max_session = max_session

    def getData(self):
        vpnServiceName = 'sel_node_item' + self.port
        result = {}
        folder = self.conect['REGIONS_FOLDER']
        app_name = self.conect['NODE_APPLICATION_NAME']
        result[vpnServiceName] = {
            'image': self.image,
            'privileged': True,
            'ports': [self.vnc_port + ":5900"],
            'cap_add': ["NET_ADMIN"],
            'devices': ["/dev/net/tun"],
            'depends_on': ["app","selenium-hub"],
            'networks': ["a_frontend", "b_backend"],
            'environment': [
                f"SERVICE_NAME={vpnServiceName}",
                f"USERNAME={self.conect['username']}",
                f"PASSWORD={self.conect['password']}",
                f"REGIONS_FOLDER=./conf",
                f"VPN_NAME={self.conect['VPN_NAME']}",
                f"RESET_CYCLE={self.conect['RESET_CYCLE']}",
                f"WEB_API={self.conect['WEB_API']}",
                f"version=3",
                f"SCREEN_WIDTH=2880",
                f"SCREEN_HEIGHT=1800", 
                f"HUB_HOST=selenium-hub", 
                f"NODE_APPLICATION_NAME={app_name}", 
                f"REMOTE_HOST=http://{vpnServiceName}:5555", 
                f"HUB_PORT=4444", 
                f"NODE_MAX_INSTANCES={str(self.max_instance)}", 
                f"NODE_MAX_SESSION={str(self.max_session)}"
            ],
            'volumes': [f"/dev/shm:/dev/shm", f"./{folder}:/etc/openvpn/conf"]
        }
        return result


def parseConnections(configs, sel_port_from, vnc_port_from):
    print("-c")
    data = {}
    if configs["conects"]:
        for conect in configs["conects"]:
            for r in range(conect["regions"]):
                print("-r")
                s = SelVPN(str(sel_port_from), str(vnc_port_from), configs["vpn_image"],
                           {
                    'username': conect["username"],
                    'password': conect["password"],
                    'REGIONS_FOLDER': conect["REGIONS_FOLDER"],
                    'VPN_NAME': conect["VPN_NAME"],
                    'RESET_CYCLE': conect["RESET_CYCLE"],
                    'NODE_APPLICATION_NAME': conect["region_tag"],
                    'WEB_API': conect["WEB_API"],
                }, configs["NODE_MAX_INSTANCES"], configs["NODE_MAX_SESSION"])
                data = {**data, **s.getData()}
                sel_port_from += 1
                vnc_port_from += 1
    return data


with open(r'./docker-configs.yml') as file:
    configs = yaml.load(file, Loader=yaml.FullLoader)

services = {}


vpn_conts = parseConnections(configs, 4500, 5500)

selenium_hub = {
    'selenium-hub': {
        'container_name': 'selenium-hub',
        'image': 'selenium/hub:3.141.59-20200409',
        'ports': ["4444:4444"],
        'networks': ["b_backend"],
        'environment': ["GRID_BROWSER_TIMEOUT=100", "GRID_CLEAN_UP_CYCLE=100000", "GRID_TIMEOUT=100", "GRID_THROW_ON_CAPABILITY_NOT_PRESENT=false"],
    }
}
web = {
    'app': {
        'image': 'conterapp',
        'build': '.',
        'ports': ["5000:5000"],
        'depends_on': ["mongo"],
        'networks': ["a_frontend"],
        'volumes': ["./data:/app/data"]
    },
    'mongo': {
        'container_name': 'mongo',
        'image': 'mongo',
        'ports': ["27018:27017"],
        'command': ["--bind_ip_all"],
        'networks': ["a_frontend"],
        'volumes': ["mongodata:/data/db"],
        'environment': ["wiredTigerCacheSizeGB=5"],
        'deploy': {
            'restart_policy':{
                'condition': "any",
                'delay': "60s",
                 'window': "120s"
            }
        }
    }
}

services = {**selenium_hub, **web, **services, **vpn_conts}


docker_compose = {
    'version': "3",
    'services': services,
    'networks': {"a_frontend": {"driver": "bridge"}, "b_backend": {"driver": "bridge"}},
    'volumes': {"mongodata": None}
}

with open(r'./docker-compose.yml', 'w') as file:
    documents = yaml.dump(docker_compose, file, sort_keys=False)

with open(r'./scripts-configs.yml') as file:
    scripts_configs = yaml.load(file, Loader=yaml.FullLoader)

# scripts_configs["ports"] = all_ports

with open(r'./scripts-configs.yml', 'w') as file:
    documents = yaml.dump(scripts_configs, file, sort_keys=False)
