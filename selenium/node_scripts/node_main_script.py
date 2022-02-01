# -*- coding: utf-8 -*-
from webmen import (
    getAllDevices,
    getDevice,
    getWeb,
    getKey,
    keyDone,
    keyError,
    keyStarted,
    keyStopped,
    recapDetected,
    saveLink,
    getLocation,
    captcha
)
from exceptions import *
from fields import *
from anmen import callAnimation, getAnimationGroupName
from multiprocessing import Pool
from contextlib import closing

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

from random import gauss
import unittest
import time
import re
import sys
import time
import yaml
import requests
import random
import os

# APPLICATION = "vpn"


MORE_RESULTS_TEXT = "More results"
MAX_PAGES = 20
PORT = "4444"

# ="None" Shit, I am tired


def getOptions(userAgent, windowSize, is_mobile, crowling, application_name="None"):

    options = webdriver.ChromeOptions()
    width = int(windowSize.split(',')[0])
    height = int(windowSize.split(',')[1])
    mobile_emulation = {"deviceMetrics": {
        "width": width, "height": height, "pixelRatio": 3}}

    options.add_experimental_option("mobileEmulation", mobile_emulation)
    options.accept_untrusted_certs = True
    options.assume_untrusted_cert_issuer = True
    # options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_argument(f"--user-agent={userAgent}")
    options.add_argument(f"--window-size={windowSize}")
    options.add_argument("--disable-extensions")
    options.add_argument("--disable-infobars")
    options.add_argument("--ignore-certificate-errors")
    options.add_argument("--disable-session-crashed-bubble")
    options.add_argument("--enable-javascript")
    options.add_argument("--cache-control=max-age=0")
    options.add_experimental_option('useAutomationExtension', False)
    options.add_argument("--disable-blink-features")
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("--start-maximized")
    # if application_name != "None":
    #     options.set_capability("applicationName", application_name)

    return options

    # options.add_argument("--start-maximized")

    # if application_name != "None":
    #     options.set_capability("applicationName", application_name)

    # options.set_capability("applicationName", application_name)

    return options


def findInSearch(driver, key_data, is_mobile):
    tld = key_data["tld"]
    domain = key_data["domain"]
    search(driver, key_data[KEY_FIELD], tld)

    page = 0
    while page <= MAX_PAGES:
        page += 1
        elements = driver.find_elements_by_xpath(
            "//a[contains(@href,'" + domain + "')]"
        )
        # try:
        #     elements = driver.find_elements_by_xpath(
        #         "//a[contains(@href,'blablabil')]")
        #     # print(elements)
        # except Exception as inst :
        #     print("Element not found" +
        #               key_data[KEY_FIELD], f" type:{type(inst)}, message: {inst}, args:{inst.args}")
        #     nextPage(driver, is_mobile)
        #     # print("Could not locate site element")
        if len(elements) > 0:
            # print(f"Found in page: {page}")
            # go to web site
            return elements[0]
        else:
            print(f"Page domain - {domain} - not found")
            nextPage(driver, is_mobile)

    raise WebNotFound


def enterKeyword(element, keyword):
    element.clear()
    for letter in keyword:
        try:
            time.sleep(abs((gauss(1, 1) * 15 + 150)) / 1000)
        except:
            pass
        element.send_keys(letter)


def tryClosingPrivacyAgreement(driver):
    try:
        driver.switch_to.frame(0)
        agreebutton = driver.find_element_by_id("introAgreeButton")
        agreebutton.click()
        # print("Clicked privacy agreement")
        time.sleep(abs((gauss(1, 1) * 2000 + 1000)) / 1000)
    except Exception as e:
        try:
            driver.switch_to.default_content()
            agreebutton = driver.find_element_by_id("cnskx")
            agreebutton.click()
        except:
            pass
    finally:
        driver.switch_to.default_content()


def goDirect(driver, keyword):
    time.sleep(abs((gauss(1, 1) * 550 + 3500)) / 1000)
    driver.get(keyword)
    time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)


