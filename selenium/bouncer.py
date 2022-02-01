import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss

def Animation1(driver):
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000