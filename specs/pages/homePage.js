const { createNewGroup } = require("./groupPage");

const I = actor();

module.exports = {
  
  meetingHistoryButton: "#home-go-history",
  scheduleMeetingButton: "#home-go-schedule",
  enterTheMeetingButton: "#home-go-create",
  headerShowSettingsLogoButton: "#header-show-settings",
  headerDropDownMenuGoProfileButton: "#header-go-profile",

  toggleContacts: "#home-toggle-contacts",

  
  verifyAllRequiredElemetsAreOnPage() {
    I.seeElement(this.meetingHistoryButton);
    I.seeElement(this.scheduleMeetingButton);
    I.seeElement(this.enterTheMeetingButton);
    I.seeElement(this.headerShowSettingsLogoButton);
  },

  goToUserProfile() {
    I.waitForElement(this.headerShowSettingsLogoButton);
    I.click(this.headerShowSettingsLogoButton);
    I.waitForElement(this.headerDropDownMenuGoProfileButton);
    I.click(this.headerDropDownMenuGoProfileButton);
  },  

  goToTheMeetingHistory(){
    I.waitForElement(this.meetingHistoryButton);
    I.click(this.meetingHistoryButton);
  },

  

};
