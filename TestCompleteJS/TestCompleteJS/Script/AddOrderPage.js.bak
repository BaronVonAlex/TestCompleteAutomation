var data = require("Data")

class AddOrderPage{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderFormGroup =  this.orderForm.Group;
    this.customerName = this.orderFormGroup.Customer;
    this.masterCardRadioButton = this.orderFormGroup.MasterCard;
    this.newOrderConfirmButton = this.orderForm.ButtonOK;
    this.pricePerUnit = this.orderFormGroup.Price;
    this.cityInput = this.orderFormGroup.City;
    this.streetInput = this.orderFormGroup.Street;
    this.stateInput = this.orderFormGroup.State;
    this.cardTypeAE = this.orderFormGroup.AE;
    this.cardNo = this.orderFormGroup.CardNo;
    this.totalInput = this.orderFormGroup.groupBox1.Total;
    this.quantityInput = this.orderFormGroup.Quantity;
    this.zipInput = this.orderFormGroup.Zip;
  }
    
  fillCityDetails(string){
    this.cityInput.Keys(string);
    return this;
  }
  
  fillStreetDetails(string){
    this.streetInput.Keys(string);
    return this;
  }
  
  fillZipCodeField(string){
    this.zipInput.Keys(string);
    return this;
  }
  
  fillStateField(string){
    this.stateInput.Keys(string);
    return this;
  }
  
  retrieveTextDataFromStreetInputFieldAndInputInOtherFields(){
    var streetTextValue = this.stateInput.WndCaption;
     
    var stringObj = aqConvert.VarToStr(streetTextValue);
    
    var splitStringObj = stringObj.split(',');
        
    this.fillCityDetails(aqString.Trim(splitStringObj[0]));
    this.fillStreetDetails(aqString.Trim(splitStringObj[1]));
    this.fillZipCodeField(aqString.Trim(splitStringObj[2]));
    
    return this;
  }
  
  addOrderByPressingButton(){
    this.newOrderConfirmButton.Click();
    return this;
  }
}

var addOrderPage = new AddOrderPage();
module.exports.addOrderPage = addOrderPage;