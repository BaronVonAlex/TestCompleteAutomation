function isPalindrome(string) {
    var lowerCaseString = string.toLowerCase();
  
    let reverseString = lowerCaseString.split("").reverse().join("");
 
    if (reverseString == lowerCaseString) {
        return true
    }
    return false
}

module.exports.isPalindrome = isPalindrome;