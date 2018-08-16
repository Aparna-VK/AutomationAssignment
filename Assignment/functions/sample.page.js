import Page from './page.js';

class samplePage extends Page {
  get signInButton() { return browser.element('//a[@class="login"]'); }
  get emailToCreate(){return browser.element('//*[@id="email_create"]');}
  get createAccountButton(){return browser.element('//button[contains(@class,"button-medium exclusive")]');}
  get FirstName (){return browser.element('//input[@id="customer_firstname"]');}
  get LastName () {return browser.element('//input[@id="customer_lastname"]');}
  get Password() {return browser.element('//input[@id="passwd"]');}
  get firstName() {return browser.element('//input[@id="firstname"]');}
  get lastName () {return browser.element('//input[@id="lastname"]');}
  get Address1() {return browser.element('//input[@id="address1"]');}
  get city() {return browser.element('//input[@id="city"]');}
  get state() {return browser.element('//select[@id="id_state"]');}
  get postalCode() {return browser.element('//input[@id="postcode"]');}
  get country() {return browser.element('//select[@id="id_country"]');}
  get AdditionalInfo() {return browser.element('//textarea[@id="other"]');}
  get Phone() {return browser.element('//input[@id="phone"]');}
  get mobNumber() {return browser.element('//input[@id="phone_mobile"]');}
  get addressAlias() {return browser.element('//input[@id="alias"]');}
  get registerButton() {return browser.element('//button[@id="submitAccount"]');}
  get searchBox() {return browser.element('//input[contains(@class,"search_query")]');}
  get searchButton(){return browser.element('//button[contains(@class,"button-search")]')}
  get addToCartButton() {return browser.element('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]/span'); }
  get DOBday() {return browser.element('//select[@id="days"]');} 
  get DOBmonth() { return browser.element('//select[@id="months"]');} 
  get DOByear() { return browser.element('//select[@id="years"]');}
  get Newsletter() {return browser.element('//input[@id="newsletter"]');}
  get Offers() {return browser.element('//input[@id="optin"]');}
  get gender2(){return browser.element('//input[@id="id_gender2"]');}
  get company() {return browser.element('//input[@id="company"]');}
  get phone() {return browser.element('//input[@id="phone"]');}
  get additionalInfo() {return browser.element('//textarea[@id="other"]');}
  get Address2 () {return browser.element('//input[@id="address2"]');}

  goToHome () {
    browser.url('http://automationpractice.com');
    browser.pause(1000);
  }

  clickSignInButton () {
    this.signInButton.click();
    browser.pause(1000);
  }

  enterEmailId(input) {
    this.emailToCreate.setValue(input);
    browser.pause(1000);
  }

  clickCreateAccount() {
    this.createAccountButton.click();
    browser.pause(1000);
  }

  enterFirstName(input) {
    this.FirstName.setValue(input)
    browser.pause(1000);

  }

  enterLastName(input){
    this.LastName.setValue(input)
    browser.pause(1000);
  }

  enterPassword(input){
    this.Password.setValue(input)
    browser.pause(1000);
  }

  enterfirstName(input) {
    this.firstName.setValue(input)
    browser.pause(1000);

  }

  enterlastName(input){
    this.LastName.setValue(input)
    browser.pause(1000);
  }

  enterAddress(input){
    this.Address1.setValue(input);
    browser.pause(1000);
  }

  enterCity(input){
    this.city.setValue(input);
    browser.pause(1000);
  }

  enterState(input){
    this.state.selectByVisibleText(input);
    browser.pause(1000);
  }

  enterPostalCode(input){
    this.postalCode.setValue(input);
    browser.pause(1000);
  }


  enterCountry(input){
    this.country.selectByVisibleText(input);
    browser.pause(1000);
  }
  
  enterMobNumber(input){
    this.mobNumber.setValue(input);
    browser.pause(1000);
  }

  enterAddressAlias(input){
    this.addressAlias.setValue(input);
    browser.pause(1000);
  }

  clickRegisterButton(){
    this.registerButton.click();
    browser.pause(1000);
  }
  
  enterInSearchField(input){
    this.searchBox.setValue(input);
    browser.pause(1000);
  }

  clickAddToCartButton(){
    this.addToCartButton.click();
    browser.pause(5000);
  }

  clickSearchButton(){
    this.searchButton.click();
    browser.pause(1000);
  }

  setDOBday(input){
    this.DOBday.selectByValue(input);
    browser.pause(1000);
  }

  setDOBmonth(input){
    this.DOBmonth.selectByVisibleText(input);
    browser.pause(1000);
  }

  setDOByear(input){
    this.DOByear.selectByValue(input);
    browser.pause(1000);
  }

   clickNewsLetter(){
    this.Newsletter.click();
    browser.pause(1000);
  }

  clickOffer(){
    this.Offers.click();
    browser.pause(1000);
  }

  clickGender(){
    this.gender2.click();
    browser.pause(1000);
  }

  enterCompany(input){
    this.company.setValue(input);
    browser.pause(1000);

  }

  enterPhone(input){
    this.phone.setValue(input);
    browser.pause(1000);
  }

  enterAdditionalInfo(input){
    this.additionalInfo.setValue(input);
    browser.pause(1000);
  }

  enterAddress2(input){
    this.Address2.setValue(input);
    browser.pause(1000);
  }
};
export default new samplePage();
