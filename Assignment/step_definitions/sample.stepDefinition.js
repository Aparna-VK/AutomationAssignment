import { defineSupportCode } from 'cucumber';
import samplePage from '../functions/sample.page.js';

defineSupportCode(function({ Given, When, Then }) {

  Given(/^User goes to Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User clicks Singn In Button$/, () => {
    samplePage.clickSignInButton();
  });

  Then(/^User enter email address$/, () => {
    samplePage.enterEmailId("aparnav@qburst.com");
  });

  Then(/^User clicks create account Button$/, () => {
    samplePage.clickCreateAccount();
  });

  Then(/^User enter Details$/, () => {
    browser.pause(3000);
    samplePage.clickGender();
    samplePage.enterFirstName("Aparna");
    samplePage.enterLastName("Santhosh");
    samplePage.enterPassword("12345678");
    samplePage.setDOBday(4);
    samplePage.setDOBmonth("March");
    samplePage.setDOByear(1997);
    samplePage.clickNewsLetter();
    samplePage.clickOffer();
    samplePage.enterfirstName("Aparna");
    samplePage.enterlastName("Santhosh");
    samplePage.enterCompany("Qburst");
    samplePage.enterAddress("vapolathmeethal");
    samplePage.enterAddress2("Kottamparamba");
    samplePage.enterCity("Kozhikode");
    samplePage.enterState("Texas");
    samplePage.enterPostalCode("673008");
    samplePage.enterCountry("United States");
    samplePage.enterAdditionalInfo("Lives in TVM");
    samplePage.enterPhone("9987653421");
    samplePage.enterMobNumber("9876543210");
    samplePage.enterAddressAlias("Technopark");
    browser.pause(5000);
  });

  Then(/^User click Register Button$/, () => {
    samplePage.clickRegisterButton();
  });

  Then(/^User search for an item$/, () => {
    samplePage.enterInSearchField("T-Shirt");
  });

  Then(/^User click search Button$/, () => {
    samplePage.clickSearchButton();
  });

  Then(/^User add Item to th cart$/, () => {
    samplePage.clickAddToCartButton();

  });
});
