const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class MyStorePage{
 get productname() {return $(`//a[@class='product-name' and @title ='Blouse']`)}
 get addtocart() {return $(`//button[@name = 'Submit']`)}
 get proceedtocheckout() {return $('.button-medium')}

 getProductText(){
    elementUtil.doIsDisplayed(this.productname)
    elementUtil.doGetText(this.productname)
}

clickOnProduct(){
    elementUtil.doClick(this.productname)
}
addProductToCart(){
    elementUtil.doIsDisplayed(this.addtocart)
    elementUtil.doClick(this.addtocart)
}

clickOnProceedToCheckOutBtn(){
    elementUtil.doIsDisplayed(this.proceedtocheckout)
    elementUtil.doClick(this.proceedtocheckout)
}

}

module.exports = new MyStorePage()