def is_captcha(driver):
    try:
        time.sleep(abs((gauss(1, 1) * 550 + 1500)) / 1000)
        recap = driver.find_element_by_id("recaptcha")
        time.sleep(abs((gauss(1, 1) * 550 + 1500)) / 1000)
        print("captcha found")
        return recap
    except:
        print("captcha not found")
        return False


def search(driver, keyword, tld):
    time.sleep(abs((gauss(1, 1) * 550 + 2500)) / 1000)
    driver.get("https://google." + tld + "/")
    time.sleep(abs((gauss(1, 1) * 500 + 10000)) / 1000)
    print("bla")
    tryClosingPrivacyAgreement(driver)
    time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
    search_input = driver.find_element_by_name("q")
    enterKeyword(search_input, keyword)
    time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
    search_input.send_keys(Keys.ENTER)
    time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
    if is_captcha(driver):
        print("raising captcha")
        raise FoundCaptcha
    time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
    driver.execute_script("window.scrollTo(0, 2000)")
    time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
    driver.execute_script("window.scrollTo(0, 10)")
    time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)

    # tryClosingPrivacyAgreement(driver)


def nextPage(driver, mobile):
    # print("trying next page")
    driver.execute_script("document.body.scrollIntoView({block: 'end'})")
    if mobile == True:
        nextButton = driver.find_element_by_class_name("RVQdVd")
    else:
        nextButton = driver.find_element_by_id("pnnext")
    # if len(nextButton) == 0:
    # raise NextButtonNotFound
    try:
        try:
            time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
            ActionChains(driver).move_to_element(nextButton).perform()
        except Exception as e:
            pass
            # print(e)
        finally:
            driver.execute_script(
                "document.body.scrollIntoView({block: 'end'})")
            ActionChains(driver).move_to_element(nextButton).perform()
            nextButton.click()
    except Exception as e:
        raise NextButtonCouldNotBeClicked(e)


def getWebDriver(options):
    driver = webdriver.Remote(
        command_executor=f"http://localhost:4444/wd/hub",
        desired_capabilities=options.to_capabilities(),
    )
    driver.implicitly_wait(30)
    return driver


def goToWeb(driver, website):
    try:
        time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)
        driver.execute_script(
            "arguments[0].scrollIntoView({block: 'end'})", website)
        time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)
        ActionChains(driver).move_to_element(website).perform()
        time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)
        website.click()
        time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)
    except Exception as e:
        raise WebNotClickable(e)
        # print("Could not click " + key_data[KEY_FIELD], f" type:{type(inst)}, message: {inst}, args:{inst.args}")


