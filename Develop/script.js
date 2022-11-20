// Assignment Code
const generateBtn = document.querySelector("#generate");
//var password = generatePassword();
var passwordText = document.querySelector("#password");


// Write password to the #password input
//const generatePassword = ("base", "lenght") {
  //let password = "";
  //for (let x = 0; x < lenght; x++) {
    //let random = Math.floor(Math.random() * base.lenght);
    //password += base.charAt(random);
  //}
  //return password;
  
  //passwordText.value = password;


const generate () {
  let lenght =parseInt(inputLenght.value)
  let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = ".?!#$%&/()¨*[]_-.,}{<>"; 

// Add event listener to generate button
  window.addEventListener('DOMContentLoaded', () {
    generateBtn.addEventListener("click",()) {

    }
  let generate = "";
  for (let x = 0; x < lenght; x++) {
    let random = Math.floor(Math.random() * base.lenght);
    password += base.charAt(random);

  if(checkbox1.checked) base+=numbers;
  if (checkbox2.checked) base+=symbols;
  return password;
 
    }
  }
};