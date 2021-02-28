const { getEmail } = require('./helpers/index')
const getLink = require('readline-sync')
const puppeteer = require('puppeteer');

const accountData = {
  firstName : "inputyourfirstnamehere", //inputyourfirstnamehere
  lastName : "inputyourlastnamehere", //inputyourlastnamehere
  numberPhone : "6281323238237", //your number phone
  companyName : "PT Dummy Data", //your companny name
  addressOne : "Jl. Dummy Data", //your first address
  addressTwo : "Gg. Dummy Data", //your second address
  city : "Medan", //your city
  state : "Sumatera utara", //your state/province
  postCode : 23282, //your post code
  country : 'ID', //your country
  npwp : '', //just blank it if your dont have npwp, take it easy
  nik : 3322220111222222, //dummy NIK, dont use this in automation, because this is illegal
  indexOfQuestion : 2, //index of your security question, change this if you want
  answerOfQuestion : "Dummy Answer", //answer of your security question
  password : "dummypassword12321" //your best password here
}

console.log("[*] Automation Exabytes Register by RJD")
const link = getLink.question("[*] Your Pastebin Link (raw): ")

;(async () => { 
  
  const getDataEmail = await getEmail(`${link}`)
  let number = 1
  for (let email of getDataEmail) {
        
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
         
        console.clear()
        console.log(`[*] Automation Number: ${number++} | ${email}`)
        console.log("[*] Open https://billing.exabytes.co.id/register.php")
         
        await page.goto('https://billing.exabytes.co.id/register.php')
        
        await page.setViewport({ width: 1366, height: 695 })
         
        await page.waitForTimeout(4000)
        console.log("[*] Trying to Fill First Name")
        await page.waitForSelector('#containerNewUserSignup #inputFirstName')
        await page.type('#containerNewUserSignup #inputFirstName',`${accountData.firstName}`)
        
        console.log("[*] Trying to Fill Last Name")
        await page.waitForSelector('#containerNewUserSignup #inputLastName')
        await page.type('#containerNewUserSignup #inputLastName',`${accountData.lastName}`)

        console.log(`[*] Trying to Fill Email ${email}`)
        await page.waitForSelector('#containerNewUserSignup #inputEmail')
        await page.type('#containerNewUserSignup #inputEmail',`${email}`)
        
        console.log("[*] Trying to Fill Number Phone")
        await page.waitForSelector('#containerNewUserSignup #inputPhone')
        await page.type('#containerNewUserSignup #inputPhone',`${accountData.numberPhone}`)
        
        console.log("[*] Trying to Fill Company Name")
        await page.waitForSelector('#containerNewUserSignup #inputCompanyName')
        await page.type('#containerNewUserSignup #inputCompanyName',`${accountData.companyName}`)
        
        console.log("[*] Trying to Fill Address 1")
        await page.waitForSelector('#containerNewUserSignup #inputAddress1')
        await page.type('#containerNewUserSignup #inputAddress1',`${accountData.addressOne}`)
        
        console.log("[*] Trying to Fill Address 2")
        await page.waitForSelector('#containerNewUserSignup #inputAddress2')
        await page.type('#containerNewUserSignup #inputAddress2',`${accountData.addressTwo}`)
        
        console.log("[*] Trying to Fill City")
        await page.waitForSelector('#containerNewUserSignup #inputCity')
        await page.type('#containerNewUserSignup #inputCity',`${accountData.city}`)
        
        console.log("[*] Trying to Fill State")
        await page.waitForSelector('#containerNewUserSignup #stateinput')
        await page.type('#containerNewUserSignup #stateinput',`${accountData.state}`)
        
        console.log("[*] Trying to Fill Post Code")
        await page.waitForSelector('#containerNewUserSignup #inputPostcode')
        await page.type('#containerNewUserSignup #inputPostcode',`${accountData.postCode}`)

        console.log("[*] Trying to Fill Country")  
        await page.waitForSelector('#containerNewUserSignup #inputCountry')
        await page.click('#containerNewUserSignup #inputCountry')
        
        await page.select('#containerNewUserSignup #inputCountry', `${accountData.country}`)
        
        await page.waitForSelector('#containerNewUserSignup #inputCountry')
        await page.click('#containerNewUserSignup #inputCountry')

        console.log("[*] Trying to Fill Information that Needed")
        await page.waitForSelector('#containerNewUserSignup #customfield467')
        await page.type('#containerNewUserSignup #customfield467',`${accountData.numberPhone}`)
        
        await page.waitForSelector('#containerNewUserSignup #customfield717')
        await page.type('#containerNewUserSignup #customfield717',`${email}`)
        
        await page.waitForSelector('#containerNewUserSignup #customfield856')
        await page.type('#containerNewUserSignup #customfield856',`${accountData.nik}`)
        
        await page.waitForSelector('#containerNewUserSignup #customfield811')
        await page.type('#containerNewUserSignup #customfield811',`${accountData.npwp}`)
        
        await page.waitForTimeout(2000)

        console.log("[*] Trying to Fill Password")
        await page.waitForSelector('#containerNewUserSecurity > #containerPassword #inputNewPassword1')
        await page.type('#containerNewUserSecurity > #containerPassword #inputNewPassword1',`${accountData.password}`)
        
        console.log("[*] Trying to Fill Confirm Password")
        await page.waitForSelector('#containerNewUserSecurity > #containerPassword #inputNewPassword2')
        await page.type('#containerNewUserSecurity > #containerPassword #inputNewPassword2',`${accountData.password}`)
        
        console.log("[*] Trying to Fill Security Question")
        await page.waitForSelector('#frmCheckout > #containerNewUserSecurity #inputSecurityQId')
        await page.click('#frmCheckout > #containerNewUserSecurity #inputSecurityQId')
        
        await page.select('#frmCheckout > #containerNewUserSecurity #inputSecurityQId', `${accountData.indexOfQuestion}`)
        
        await page.waitForSelector('#frmCheckout > #containerNewUserSecurity #inputSecurityQId')
        await page.click('#frmCheckout > #containerNewUserSecurity #inputSecurityQId')

        await page.waitForSelector('#containerNewUserSecurity #inputSecurityQAns')
        await page.type('#containerNewUserSecurity #inputSecurityQAns',`${accountData.answerOfQuestion}`)

        console.log("[*] Trying to Fill Checkbox")
        await page.waitForSelector('.col-md-12 > .panel > .panel-body > .col-md-12 > .checkbox')
        await page.click('.col-md-12 > .panel > .panel-body > .col-md-12 > .checkbox')
               
        console.log("[*] Trying to Click Sign Up")
        
        await page.waitForSelector('.col-md-9 > #registration > #frmCheckout > p > .btn')
        await page.click('.col-md-9 > #registration > #frmCheckout > p > .btn')
       
        let element = await page.waitForSelector('.container > .row > .col-md-9 > .header-lined > h1')
        await page.waitForTimeout(4000)
        let value = await page.evaluate(el => el.textContent, element)
        console.log(`[*] ${value}`)
        console.log("[*] All Done, Boss!! Automation is Complete.")
    
        await browser.close() 
}
})()