﻿var PalindromeUtil = require("PalindromeUtil");
var CommonSteps = require("CommonSteps");
var Data = require("Data");
var CommonSteps = require("CommonSteps");


function numberConcatTest(){
  var concatResult = CommonSteps.SumOfDigitsConcatenation(Data.firstNum, Data.secondNum, Data.thirdNum)
  Log.Checkpoint("Concatenated Digits: " + concatResult);
}

function getCustomFormattedDate(){
  Log.Checkpoint("Date Today: " + CommonSteps.customDatePattern());
}

function todaysDateMultiplication(){
  Log.Checkpoint("Multiplied Digits of Today's Date: " + CommonSteps.multiplicationOfTodaysDate());
}

function checkIfParamIsPalindrome(){
  Log.Checkpoint("Palindrome Check: " + PalindromeUtil.isPalindrome("DeiFiEd"));
}

function runAllTests(){
  numberConcatTest();
  getCustomFormattedDate();
  todaysDateMultiplication();
  checkIfParamIsPalindrome();
}

module.exports.runAllTests = runAllTests;