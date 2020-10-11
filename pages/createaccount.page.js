const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class CreateAnAccountPage{
    //Your personal information objects
    get headertitle() { return $('h1.page-heading')}
    get femaleOption() {return $('#id_gender2')}
    get firstName() {return $('#customer_firstname')}
    get lastName() {return $('#customer_lastname')}
    get prepemail() {return $(`//input[@id='email']`)}
    get password() {return $('#passwd')}
    get day() {return $('#days')} 
    get month() {return $('#months')} 
    get year() {return $('#years')} 
    get newsletterCheckbox() {return $('#newsletter')}
    get specialOfferCheckbox() {return $('#optin')}

    //Your Address objects
    get adfirstName() {return $('#firstname')}
    get adlastName() {return $('#lastname')}
    get adcompany() {return $('#company')}
    get address() {return $("//input[@id='address1']")}
    get adcity() {return $('#city')}
    get adstate() {return $('#id_state')}
    get adpostcode() {return $('#postcode')}
    get adcountry() {return $('#id_country')}
    get addinfo() {return $('#other')}
    get mobilenumber() {return $('#phone_mobile')}
    get assignaddress() {return $('#alias')}
    get registerbtn() {return $('#submitAccount')}
    
    isHeaderTitleDisplayed(){
      return  elementUtil.doIsDisplayed(this.headertitle)
    }

    getEmailIDText(){
    return elementUtil.doGetText(this.prepemail)
    }

    fillPersonalInfo(fn, ln, pw){
        elementUtil.doClick(this.femaleOption)
        elementUtil.doSetValue(this.firstName, fn)
        elementUtil.doSetValue(this.lastName, ln)
        elementUtil.doSetValue(this.password, pw)
        }
    getFirstnameText(){
        return elementUtil.doGetText(this.adfirstName)
        }
    getLastnameText(){
        return elementUtil.doGetText(this.adlastName)
        }
    fillAddressInfo(cmp, add , city, state, zip, addinfo, mobnumber, assignadd){
        elementUtil.doSetValue(this.adcompany, cmp)
        elementUtil.doSetValue(this.address, add)
        elementUtil.doSetValue(this.adcity, city)
        elementUtil.doSelectByVisbleText(this.adstate, state)
        elementUtil.doSetValue(this.adpostcode, zip)
        elementUtil.doSetValue(this.addinfo, addinfo)
        elementUtil.doSetValue(this.mobilenumber, mobnumber)
        elementUtil.doSetValue(this.assignaddress, assignadd)
              }

    clickOnRegisterBtn(){
        elementUtil.doClick(this.registerbtn)
    }


}

module.exports = new CreateAnAccountPage()