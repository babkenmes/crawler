import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss

def Animation1(driver):
     time.sleep(20)
     driver.execute_script("window.scrollTo(0, 2000)")
    driver.find_element_by_xpath("//section[@id='blog']/div/div/div/div/p/a/span").click()
    time.sleep(20)
    time.sleep(abs((gauss(1, 1) * 5000 + 10000))/1000)
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 30000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 15000))/1000)
    menu_list = ["NEW ARRIVALS","E-LIQUIDS","DEVICES","E-LIQUIDS","ALL BRANDS","DEALS & SALE","CONTACT US","HOME"]
    menu_item_1 = random.choice(menu_list)
    print(menu_item_1)
    time.sleep(abs((gauss(1, 1) * 500 + 7000))/1000)
    try:
        driver.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
    except:
        pass

    time.sleep(abs((gauss(1, 1) * 500 + 30000))/1000)
    driver.find_element_by_xpath(f"//a[text()='{menu_item_1}']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 13000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 30000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 14000))/1000)
    menu_item_2 = random.choice(menu_list)
    print(menu_item_2)
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)

    try:
        driver.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
    except:
        pass

    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.find_element_by_xpath(f"//a[text()='{menu_item_2}']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)