from selenium import webdriver

firefox_options = webdriver.FirefoxOptions()
print("urish pl")
driver = webdriver.Remote(
    command_executor='http://localhost:4444/wd/hub',
    options=firefox_options
)
print("fckn shit")
driver.get("http://www.google.com")

driver.implicitly_wait(300)
driver.quit()