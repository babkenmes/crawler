#!/usr/bin/env python
# -*- coding: utf-8 -*-
from multiprocessing import Pool
from contextlib import closing

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
#from selenium.webdriver.chrome.options import Options as COptions
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import *
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re
from parsel import Selector
#import keyboard
import sys

from bs4 import BeautifulSoup

import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss

domain ="credofinance.am"
tld="am"
key=BeautifulSoup("վարկեր օնլայն").string

title = ""



options = webdriver.ChromeOptions()
mobile_emulation = { "deviceMetrics": { "width": 414, "height": 896, "pixelRatio": 3 }}
options.add_experimental_option("mobileEmulation", mobile_emulation)
options.accept_untrusted_certs = True
options.assume_untrusted_cert_issuer = True
options.add_experimental_option("excludeSwitches", ["enable-automation"])                     
options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 ')
options.add_argument("--disable-extensions")
options.add_argument("--window-size=1242,2688")
options.add_argument("--disable-infobars")
options.add_argument("--disable-popup-blocking")
options.add_argument("--ignore-certificate-errors")
options.add_argument("--disable-notifications")
options.add_argument("--disable-session-crashed-bubble")
options.add_argument("--enable-javascript")
# options.add_argument('--disable-gpu')
# options.add_argument("--headless")
# options.add_argument("--no-sandbox")

options.set_capability("applicationName", "protonvpn_usa_special_other")


MORE_RESULTS_TEXT = "More results"


class UntitledTestCase(unittest.TestCase):
    KEY = key

    def setUp(self):
        self.driver = webdriver.Remote(
            command_executor=f'http://localhost:4444/wd/hub',
            desired_capabilities=options.to_capabilities())
        self.driver.implicitly_wait(30)       
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_untitled_test_case(self):
        driver = self.driver
        driver.execute_script("window.open('');")
        driver.switch_to.window(driver.window_handles[1])
        time.sleep(3)
        driver.get("https://erthbay.com/")
        time.sleep(3)
        driver.execute_script("window.scrollTo(0, 2000)") 
        time.sleep(abs((gauss(1, 1) * 500 + 8000))/1000)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
        driver.execute_script("window.scrollTo(0, 1000)")
        time.sleep(abs((gauss(1, 1) * 500 + 7000))/1000)
        driver.execute_script("window.scrollTo(0, 500)")
        time.sleep(abs((gauss(1, 1) * 500 + 9000))/1000)
        driver.execute_script("window.scrollTo(0, 700)")
        time.sleep(abs((gauss(1, 1) * 500 + 7000))/1000)
        menu_list = ["HOME","SHOP ALL","CBD GUIDES","CONTACT US"]
        menu_item_1 = random.choice(menu_list)
        print(menu_item_1)
        time.sleep(abs((gauss(1, 1) * 500 + 4000))/1000)
        try:
            driver.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
        except:
            pass    
        time.sleep(abs((gauss(1, 1) * 500 + 9000))/1000)
        menu_list = driver.find_element_by_xpath(f"//a[text()='{menu_item_1}']").click()
        time.sleep(abs((gauss(1, 1) * 500 + 8000))/1000)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(abs((gauss(1, 1) * 500 + 8000))/1000)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(abs((gauss(1, 1) * 500 + 7000))/1000)
        menu_item_2 = random.choice(menu_list)
        print(menu_item_2)
        time.sleep(abs((gauss(1, 1) * 500 + 5000))/1000)    
        try:
            driver.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
        except:
            pass    
        time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
        menu_list = driver.find_element_by_xpath(f"//a[text()='{menu_item_2}']").click()
        time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
        driver.close()                
        
        
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

def starttest(key):
      
    domain = ""
    tld =""
    
    waitingTime = 3
    time.sleep(waitingTime)
    try:
        UntitledTestCase.KEY = BeautifulSoup(key).string
        UntitledTestCase.DOMAIN = domain
        UntitledTestCase.TLD = tld
        unittest.main()
        return 1
    except:
        return 0


if __name__ == "__main__":
    


    keysList=["","","",""]     
    agents = 1
    chunksize = 1
    result = 0
    with closing(Pool(processes=agents)) as pool:
        result += pool.map(starttest, keysList, chunksize)
        pool.terminate() 
    print ('result: ' + str(result))