def runDevice(application):
    print("run")
    # print(key_data[DEVICE_GROUP_FIELD])
    # keyStarted(key_data["_id"])
    # rand_seconds = random.randint(10,200)
    # time.sleep(rand_seconds)
    time.sleep(abs((gauss(1, 1) * 5000 + 1000)) / 1000)
    while True:
        try:
            location = ""
            try:
                location = getLocation()
            except Exception as e:
                print(e)
                time.sleep(60 + abs((gauss(1, 1) * 5000 + 1000)) / 1000)
                pass
            print(location)
            if not location or location == "AM":
                time.sleep(60 + abs((gauss(1, 1) * 5000 + 1000)) / 1000)
                continue
            else:
                print("fg")
            try:
                landed = False
                key_data = getKey(application)
                if not key_data:
                    print("no keyword")
                    time.sleep(60 + abs((gauss(1, 1) * 5000 + 1000)) / 1000)
                    continue
                print(key_data)
                device = getDevice(key_data[DEVICE_GROUP_FIELD])
                crawl = key_data.get("crawl")
                keyStarted(key_data["_id"], device[DEVICE_NAME_FIELD])
                options = getOptions(
                    device[USER_AGENT_FIELD],
                    device[WINDOW_SIZE_FIELD],
                    device[MOBILE_FIELD],
                    crawl,
                    key_data["region_tag"]
                )
                driver = getWebDriver(options)
                
                link = key_data.get("link")

                if link and not crawl:
                    print("aaa")
                    goDirect(driver, key_data["link"])
                    landed = True
                    callAnimation(key_data, driver)
                else:
                    ourWebSite = findInSearch(
                        driver, key_data, device[MOBILE_FIELD])
                    if ourWebSite is None:
                        keyError(key_data["_id"], f"Keyword not found", landed)
                        print("Not found")
                    else:
                        try:
                            driver.execute_script(
                                "arguments[0].scrollIntoView({block: 'end'})", ourWebSite)
                        except:
                            pass
                        time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)
                        ActionChains(driver).move_to_element(
                            ourWebSite).perform()
                        time.sleep(abs((gauss(1, 1) * 500 + 3000)) / 1000)

                        copiable = False
                        try:
                            copiable = ourWebSite.get_attribute("onmousedown")
                        except:
                            pass

                        if crawl and copiable:
                            driver.execute_script(
                                "(function pressThat(el){el.onmousedown()})(arguments[0])", ourWebSite)
                            time.sleep(abs((gauss(1, 1) * 500 + 1000)) / 1000)
                            link = ourWebSite.get_attribute("href")
                            saveLink(key_data["_id"], (link))
                            landed = True
                            print("link")
                            print(link)
                        else:
                            goToWeb(driver, ourWebSite)
                            print("animating")
                            landed = True
                            callAnimation(key_data, driver)
                            # print("Site animation exception has accured" +
                            #           key_data[KEY_FIELD], f" type:{type(inst)}, message: {inst}, args:{inst.args}")

                            print("successfully finished")
                keyDone(key_data["_id"])
            except WebNotClickable as e:
                keyError(
                    key_data["_id"], f"website is not clickable exception: {e}", landed
                )
            except AnimationError as e:
                keyError(
                    key_data["_id"],
                    f"Animation exception has accured, exception: {e}",
                    landed,
                )
            except NoDeviceError as e:
                keyError(
                    key_data["_id"],
                    f"No device was found group:{key_data[DEVICE_GROUP_FIELD]}",
                    landed,
                )
            except WebNotFound as e:
                keyError(
                    key_data["_id"],
                    f"Web could not be found in {MAX_PAGES} pages",
                    landed,
                )
            except NextButtonNotFound as e:
                keyError(
                    key_data["_id"],
                    f"Button for next page not be found, device:{device[DEVICE_NAME_FIELD]}, isMobile:{device[MOBILE_FIELD]}, button text: {MORE_RESULTS_TEXT}",
                    landed,
                )
            except NextButtonCouldNotBeClicked as e:
                keyError(
                    key_data["_id"],
                    f"Next page button could not be clicked, device:{device[DEVICE_NAME_FIELD]}, isMobile:{device[MOBILE_FIELD]}, button text: {MORE_RESULTS_TEXT}",
                    landed,
                )
            except FoundCaptcha as e:
                print("cought captcha")
                captcha(
                    key_data["_id"],
                    landed,
                )
            except Exception as e:
                keyError(key_data["_id"],
                         f"An unknown has accured: {e} ", landed)
                print(e)

            finally:
                if driver:
                    driver.quit()
                keyStopped(key_data["_id"])
        except Exception as e:
            print(f"An unknown has accured: {e} ")
            time.sleep(60 + abs((gauss(1, 1) * 5000 + 1000)) / 1000)
            pass


if __name__ == "__main__":
    print("***** node main script started ******")
    region_tag = os.environ["REGION_TAG"]
    browsers_count = os.environ["NODE_MAX_SESSION"]
    print(f"starting script with {browsers_count} - browsers on {region_tag}")
    browsers = [region_tag] * int(browsers_count)
    with closing(Pool(processes=int(browsers_count))) as pool:
        pool.map(runDevice, browsers, 1)
        pool.terminate()

    #         browsers = []
    # for i in range(int(browsers_count)):
    #     browsers.append("")
