const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class ShoppingCartPage{



    get shoppingheader() {return $('cart_title')}
    get cartproduct() {return $('=Blouse')} 
    get tccheckbox() {return $('#uniform-cgv')}
    get cartproceedceckout() {return $('=Proceed to checkout')}
    get addressprocess() {return $(`//span[text()= 'Proceed to checkout']`)}
    get shippingprocess() {return $(`//button[@name='processCarrier']`)}

 getShoppingCartTitle(){
    elementUtil.doIsDisplayed(this.shoppingheader)
  return  elementUtil.doGetText(this.shoppingheader)
 }

 isSummaryOptionDisplayed(){
    elementUtil.doIsDisplayed(this.summary)
    }
isSignInOtionDisplayed(){
    return elementUtil.doIsDisplayed(this.signin)
    }

    isAddressOtionDisplayed(){
        return  elementUtil.doIsDisplayed(this.address)
    }
    isShippingOtionDisplayed(){
        return elementUtil.doIsDisplayed(this.shipping)
    }
    isPaymentOtionDisplayed(){
        return  elementUtil.doIsDisplayed(this.payment)
    }

    getCartProductText(){
        return elementUtil.doGetText(this.cartproduct)
    }

    clickOnTermsAndCondition(){
        elementUtil.doIsDisplayed(this.tccheckbox)
        elementUtil.doClick(this.tccheckbox)
    }

    clickOnProceedToCheckOutCart(){
       
        elementUtil.doClick(this.cartproceedceckout)
        elementUtil.doIsDisplayed(this.addressprocess)
        elementUtil.doClick(this.addressprocess)
        elementUtil.doIsDisplayed(this.tccheckbox)
        elementUtil.doClick(this.tccheckbox)
        elementUtil.doIsDisplayed(this.shippingprocess)
        elementUtil.doClick(this.shippingprocess)  
        elementUtil.doIsDisplayed(this.cartproduct)
        
    }

}
module.exports = new ShoppingCartPage()