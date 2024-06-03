var CommonSteps = require("CommonSteps");
var OrderMainPage = require("OrderMainPage");
var OrderPage = require("OrderPage");

function validateIfCustomerAndMCFieldsAreEnabledAndCanBeEdited(){
  OrderMainPage.orderMainPage.createNewOrderByMainForm();
  
  OrderPage.orderPage
  .clickOnCustomerNameToActivateInputField()
  .checkIfCustomerInputFieldCanBeEditedAndEnabled()
  .checkIfMasterCardRadioButtonIsEnabledAndCanBeSelected()
  .addOrderByPressingButton();
}

function validateIfAddedOrderCanBeEdited(){
  OrderMainPage.orderMainPage
  .clickOnOrderByCustomerName(Project.Variables.CUSTOMER_TEXT_INPUT)
  .editOrderByTooltip()
  OrderPage.orderPage
  .checkIfUnitPriceRemainsSame();
  OrderMainPage.orderMainPage
  .checkIfAddedOrderHasEditOptions();
}

function validateIfAddedOrderCanBeDeleted(){
  OrderMainPage.orderMainPage
  .clickOnOrderByCustomerName(Project.Variables.CUSTOMER_TEXT_INPUT)
  .deleteOrderByToolTip()
  .checkIfAddedOrderHasDeleteOptions();
}

function runTestCaseOne(){
  CommonSteps.openOrderApp();
  validateIfCustomerAndMCFieldsAreEnabledAndCanBeEdited();
  validateIfAddedOrderCanBeEdited();
  validateIfAddedOrderCanBeDeleted();
  CommonSteps.closeOrderApp();
}

module.exports.runTestCaseOne = runTestCaseOne;