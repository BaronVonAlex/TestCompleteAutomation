﻿function getGeolocationData(){
  var aqHttpRequest = aqHttp.CreateGetRequest(Project.Variables.GEOLOCATION_API)
  var aqHttpResponse = aqHttpRequest.Send();
  
  if (aqHttpResponse != null){
    var responseText = aqHttpResponse.Text;
    var jsonResponse = JSON.parse(responseText);
    
    Project.Variables.ip = jsonResponse.ip;
    Project.Variables.city = jsonResponse.city;
    Project.Variables.region = jsonResponse.region;
    Project.Variables.country = jsonResponse.country;
    Project.Variables.loc = jsonResponse.loc;
    Project.Variables.org = jsonResponse.org;
    Project.Variables.postal = jsonResponse.postal;
    Project.Variables.timezone = jsonResponse.timezone;
  } else {
    Log.Error("Problem has occured while sending API GET Request.")
  }
  return this;
}

function getAgifyData(){
  var aqHttpRequest = aqHttp.CreateGetRequest(Project.Variables.AGIFY_API)
  var aqHttpResponse = aqHttpRequest.Send();
  
  if (aqHttpResponse != null){
    var responseText = aqHttpResponse.Text;
    var jsonResponse = JSON.parse(responseText);
    
    Project.Variables.agify_count = jsonResponse.count;
    Project.Variables.agify_name = jsonResponse.name;
    Project.Variables.agify_age = jsonResponse.age;
  } else {
    Log.Error("Problem has occured while sending API GET Request.")
  }
  return this;
}

module.exports.getGeolocationData = getGeolocationData;
module.exports.getAgifyData = getAgifyData;