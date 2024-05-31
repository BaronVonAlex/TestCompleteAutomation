function openOrderApp(){
  Aliases.explorer.wndRelease.Release_.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink.ShellView.Items_View.Orders_exe.DblClick()
}

function closeOrderApp(){
  Aliases.Orders.Close();
}

function closeProcessBtn(){
  Aliases.Orders.dlgConfirmation.btnNo.Click();
}

function checkAppActivityBoolean() {
  return Aliases.Orders.Exists;
}

function checkAppActivityBoolean2(timeout) {
  return Aliases.Orders.WaitProperty("Exists", false, timeout);
}

function checkAppRunning(condition) {
  if (condition == true) {
    Log.Checkpoint("Success: Application is running");
  } else {
    Log.Error("Application is not running.");
  }
}

function checkAppShouldNotRunning(condition) {
  if (condition == true) {
    Log.Checkpoint("Success: Application is not running.");
  } else {
    Log.Error("Application is running.");
  }
}



module.exports.openOrderApp = openOrderApp;
module.exports.closeOrderApp = closeOrderApp;
module.exports.closeProcessBtn = closeProcessBtn;
module.exports.checkAppActivityBoolean = checkAppActivityBoolean;
module.exports.checkAppRunning = checkAppRunning;
module.exports.checkAppShouldNotRunning = checkAppShouldNotRunning;
module.exports.checkAppActivityBoolean2 = checkAppActivityBoolean2;