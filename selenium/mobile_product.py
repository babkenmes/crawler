import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss

def Animation1(driver):
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 12000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 1000 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 5000 + 12000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 10000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 12000))/1000)
    menu_list = ["NEW ARRIVALS","E-LIQUIDS","DEVICES","E-LIQUIDS","ALL BRANDS","DEALS & SALE","CONTACT US","HOME"]
    menu_item_1 = random.choice(menu_list)
    # print(menu_item_1)
    time.sleep(abs((gauss(1, 1) * 500 + 7000))/1000)
    try:
        driver.find_element_by_xpath('//*[@id="section-header"]/div/div[1]/button').click()
    except:
        pass
    time.sleep(abs((gauss(1, 1) * 500 + 10000))/1000)
    driver.find_element_by_xpath(f"//a[text()='{menu_item_1}']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 5000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 5000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 5000))/1000)
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

def Animation2(driver):
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    try:                
        time.sleep(1)
        driver.execute_script("window.scrollTo(0, 2000)") 
        time.sleep(10) 
        driver.execute_script("window.scrollTo(0, 30)")
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='shopify-section-product-template']/section/div/div[2]/div/div/div/h2/a/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='shopify-section-collection-template']/section/div[3]/div/div/button[2]").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-top-sorting']/button[3]").click()
        time.sleep(10)
        driver.find_element_by_xpath("//header[@id='section-header']/div/div/button").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/header/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
    except:
        pass
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.find_element_by_xpath(f"//a[text()='//section[@id='sidebar-menu']/header/button']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)

def Animation3(driver):
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    try:  
        time.sleep(1)
        driver.execute_script("window.scrollTo(0, 2000)") 
        time.sleep(20) 
        driver.execute_script("window.scrollTo(0, 30)")
        time.sleep(20)
        driver.find_element_by_xpath("//div[@id='shopify-section-product-template']/section/div/div[2]/div/div/div/h2/a/button").click()
        time.sleep(20)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(20)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(20)
        driver.find_element_by_xpath("//div[@id='shopify-section-collection-template']/section/div[3]/div/div/button[2]").click()
        time.sleep(20)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-top-sorting']/button[2]").click()
        time.sleep(20)
        driver.find_element_by_xpath("//header[@id='section-header']/div/div/button").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/header/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
    except:
        pass
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.find_element_by_xpath(f"//a[text()='//section[@id='sidebar-menu']/header/button']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)

def Animation4(driver):
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    try:  
        time.sleep(1)
        driver.execute_script("window.scrollTo(0, 2000)") 
        time.sleep(20) 
        driver.execute_script("window.scrollTo(0, 30)")
        time.sleep(20)
        driver.find_element_by_xpath("//div[@id='shopify-section-product-template']/section/div/div[2]/div/div/div/h2/a/button").click()
        time.sleep(20)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='shopify-section-collection-template']/section/div[3]/div/div/button[2]").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-top-sorting']/button[3]").click()
        time.sleep(10)
        driver.find_element_by_xpath("//header[@id='section-header']/div/div/button").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/header/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
    except:
        pass
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.find_element_by_xpath(f"//a[text()='//section[@id='sidebar-menu']/header/button']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)

def Animation5(driver):
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    try: 
        time.sleep(1)
        driver.execute_script("window.scrollTo(0, 2000)") 
        time.sleep(10) 
        driver.execute_script("window.scrollTo(0,30)")
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='shopify-section-product-template']/section/div/div[2]/div/div/div/h2/a/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='shopify-section-collection-template']/section/div[3]/div/div/button[2]").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-top-sorting']/button[4]").click()
        time.sleep(10)
        driver.find_element_by_xpath("//header[@id='section-header']/div/div/button").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[2]/div/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//section[@id='sidebar-menu']/header/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
    except:
        pass
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.find_element_by_xpath(f"//a[text()='//section[@id='sidebar-menu']/header/button']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)

def Animation6(driver):
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
    try: 
        time.sleep(1)
        driver.execute_script("window.scrollTo(0, 2000)") 
        time.sleep(20) 
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(20)
        driver.find_element_by_xpath("//div[@id='shopify-section-product-template']/section/div/div[2]/div/div/div/h2/a/button").click()
        time.sleep(20)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 20)")
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='shopify-section-collection-template']/section/div[3]/div/div/button").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-options-wrapper']/div/div/h3/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-options-wrapper']/div/div/h3/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-options-wrapper']/div[2]/div/h3/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='bc-sf-filter-options-wrapper']/div[2]/div/h3/span").click()
        time.sleep(10)
        driver.find_element_by_xpath("//div[@id='collection-filter-drawer']/header/button").click()
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 2000)")
        time.sleep(10)
        driver.execute_script("window.scrollTo(0, 10)")
        time.sleep(10)
    except:
        pass
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.find_element_by_xpath(f"//a[text()='//div[@id='collection-filter-drawer']/header/button']").click()
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)