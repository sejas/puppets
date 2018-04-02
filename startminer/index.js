const fetch = require('node-fetch'),
      bitcoin = require('bitcoinjs-lib'),
      appendToFile = require('./bauaux').appendToFile,
      puppeteer = require('puppeteer')

function generateRandomAndSaveWallet() {
  const keyPair = bitcoin.ECPair.makeRandom(),
        address = keyPair.getAddress()
        wif = keyPair.toWIF()

  //TODO save wif and address
  console.log('wif: '+wif)
  console.log('address: '+address)
  appendToFile(`${wif}:${address}\n`)
  return address
}

// generateRandomAndSaveWallet()

// async function subscribe(addr) {
//   const res = await fetch('https://www.startminer.com/1835790', { method: 'POST', body: 'task=sign&addr='+addr })
//   return res
// }

async function postToURL (addr) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto('https://www.startminer.com/1835790');
  await page.click('form input[name="addr"]') // select input addr
  await page.keyboard.type(addr) // write btc address
  await page.click('form button') // click button "Start mining"
  await page.waitForNavigation()
  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
}
// subscribe('1MkGLN4XHpXZ51AqF7vfcWi2X4TYkdSXdo')
postToURL('1MkGLN4XHpXZ51AqF7vfcWi2X4TYkdSXdo')

