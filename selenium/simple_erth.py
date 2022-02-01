import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss

def Animation1(driver):
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