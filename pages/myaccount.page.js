
const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class MyAccount{
    get accountname() {return $('=account')}
    get homeicon() {return $(`//i[@class='icon-home']`)}

getAccountNameText(){
    return elementUtil.doGetText(this.accountname)
}

clickOnHomeIcon(){
    elementUtil.doIsDisplayed(this.homeicon)
    elementUtil.doClick(this.homeicon)
}

}
module.exports = new MyAccount()
