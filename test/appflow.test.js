const landingPage = require('../pages/landing.page')
const signInPage = require('../pages/signin.page')
const createAcccountPage = require('../pages/createaccount.page')
const myaccountPage = require('../pages/myaccount.page')
const myStorePage = require('../pages/mystore.page')
const constants = require('../constants');
const config = require('../config');
const inputdata = require('../testdata/inputdata');
const { assert } = require('chai');
const mystorePage = require('../pages/mystore.page')
const shoppingcartPage = require('../pages/shoppingcart.page')
const elementUtil = require('../util/elementUtil')
// const { shoppingcartheader } = require('../pages/shoppingcart.page')

describe('My Store app : Registration to Payment flow ', function(){
    it('verify landing page title', function(){
        browser.url('/')
        browser.maximizeWindow()
        const title = landingPage.getLandingPageTitle()
        console.log('landing page title is :', title);
        assert.equal(constants.LANDING_PAGE_TITLE, title, 'title is not found')
    })
    it('verify SignIn link exist and click on SignIn Link', function(){
        assert.equal(true, landingPage.isSignInLinkExist(), 'SignIn link is not present')
        landingPage.clickOnSignInLink()
       })
   
     it('verify email field and enter emailID and click on Create an account button', function(){
        assert.equal(true, signInPage.isEmailFieldExist(), 'Email field does not exist')
        signInPage.sendEmailAddress(inputdata.email)
        signInPage.clickOnCreateAnAccountBtn()
     })

     it('fill personal information data registration page', function(){
        assert.equal(true, createAcccountPage.isHeaderTitleDisplayed(), 'hearder title is displayed ')
        createAcccountPage.fillPersonalInfo(inputdata.firstname, inputdata.lastname, inputdata.pwd)
        // console.log('prepoulated email is: ',createAcccountPage.getEmailIDText())
        // assert.equal(inputdata.email, createAcccountPage.getEmailIDText(), 'incorrect prepopulated email')
     })
     
     it('fill address details in registration page and click on Register button', function(){
        createAcccountPage.fillAddressInfo(inputdata.company, inputdata.address , inputdata.city, inputdata.state, 
        inputdata.postcode, inputdata.addinfo, inputdata.mobilenumber, inputdata.assignaddress)
        createAcccountPage.clickOnRegisterBtn()
         
     })
 
     it('verify account name in my account page and click on home icon', function(){
    //  const accounttitle = myaccountPage.getAccountNameText()
    //  console.log('Account name is: ', accounttitle)
    //  assert.equal(constants.ACCOUNT_NAME, accounttitle, 'account name is not same')
     myaccountPage.clickOnHomeIcon()
     })

     it('select product and add to cart', function(){
         const productName = mystorePage.getProductText()
         console.log('Product name is : ', productName)
         mystorePage.clickOnProduct()
         mystorePage.addProductToCart()
     })

     it('Click on Proceed To Checkout button', function(){
        myStorePage.clickOnProceedToCheckOutBtn()
    })

    it('Proceed till payment page and verify product in payment page', function(){
    // const cartTitle = shoppingcartPage.getShoppingCartTitle()
    // console.log('Cart page title is: ', cartTitle)
    // assert.equal(constants.SHOPPING_CART_HEADER, cartTitle, 'header does not match')
    shoppingcartPage.clickOnProceedToCheckOutCart()
    const cartproduct = shoppingcartPage.getCartProductText()
    assert.equal(constants.PRODUCT_NAME, cartproduct , 'product names are not same')

    })


    })