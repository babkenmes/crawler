const express = require('express');
const PORT = 8080;
const app = express();
const exec = require('child_process').exec;
const bodyParser = require('body-parser');
const util = require('util');
const { promises: fs } = require("fs");
const http = require('http');
const cors = require('cors')
const geoip = require('geoip-lite');
const publicIp = require('public-ip');
const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const axios = require('axios');

app.use(cors())



console.log("*****************node js started")

const httpAgent = new http.Agent({
    keepAlive: true
});

const REGIONS_FOLDER = `/etc/openvpn/${process.env.REGIONS_FOLDER || "protonvpn_conf"}`
const VPN_NAME = process.env.VPN_NAME || "protonvpn"
const REGION_TAG = process.env.REGION_TAG || "protonvpn"
const RESET_CYCLE = process.env.RESET_CYCLE || 1
const WEB_API = process.env.WEB_API || "http://localhost:5000/api"
const SERVICE_NAME = process.env.SERVICE_NAME || "localhost"
let REGION = process.env.REGION || ""

///aaa
async function registerVPN() {
    const config_files = await fs.readdir(REGIONS_FOLDER);
    const regions = config_files.filter(f => f.endsWith('.ovpn'))
    let regions_response = await axios.post(`${WEB_API}/containers/regme`, {
        region_tag: REGION_TAG,
        name: SERVICE_NAME,
        api: `http://${SERVICE_NAME}:${PORT}/api`,
        vpn_name: VPN_NAME,
        reset_cycle: RESET_CYCLE,
        regions
    })
    console.log(`reg status:${regions_response.status}`)
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/register', runAsyncWrapper(async (req, res) => {
    await registerVPN()
    res.status(200)
}));

registerVPN()
let req_count = 0;
app.get('/api/region/set/:region', (req, res) => {
    console.log(`reqs count:${++req_count}`)
    const { region } = req.params;
    console.log(`changing vpn:${REGION} to ${region}`)
    const KIll = !!REGION;
    const myShellScript = exec(`KILL=${KIll} REGION="${region}" sh /etc/openvpn/openvpn.sh `);

    try {
        exec(`sh /etc/openvpn/markasdown.sh `);
    }
    catch (e) {
        console.log(e)
    }
<<<<<<< HEAD
    
=======

>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
    const shellResult = new Promise(function (resolve, reject) {
        myShellScript.stdout.on('data', (data) => {
            console.log(`message received from bash region is ${region}`)
            console.log(data)
            if (data.indexOf("AUTH_FAILED") > -1) {
                reject("AUTH_FAILED")
            }
            if (data.indexOf("Initialization Sequence Completed") > -1) {
                REGION = region;
                resolve(data)
            }
        });
        myShellScript.stderr.on('data', (data) => {
            console.log(`:( could not change vpn,  ${data}`)
            ///TODO handle "no process found"
            if (data.indexOf("no process found") > -1) {
                REGION = null
            }
            if (data.indexOf("killed openvpn") == -1)
                reject(data)
        });
        myShellScript.on('close', (code) => {
            reject(`child process exited with code ${code}`)
        });
    });
    return shellResult.then(async (data) => {
        const geo = await checkGeoInfo();
        return res.status(200).send({ geo })
    }).catch(err => res.status(500).send({ err }));
});

app.get('/api/regions', runAsyncWrapper(async (req, res) => {
    const config_files = await fs.readdir(REGIONS_FOLDER);
    const data = config_files.filter(f => f.endsWith('.ovpn'))
    return res.status(200).send(data)
}));

app.get('/api/geoinfo', runAsyncWrapper(async (req, res) => {
    const geo = await checkGeoInfo();
    return res.status(200).send({ geo })
}));

app.get('/api/region/current', (req, res) => {
    res.send(REGION);
});


app.get('/api/web/getsomething', runAsyncWrapper(async (req, res) => {
    const screen = {
        width: 1920,
        height: 1080
    };

    let options = new firefox.Options();
    //Below arguments are critical for Heroku deployment
    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
    options.addArguments("--no-sandbox");
    options.windowSize(screen);

    console.log("logging")
    let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    try {
        await driver.get('https://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
        console.log("yoooo")
    } finally {
        console.log("woo")
        await driver.quit();
    }
}));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

function runAsyncWrapper(callback) {
    return function (req, res, next) {
        callback(req, res, next)
            .catch(next)
    }
}

async function checkGeoInfo() {
    console.log('getting geoinfo')
    const ip = await publicIp.v4()
    console.log(ip);
    var geo = geoip.lookup(ip);
    console.log(geo);
    if (geo && geo.country && geo.country != "AM") {
        console.log("bringing back");
        exec(`sh /etc/openvpn/bringback.sh `);
    }
    else {
        console.log("marking as down");
        exec(`sh /etc/openvpn/markasdown.sh `);
    }
    return geo;
}