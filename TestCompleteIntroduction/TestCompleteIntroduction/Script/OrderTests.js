var OrderAppSteps = require("OrderAppSteps");
var OrderSteps = require("OrderSteps");
var Data = require("Data");
var timeout = 500;

function test1(){
  Log.Event("Opening App.");
  OrderAppSteps.openOrderApp();
  
  Log.Event("Get Application status and store as Boolean (True = Running, False = Not Running.")
  var appStatusBooleanOpen = OrderAppSteps.checkAppActivityBoolean();
  OrderAppSteps.checkAppRunning(appStatusBooleanOpen);
  
  Log.Event("Opening Order Menu");
  OrderSteps.openOrderMenu();
  
  Log.Event("Fill Nacessary Details and click OK Button.");
  OrderSteps.fillCustomerCardNum(Data.cardN1);
  OrderSteps.fillCustomerName(Data.customerN1);
  OrderSteps.pickCardTypeMC();
  OrderSteps.clickOk();
  
  Log.Event("Opening Order Menu");
  OrderSteps.openOrderMenu();
  
  Log.Event("Fill Nacessary Details and click OK Button.");
  OrderSteps.fillCustomerCardNum(Data.cardN3);
  OrderSteps.fillCustomerName(Data.customerN3);
  OrderSteps.pickCardTypeAE();
  OrderSteps.clickOk();
  
  Log.Event("Close application and press on 'NO' prompt button.")
  OrderAppSteps.closeOrderApp();
  OrderAppSteps.closeProcessBtn();

  Log.Event("Get Application status and store as Boolean (True = Not running, False = Running.")
  let appStatusBooleanClose = OrderAppSteps.checkAppActivityBoolean2(timeout);
  OrderAppSteps.checkAppShouldNotRunning(appStatusBooleanClose);
}

module.exports.test1 = test1;