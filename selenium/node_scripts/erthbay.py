import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss

def Animation1(driver):
    time.sleep(abs((gauss(1, 1) * 5000 + 10000))/1000)
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 10000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 1000 + 10000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 5000 + 10000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 10000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 10000))/1000)
    menu_list = ["NEW ARRIVALS","E-LIQUIDS","DEVICES","E-LIQUIDS","ALL BRANDS","DEALS & SALE","CONTACT US","HOME"]
    menu_list_xpath = [
    '//*[@id="section-header"]/div/div[1]/nav/ul/li[1]/a',
    '//*[@id="section-header"]/div/div[1]/nav/ul/li[2]/a',
    '//*[@id="section-header"]/div/div[1]/nav/ul/li[3]/a',
    '//*[@id="section-header"]/div/div[1]/nav/ul/li[4]/a',
    '//*[@id="section-header"]/div/div[1]/nav/ul/li[5]/a']
    
    # print(menu_item_1)
    time.sleep(abs((gauss(1, 1) * 500 + 7000))/1000)

    try:
        javascript = "console.log('trying open menu')"
        driver.execute_script(javascript)
        driver.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
    except:
        javascript = "console.log('open menu try cought')"
        driver.execute_script(javascript)

    try:
        menu_item = random.choice(menu_list)
        driver.find_element_by_xpath(f"//a[text()='{menu_item}']").click()
    except:
        try:
            menu_item_1 = random.choice(menu_list_xpath)
            javascript = "console.log('menu item is "+menu_item_1+"')"
            driver.execute_script(javascript)
            element = driver.find_element_by_xpath(menu_item_1)
            element.click()
            element.click()
            javascript = "console.log('xpath item content "+element.text+"')"
            driver.execute_script(javascript)
        except:
            javascript = "console.log('xpath try cought')"
            driver.execute_script(javascript)

    javascript = "console.log('xpath try finished')"
    driver.execute_script(javascript)
    time.sleep(abs((gauss(1, 1) * 500 + 30000))/1000)

    try:
        menu_item = random.choice(menu_list)
        driver.find_element_by_xpath(f"//a[text()='{menu_item}']").click()
    except:
        try:
            menu_item_1 = random.choice(menu_list_xpath)
            javascript = "console.log('menu item is "+menu_item_1+"')"
            driver.execute_script(javascript)
            element = driver.find_element_by_xpath(menu_item_1)
            element.click()
            element.click()
            javascript = "console.log('xpath item content "+element.text+"')"
            driver.execute_script(javascript)
        except:
            javascript = "console.log('xpath try cought')"
            driver.execute_script(javascript)

    javascript = "console.log('xpath try finished')"
    driver.execute_script(javascript)
    
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)

