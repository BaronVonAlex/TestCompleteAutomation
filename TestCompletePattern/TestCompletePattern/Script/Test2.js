var CommonSteps = require("CommonSteps");
var OrderMainPage = require("OrderMainPage");
var OrderPage = require("OrderPage");

function createOrderWithAPIResponseData(){
  CommonSteps.openOrderApp();
  OrderMainPage.orderMainPage.createNewOrderByMainForm();
  OrderPage.orderPage.fillOrderDetailsWithAPIData();
//  CommonSteps.closeOrderApp(); For Demonstration Purposes I kept this commeneted.
}

function runTestCaseTwo(){
  createOrderWithAPIResponseData();
}
module.exports.runTestCaseTwo = runTestCaseTwo;