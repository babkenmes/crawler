#!/bin/sh
set -eu


echo "------------openvpn.sh started"
echo "user"
echo $OVPNUSERNAME
echo "pass"
echo $PASSWORD

: ${OVPNUSERNAME:?"Pass in '-e USERNAME='IPVANISH Username''"}
: ${PASSWORD:?"Pass in '-e PASSWORD='IPVANISH Password''"}

echo "$OVPNUSERNAME" > auth.conf
echo "$PASSWORD" >> auth.conf


echo "nameserver 8.8.8.8" >> /etc/resolv.conf

chmod 600 auth.conf

# DIR="/sys/class/net/tun0/"
# if [ -d "$DIR" ]; then
#     if [ "unknown" = $( cat /sys/class/net/tun0/operstate ) ]
#     then
#         ip link set dev tun0 down
#         ip link delete tun0
#     fi
# fi


{
    if $KILL; then
        killall openvpn
        echo "killed openvpn"
    fi
} || {
     echo "no openvpn running"
}



openvpn \
    --config "/etc/openvpn/conf/${REGION}" \
    --auth-user-pass auth.conf \
    --mute-replay-warnings \
    --dev tun0
