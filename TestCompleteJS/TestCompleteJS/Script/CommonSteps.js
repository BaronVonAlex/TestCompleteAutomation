﻿var Data = require("Data");

function openOrderApp() {
    TestedApps.Orders.Run();
    return this;
}

function closeOrderApp() {
    TestedApps.Orders.Terminate();
    return this;
}

function SumOfDigitsConcatenation(num1, num2, num3) {
  if (checkIfNumberIs3Digit(num1) && checkIfNumberIs3Digit(num2) && checkIfNumberIs3Digit(num3)) {
    var firstNumToStr = aqConvert.VarToStr(num1);
    var secondNumToStr = aqConvert.VarToStr(num2);
    var thirdNumToStr = aqConvert.VarToStr(num3);    

    var sumOfDigitsNum1 = 1;
    var sumOfDigitsNum2 = 1;
    var sumOfDigitsNum3 = 1;

    for (var i = 0; i < firstNumToStr.length; i++) {
      sumOfDigitsNum1 *= parseInt(firstNumToStr[i]);
    }

    for (var i = 0; i < secondNumToStr.length; i++) {
      sumOfDigitsNum2 *= parseInt(secondNumToStr[i]);
    }

    for (var i = 0; i < thirdNumToStr.length; i++) {
      sumOfDigitsNum3 *= parseInt(thirdNumToStr[i]);
    }
    
    var concatSum = aqConvert.VarToStr(sumOfDigitsNum1) +
                             aqConvert.VarToStr(sumOfDigitsNum2) +
                             aqConvert.VarToStr(sumOfDigitsNum3);
    
    return concatSum;
  } else {
    Log.Error("Input numbers should be 3 digit.");
  }
}

function checkIfNumberIs3Digit(num) {
  return num >= 100 && num <= 999;
}

function customDatePattern(){
  var dateOfToday = aqDateTime.Today();
  var day = aqDateTime.GetDay(dateOfToday);
  var month = aqDateTime.GetMonth(dateOfToday);
  var year = aqDateTime.GetYear(dateOfToday);
  
  var formattedMonth = Data.longMonths[month - 1];
  
  var daySuffix;
  if (day > 3 && day < 21) {
    daySuffix = 'th';
  } else {
    switch (day % 10) {
      case 1:  daySuffix = 'st'; break;
      case 2:  daySuffix = 'nd'; break;
      case 3:  daySuffix = 'rd'; break;
      default: daySuffix = 'th'; break;
    }
  }
  
  var formattedDate = formattedMonth + " the " + day + daySuffix + ", ";
  
  var yearInWords = Data.yearWords[year];
  
  formattedDate += yearInWords;

  return formattedDate;
}

function multiplicationOfTodaysDate(){
  var dateOfToday = aqDateTime.Today();
  var day = aqDateTime.GetDay(dateOfToday);
  var dayString = aqConvert.VarToStr(day);
  
  var multipliedNum = 1;
  
  for (var i = 0; i < dayString.length; i++){
    var digit = parseInt(dayString[i]);
    if (digit !== 0){
      multipliedNum *= digit;
    } 
  }
  return multipliedNum;
}

module.exports.openOrderApp = openOrderApp;
module.exports.closeOrderApp = closeOrderApp;
module.exports.SumOfDigitsConcatenation = SumOfDigitsConcatenation;
module.exports.checkIfNumberIs3Digit = checkIfNumberIs3Digit;
module.exports.customDatePattern = customDatePattern;
module.exports.multiplicationOfTodaysDate = multiplicationOfTodaysDate;