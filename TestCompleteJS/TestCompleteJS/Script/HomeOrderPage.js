var data = require("Data")

class HomeOrderPage{
  constructor(){
    this.mainForm = Aliases.Orders.MainForm;
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderView = Aliases.Orders.MainForm.OrdersView;
    this.orderToolBar = Aliases.Orders.MainForm.ToolBar;
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
  
  clickOnOrderByProductName(ProductName){
    this.orderView.DblClickItem(ProductName)
    return this;
  }
  
}

var homeOrderPage = new HomeOrderPage();
module.exports.homeOrderPage = homeOrderPage;