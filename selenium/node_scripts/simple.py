import time
import random
from selenium.webdriver.common.action_chains import ActionChains
from random import gauss
<<<<<<< HEAD
from random import randint


def Animation1(driver):
    time.sleep(abs((gauss(1, 1) * 5000 + 10000))/1000)
    time.sleep(abs((gauss(1, 1) * 5000 + 20000))/1000)

=======

def Animation1(driver):
    time.sleep(abs((gauss(1, 1) * 5000 + 10000))/1000)
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
    try:
        driver.find_element_by_id("vjd_age_agree").click()
    except:
        pass
<<<<<<< HEAD
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 1000 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 5000 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)

    try:
        click_random_menu(driver)
    except:
        javascript = "console.log('could not navigate menu')"
        driver.execute_script(javascript)

    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 5000 + 5000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    javascript = "console.log('xpath try finished')"
    driver.execute_script(javascript)
    time.sleep(abs((gauss(1, 1) * 500 + 30000))/1000)

    try:
        click_random_menu(driver)
    except:
        javascript = "console.log('could not navigate menu')"
        driver.execute_script(javascript)

    javascript = "console.log('xpath try finished')"
    driver.execute_script(javascript)

    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)


def click_menu(driver, menu_items_xpath):
    for menu_item in menu_items_xpath:
        time.sleep(abs((gauss(1, 1) * 500 + 4000))/1000)
        try:
            javascript = "console.log('menu item is "+menu_item+"')"
            driver.execute_script(javascript)
            element = driver.find_element_by_xpath(menu_item)
=======
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 1000 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 5000 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 2000)") 
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    driver.execute_script("window.scrollTo(0, 20)")
    time.sleep(abs((gauss(1, 1) * 500 + 20000))/1000)
    menu_list = ["NEW ARRIVALS","E-LIQUIDS","DEVICES","E-LIQUIDS","ALL BRANDS","DEALS & SALE","CONTACT US","HOME"]
    menu_list_xpath = ['//*[@id="section-header"]/div/div[1]/nav/ul/li[`10]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[9]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[8]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[7]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[6]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[5]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[4]/a','//*[@id="section-header"]/div/div[1]/nav/ul/li[3]/a','//header[@id="section-header"]/div/div[1]/nav/ul/li[2]/a','//header[@id="section-header"]/div/div[1]/nav/ul/li[2]/a']
    
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
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
            element.click()
            element.click()
            javascript = "console.log('xpath item content "+element.text+"')"
            driver.execute_script(javascript)
        except:
            javascript = "console.log('xpath try cought')"
            driver.execute_script(javascript)

<<<<<<< HEAD

def click_random_menu(driver):

    mobile_menu = [
        {
            'current': '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[1]/button',
            'next': '//*[@id="mobile-panel-0"]/div[2]/ul/li[2]/a'
        },
        {
            'current': '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[2]/button',
            'next': '//*[@id="mobile-panel-1"]/div[2]/div[1]/div[1]/button',
            'last': '//*[@id="mobile-list-0"]/div/ul/li[1]/a'
        },
        {
            'current': '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[3]/button',
            'next': '//*[@id="mobile-panel-2"]/div[2]/div[1]/div[1]/button',
            'last': '//*[@id="mobile-list-3"]/div/ul/li[1]/a'
        },
        {
            'current': '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[4]/button',
            'next': '//*[@id="mobile-panel-3"]/div[2]/ul/li[1]/a'
        },
        {
            'current': '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[5]/button',
        },
        {
            'current': '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[6]/button',
        },
    ]

    mobile_menu_list_xpath = ['//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[1]/button', '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[2]/button', '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[3]/button',
                              '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[4]/button', '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[5]/a', '//*[@id="mobile-menu"]/div/div[1]/div[1]/ul/li[6]/a']

    desktop_menu_list_xpath = ['//*[@id="shopify-section-header"]/section/nav/div/div/ul/li[1]/a', '//*[@id="shopify-section-header"]/section/nav/div/div/ul/li[2]/a', '//*[@id="shopify-section-header"]/section/nav/div/div/ul/li[3]/a',
                               '//*[@id="shopify-section-header"]/section/nav/div/div/ul/li[4]/a', '//*[@id="shopify-section-header"]/section/nav/div/div/ul/li[5]/a', '//*[@id="shopify-section-header"]/section/nav/div/div/ul/li[6]/a']

    menu_item_xpath = []

    try:
        javascript = "console.log('trying open menu')"
        driver.execute_script(javascript)
        driver.find_element_by_xpath(
            '//*[@id="shopify-section-header"]/section/header/div/div/nav/button').click()
        javascript = "console.log('open menu success will try mobile menu')"
        driver.execute_script(javascript)
        mobile_item = random.choice(mobile_menu)
        menu_item_xpath.append(mobile_item['current'])
        if mobile_item['next']:
            menu_item_xpath.append(mobile_item['next'])
            if mobile_item['last']:
                menu_item_xpath.append(mobile_item['last'])
    except:
        javascript = "console.log('open menu try cought')"
        driver.execute_script(javascript)
        javascript = "console.log('ossuming desktop and will try desktop menu')"
        driver.execute_script(javascript)
        menu_item_xpath = [random.choice(desktop_menu_list_xpath)]

    click_menu(driver, menu_item_xpath)

=======
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
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a

# def Animation2(driver):
#     try:
#         driver.find_element_by_id("vjd_age_agree").click()
#     except:
#         pass
<<<<<<< HEAD
#     try:
#         time.sleep(1)
#         driver.execute_script("window.scrollTo(0, 2000)")
#         time.sleep(10)
=======
#     try:                
#         time.sleep(1)
#         driver.execute_script("window.scrollTo(0, 2000)") 
#         time.sleep(10) 
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
#         driver.execute_script("window.scrollTo(0, 10)")
#         time.sleep(10)
#         driver.find_element_by_xpath("//div[@id='shopify-section-collection-template']/section/div[3]/div/div/button[2]").click()
#         time.sleep(10)
#         driver.execute_script("window.scrollTo(0, 2000)")
#         time.sleep(10)
#         driver.execute_script("window.scrollTo(0, 10)")
#         time.sleep(10)
#         driver.find_element_by_xpath("//div[@id='bc-sf-filter-top-sorting']/button[4]").click()
#         time.sleep(10)
#         driver.execute_script("window.scrollTo(0, 700)")
#         time.sleep(10)
#         driver.find_element_by_xpath("//header[@id='section-header']/div/div/button").click()
#         time.sleep(10)
#         driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[7]/div/span").click()
#         time.sleep(10)
#         driver.find_element_by_xpath("//section[@id='sidebar-menu']/div/div/div/nav/div[7]/div[2]/div/div[2]/a").click()
#         time.sleep(10)
#         driver.execute_script("window.scrollTo(0, 2000)")
#         time.sleep(10)
#         driver.execute_script("window.scrollTo(0, 10)")
#         time.sleep(10)
#     except:
#         pass
#     time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
#     driver.find_element_by_xpath(f"//a[text()='{menu_item_2}']").click()
#     time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
#     driver.execute_script("window.scrollTo(0, 2000)")
#     time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
#     driver.execute_script("window.scrollTo(0, 20)")
#     time.sleep(abs((gauss(1, 1) * 500 + 2000))/1000)
