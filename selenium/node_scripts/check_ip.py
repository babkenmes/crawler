from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

chrome = webdriver.Remote(
          command_executor='http://localhost:4444/wd/hub',
          desired_capabilities=DesiredCapabilities.FIREFOX)

chrome.get('https://whatismyipaddress.com/')

my_element = chrome.find_element_by_id('ipv4')
print(my_element.text)
chrome.quit()
