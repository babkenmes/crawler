import json
from inspect import getmembers, isfunction
import random
from fields import WEB_FIELD, ALL_KEYS_FIELD
import requests
from exceptions import NoDeviceError
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def getAllDevices():
    devices = requests.get('http://app:5000/api/devices').json()
    return devices

def getWeb(file):
    with open(file) as f:
        data = json.load(f)
    return data[WEB_FIELD]

def getDevice(group):
    devices = requests.get(
        f'http://app:5000/api/devices/bygroup/{group}').json()["devices"]
    if len(devices) > 0:
        device = random.choice(devices)
        print(device["name"])
        return device
    else:
        raise NoDeviceError


def getKeys():
    url = f'http://app:5000/api/keywords/active'
    keys = requests.get(url).json()["keywords"]
    return keys


def recapDetected(ip):
    url = f'http://app:5000/api/containers/recap/{ip}'
    keys = requests.get(url).json()["keywords"]
    return keys

def getKey(app):
    url = f'http://app:5000/api/keywords/getOne/{app}'
    try :
        key = requests.get(url).json()["keyword"]
        return key
    except Exception as e:
        print(e)



def keyDone(id):
    url = f'http://app:5000/api/keywords/done/{id}'
    return requests.get(url).json()

def keyStarted(id,deviceName):
    print(f"device:{deviceName}")
    url = f'http://app:5000/api/keywords/started/{id}'
    res = requests.get(url).json()
    return res

def keyStopped(id):
    url = f'http://app:5000/api/keywords/stopped/{id}'
    res = requests.get(url).json()
    return res

def keyError(id, message, landed):
    url = f'http://app:5000/api/keywords/error/{id}'
    data = {'errorMessage': message, 'landed': landed}
    res = requests.put(url, data=data)
    return res

def captcha(id, landed):
    url = f'http://app:5000/api/keywords/captcha/{id}'
    data = { 'landed': landed}
    res = requests.put(url, data=data)
    return res

def saveLink(id, link):
    url = f'http://app:5000/api/keywords/create_link/{id}'
    data = {'link': link}
    res = requests.post(url, data=data)
    return res

def getLocation():
<<<<<<< HEAD
    ip_resp = requests.get('https://jsonip.com/').json()
    ip = ip_resp['ip']
    country_resp = requests.get(f'https://www.iplocate.io/api/lookup/{ip}').json()
    return country_resp['country_code']
=======
    ip = requests.get('http://ip.42.pl/raw').text
    resp = requests.get(f'https://www.iplocate.io/api/lookup/{ip}').json()
    return resp['country_code']
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
