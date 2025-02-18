﻿var OrderAppSteps = require("OrderAppSteps");
var ordersMenu = Aliases.Orders;
var form = ordersMenu.MainForm;

function openOrderMenu(){
  form.MainMenu.Click("Orders|New order...");
}

function fillCustomerName(customerName){
  Aliases.Orders.OrderForm.Group.Customer.Keys(customerName);
}

function fillCustomerCardNum(cardNum){
  Aliases.Orders.OrderForm.Group.CardNo.Keys(cardNum);
}

function pickCardTypeMC(){
  Aliases.Orders.OrderForm.Group.MasterCard.Click();
}

function pickCardTypeAE(){
  Aliases.Orders.OrderForm.Group.AE.Click();
}

function clickOk(){
  Aliases.Orders.OrderForm.ButtonOK.Click();
}

module.exports.openOrderMenu = openOrderMenu;
module.exports.fillCustomerName = fillCustomerName;
module.exports.fillCustomerCardNum = fillCustomerCardNum;
module.exports.pickCardTypeMC = pickCardTypeMC;
module.exports.pickCardTypeAE = pickCardTypeAE;
module.exports.clickOk = clickOk;