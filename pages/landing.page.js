const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class LandingPage{
// Page Objects
get signInLink() { return $('=Sign in')}

//Page Actions
getLandingPageTitle() {
    return elementUtil.doGetPageTitle(constants.LANDING_PAGE_TITLE)
}
isSignInLinkExist() {
    return elementUtil.doIsDisplayed(this.signInLink)
}
clickOnSignInLink() {
     elementUtil.doClick(this.signInLink)
}
}

module.exports = new LandingPage()