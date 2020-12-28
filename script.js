
const isChecked = (variableName, firstArr, secondArr) => {
  if (variableName.checked === true) {
    for (let i=0; i<firstArr.length; i++) {
      secondArr.push(firstArr[i]);
    }
  } else {
    secondArr.push('a');
  }
  return console.log(secondArr)
}

var generateBtn = document.querySelector("#generate");
var characterAmountinput = document.querySelector("#characterAmount");
const specialCharacter = document.querySelector("#specialCharacter");

const finalArray = [];


var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ,'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const symbols= ['!','@','#','&','%','^','&','*','+','?']
var numbers = [1,2,3,4,5,6,7,8,9]
var upperCase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]

// Write password to the #password input
// function writePassword(1, characters) {
//   for (i=0; i<=numOfCharacters.value; i++){
//     password = password + lowerCase.charAt(math.floor(math.random()))
//   }
//}
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;



// var numOfCharacters = characterAmountinput.value
// specialCharacters= specialCharacterinput.value

