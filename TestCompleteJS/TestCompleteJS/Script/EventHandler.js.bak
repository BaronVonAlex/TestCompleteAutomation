function EventControl1_OnStartTest(Sender, param)
{
  Log.Message("STARTED TEST.");
}

function EventControl1_OnStopTest(Sender, param)
{
  Log.Message("STOPPED TEST.");
}

function EventControl1_OnOverlappingWindow(Sender, Window, OverlappingWindow, param)
{
  Log.Message("Window " + Window.Name + " is overlapping with window " + OverlappingWindow.Name);
}

function EventControl1_OnLogError(Sender, LogParams)
{
  Log.Message("ERROR HAS OCCURED. Test will continue.")
}

function EventControl1_OnUnexpectedWindow(Sender, Window, LogParams)
{
  Log.Warning("Unexpected window detected: " + Window.Name);
}