var data = require("Data")

class OrderMainPage{
  constructor(){
    this.mainForm = Aliases.Orders.MainForm;
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderView = Aliases.Orders.MainForm.OrdersView;
    this.orderToolBar = Aliases.Orders.MainForm.ToolBar;
    this.deletionPrompt = Aliases.Orders.dlgConfirmation;
    this.confirmDeletion = Aliases.Orders.dlgConfirmation.btnYes;
    this.cancelEditForm = Aliases.Orders.OrderForm.ButtonCancel;
  }
  
  createNewOrderByMainForm(){
    this.mainForm.MainMenu.Click(Project.Variables.NEW_ORDER_Text);
    return this;
  }
  
  clickOnOrderByCustomerName(CustomerName){
    this.orderView.ClickItem(CustomerName)
    return this;
  }
  
    editOrderByTooltip(){
    this.orderToolBar.ClickItem(5);
    return this;
  }
  
  deleteOrderByToolTip(){
    this.orderToolBar.ClickItem(6, false, skNoShift);
    return this;
  }
  
  rightClickCreatedOrderByCustomerName(name){
    this.orderView.ClickItemR(name);
    return this;
  }
  
  checkIfAddedOrderHasEditOptions() {   
    if(this.orderForm.Exists == true){
      Log.Checkpoint(data.EDIT_ORDER_ERROR_MSG)
      this.cancelEditForm.Click();
    }else{
      Log.Error(data.EDIT_ERROR_ERROR_MSG)
    }
    return this;
  }
  
  checkIfAddedOrderHasDeleteOptions() {   
    if(this.deletionPrompt.Exists == true){
      Log.Checkpoint(data.DELETE_ORDER_CHECKPOINT_MSG)
      this.confirmDeletion.Click();
    }else{
      Log.Error(data.DELETE_ORDER_ERROR_MSG)
    }
    return this;
  }
}

var orderMainPage = new OrderMainPage();
module.exports.orderMainPage = orderMainPage;