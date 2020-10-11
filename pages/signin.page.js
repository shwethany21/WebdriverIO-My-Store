const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class SignInPage{
// Page Objects
get emailID() { return $('#email_create')}
get creactAnAccount() {return $('#SubmitCreate')}

isEmailFieldExist(){
    return elementUtil.doIsDisplayed(this.emailID)
}

sendEmailAddress(value) {
     elementUtil.doSetValue(this.emailID, value);
}

clickOnCreateAnAccountBtn(){
     elementUtil.doClick(this.creactAnAccount)
}

}
module.exports = new SignInPage()