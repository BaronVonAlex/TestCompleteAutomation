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
      Log.Checkpoint(Project.Variables.EDIT_CHECKPOINT_MSG)
      this.cancelEditForm.Click();
    }else{
      Log.Error(Project.Variables.EDIT_ERROR_MSG)
    }
    return this;
  }
  
  checkIfAddedOrderHasDeleteOptions() {   
    if(this.deletionPrompt.Exists == true){
      Log.Checkpoint(Project.Variables.DELETE_CHECKPOINT_MSG)
      this.confirmDeletion.Click();
    }else{
      Log.Error(Project.Variables.DELETE_ERROR_MSG)
    }
    return this;
  }
}

var orderMainPage = new OrderMainPage();
module.exports.orderMainPage = orderMainPage;