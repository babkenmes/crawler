from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
# from selenium.webdriver.chrome.options import Options as COptions
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
import random
from random import gauss
import time
import re
import sys

options = webdriver.ChromeOptions()
options.accept_untrusted_certs = True
options.assume_untrusted_cert_issuer = True
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_argument(f"--user-agent=Mozilla/5.0 (Linux; Android 8.0.0; PRA-TL10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36")
options.add_argument(f"--window-size=1080,1920")
options.add_argument("--disable-extensions")
options.add_argument("--disable-infobars")
options.add_argument("--disable-popup-blocking")
options.add_argument("--ignore-certificate-errors")
options.add_argument("--disable-session-crashed-bubble")
options.add_argument("--enable-javascript")
options.add_argument("--cache-control=max-age=0")

chrome = webdriver.Remote(
        command_executor=f'http://localhost:4444/wd/hub',
        desired_capabilities=options.to_capabilities())
chrome.implicitly_wait(30)
time.sleep(abs((gauss(1, 1) * 550 + 3500))/1000)
chrome.get("https://vapejuicedepot.com/products/fogg-pod-juice-jewel-mint-disposable-pod")

element = chrome.find_elements_by_id("bouncer_modal_submit")
if len(element) > 0 and element[0].is_displayed(): 
    element[0].click()
else:                
    time.sleep(1)
chrome.execute_script("window.scrollTo(0, 2000)") 
time.sleep(3) 
chrome.execute_script("window.scrollTo(0, 20)")
time.sleep(3)
menu_list = ["NEW ARRIVALS","E-LIQUIDS","DEVICES","E-LIQUIDS","ALL BRANDS","DEALS & SALE","CONTACT US","HOME"]
menu_item = random.choice(menu_list)
print(menu_item)
time.sleep(3)
chrome.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
time.sleep(10)
chrome.find_element_by_xpath(f"//a[text()='{menu_item}']").click()
time.sleep(10) 
chrome.execute_script("window.scrollTo(0, 2000)")
time.sleep(10)
chrome.execute_script("window.scrollTo(0, 20)")
time.sleep(10)