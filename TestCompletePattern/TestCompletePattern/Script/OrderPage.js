﻿var ApiUtils = require("ApiUtils");
var data = require("Data")

class OrderPage{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderFormGroup =  this.orderForm.Group;
    this.customerName = this.orderFormGroup.Customer;
    this.masterCardRadioButton = this.orderFormGroup.MasterCard;
    this.newOrderConfirmButton = this.orderForm.ButtonOK;
    this.pricePerUnit = this.orderFormGroup.Price;
    this.cityInput = this.orderFormGroup.City;
    this.streetInput = this.orderFormGroup.Street;
    this.stateInput = this.orderFormGroup.State_;
    this.cardTypeAE = this.orderFormGroup.AE;
    this.cardNo = this.orderFormGroup.CardNo;
    this.totalInput = this.orderFormGroup.groupBox1.Total;
    this.quantityInput = this.orderFormGroup.Quantity;
  }
  
  clickOnCustomerNameToActivateInputField(){
    this.customerName.Click();
    return this;
  }
  
  checkIfCustomerInputFieldCanBeEditedAndEnabled(){  
    if (this.customerName != null && this.customerName.Enabled == true){
      if(this.customerName.ReadOnly == false){
        Log.Checkpoint(data.CUSTOMER_Checkpoint_MSG);
        this.customerName.Keys(Project.Variables.CUSTOMER_TEXT_INPUT);
      } else {
        Log.Error(data.CUSTOMER_ERR_MSG_1);
      }
    } else {
      Log.Error(data.Variables.CUSTOMER_ERR_MSG_2);
    }
    return this;
  }
  
  checkIfMasterCardRadioButtonIsEnabledAndCanBeSelected(){
    if (this.masterCardRadioButton != null && this.masterCardRadioButton.Enabled == true){
      if(this.masterCardRadioButton.CanSelect == true){
        this.masterCardRadioButton.Click();
        Log.Checkpoint(data.MasterCard_Checkpoint_MSG);
      } else {
        Log.error(data.MasterCard_ERR_MSG_1);
      }
    } else {
      Log.Error(data.MasterCard_ERR_MSG_2)
    }
    return this;
  }
  
  addOrderByPressingButton(){
    this.newOrderConfirmButton.Click();
    return this;
  }
  
  checkIfUnitPriceRemainsSame(){  
    if(this.pricePerUnit.Text == Project.Variables.Unit_Price_Expected_Value){
      Log.Checkpoint(data.UNIT_PRICE_CHECKPOINT_MSG)
    } else {
      Log.Error(data.UNIT_PRICE_ERR_MSG, "Actual:" + this.pricePerUnit.Text, "Expected: " + Project.Variables.Unit_Price_Expected_Value)
    }
    return this;
  }

  fillOrderDetailsWithAPIData(){
    ApiUtils
    .getAgifyData()
    .getGeolocationData();
    
    this.totalInput.Keys(Project.Variables.agify_age);
    this.customerName.Keys(Project.Variables.agify_name);
    this.quantityInput.Keys(Project.Variables.agify_count);
    
    this.pricePerUnit.Keys(Project.Variables.postal);
    this.cityInput.Keys(Project.Variables.city);
    this.streetInput.Keys(Project.Variables.region);
    this.stateInput.Keys(Project.Variables.country);
    this.cardTypeAE.Click();
    this.cardNo.Keys(Project.Variables.loc);
    this.totalInput.Keys(Project.Variables.agify_count);
    
    this.newOrderConfirmButton.Click();
  }
}

var orderPage = new OrderPage();
module.exports.orderPage = orderPage;