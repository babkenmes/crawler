const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('opera').usingServer('http://localhost:4444/wd/hub').build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
  } finally {
    await driver.quit();
  }
})();
