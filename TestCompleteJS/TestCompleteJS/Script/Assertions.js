function assertValues(actual, expected)
{
  if(actual === expected)
      Log.Message("Assertion: Success!")
  else
      Log.Error("assertValues: Failure!")
}
module.exports.assertValues = assertValues;