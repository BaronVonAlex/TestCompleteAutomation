﻿var ApiUtils = require("ApiUtils");
class OrderPage{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderFormGroup =  this.orderForm.Group;
    this.customerName = this.orderForm.Group.Customer;
    this.masterCardRadioButton = this.orderForm.Group.MasterCard;
    this.newOrderConfirmButton = this.orderForm.ButtonOK;
    this.pricePerUnit = this.orderForm.Group.Price;
    this.cityInput = this.orderForm.Group.City;
    this.streetInput = this.orderForm.Group.Street;
    this.stateInput = this.orderForm.Group.State_;
    this.cardTypeAE = this.orderForm.Group.AE;
    this.cardNo = this.orderForm.Group.CardNo;
    this.totalInput = this.orderForm.Group.groupBox1.Total;
    this.quantityInput = this.orderForm.Group.Quantity;
  }
  
  clickOnCustomerNameToActivateInputField(){
    this.customerName.Click();
    return this;
  }
  
  checkIfCustomerInputFieldCanBeEditedAndEnabled(){  
    if (this.customerName != null && this.customerName.Enabled == true){
      if(this.customerName.ReadOnly == false){
        Log.Checkpoint(Project.Variables.CUSTOMER_Checkpoint_MSG);
        this.customerName.Keys(Project.Variables.CUSTOMER_TEXT_INPUT);
      } else {
        Log.Error(Project.Variables.Customer_ERR_1);
      }
    } else {
      Log.Error(Project.Variables.Customer_ERR_2);
    }
    return this;
  }
  
  checkIfMasterCardRadioButtonIsEnabledAndCanBeSelected(){
    if (this.masterCardRadioButton != null && this.masterCardRadioButton.Enabled == true){
      if(this.masterCardRadioButton.CanSelect == true){
        this.masterCardRadioButton.Click();
        Log.Checkpoint(Project.Variables.MasterCard_Checkpoint_MSG);
      } else {
        Log.error(Project.Variables.MC_ERR_1);
      }
    } else {
      Log.Error(Project.Variables.MC_ERR_2)
    }
    return this;
  }
  
  addOrderByPressingButton(){
    this.newOrderConfirmButton.Click();
    return this;
  }
  
  checkIfUnitPriceRemainsSame(){  
    if(this.pricePerUnit.Text == Project.Variables.Unit_Price_Expected_Value){
      Log.Checkpoint(Project.Variables.UNIT_RPICE_CHECKPOINT_MSG)
    } else {
      Log.Error(Project.Variables.UNIT_RPICE_ERROR_MSG, "Actual:" + this.pricePerUnit.Text, "Expected: " + Project.Variables.Unit_Price_Expected_Value)
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