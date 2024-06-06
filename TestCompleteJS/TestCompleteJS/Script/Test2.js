var CommonSteps = require("CommonSteps");
var HomeOrderPage = require("HomeOrderPage");
var AddOrderPage = require("AddOrderPage");


function openOrderApplicationAndMoveToNewOrderWindow(){
  CommonSteps.openOrderApp();
  
  HomeOrderPage.homeOrderPage.createNewOrderByMainForm();
  
  AddOrderPage.addOrderPage
    .fillStateField("თბილისი, თამარაშვილის N1, 0182")
    .addOrderByPressingButton();
}

function reopenAddedOrderRetrieveStreetTextAndFillOtherFields(){
  HomeOrderPage.homeOrderPage
    .clickOnOrderByProductName();
  
  AddOrderPage.addOrderPage
    .retrieveTextDataFromStreetInputFieldAndInputInOtherFields()
    .addOrderByPressingButton();
}

function validateIfAddedValuesAreCorrect(){
  HomeOrderPage.homeOrderPage
    .clickOnOrderByProductName();
  
  AddOrderPage.addOrderPage
    .validateStreetField()
    .validateCityField()
    .validateZipField();
  
  CommonSteps.closeOrderApp();
}

function runAllOrderTests(){
  openOrderApplicationAndMoveToNewOrderWindow();
  reopenAddedOrderRetrieveStreetTextAndFillOtherFields();
  validateIfAddedValuesAreCorrect();
}

module.exports.runAllOrderTests = runAllOrderTests;