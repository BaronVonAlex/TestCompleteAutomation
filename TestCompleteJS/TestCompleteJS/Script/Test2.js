﻿var CommonSteps = require("CommonSteps");
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

function runAllOrderTests(){
  openOrderApplicationAndMoveToNewOrderWindow();
  reopenAddedOrderRetrieveStreetTextAndFillOtherFields();
}

module.exports.runAllOrderTests = runAllOrderTests;