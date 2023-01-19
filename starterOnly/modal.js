function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Form
const form = document.getElementById('form')
const firstNameInput = document.querySelector('#first');
const lastNameInput = document.querySelector('#last');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');
const quantityInput = document.querySelector('#quantity');
const locationInputs = (document.querySelectorAll('.checkbox-input'));
const conditionsInput = document.querySelector('#checkbox1');
const newsletterInput = document.querySelector('#checkbox2');
const ErrorDisplayFirst = document.querySelector('.formErrorFirst')
const ErrorDisplayLast = document.querySelector('.formErrorLast')

// Regexp 
const nameRegExp = "/^[a-zéèôöîïûùü' -]{2,50}$/i";
const emailRegExp = "/^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close the modal form with the cross
function closeModal() {
  modalbg.style.display = "none";
}



// Fonction


/*Test de scan auto en fonction imbriquées.
const formScan = document.querySelectorAll('input')

formScan.forEach((input) => {
  input.addEventListener("focus", input => {
if(querySelectorAll.input.willValidate == true){
  console.log("ça va être valide")
} else {
  querySelector.input.classList.add("inputError");
}
    
  })
})
*/

function errorMessage(){
  alert('il y a une erreur');
  console.log('error message') ;
}

function verificator(){
  if (firstNameInput.value.length >= 2){
    console.log("first is good");
    ErrorDisplayFirst.style.display = "none";
  } else {
    console.log("erreur firstname");
    ErrorDisplayFirst.style.display = "block";
    first.classList.add("inputError");
  };
  if (lastNameInput.value.length >= 2){
    console.log("last is good");
    ErrorDisplayLast.style.display = "none";
  } else {
    console.log("error lastname");
    ErrorDisplayLast.style.display = "block";
  };
  if (emailInput.validity.typeMismatch != true){
    console.log("email is good");
  } else {
    console.log("email error")
  }
  if (birthDateInput.validity.typeMismatch != true){
  console.log("date is good");
  } else {
    console.log("date error")
  }
  if (quantityInput.value.length >= 1){
  console.log("quantity is good");
  } else {
    console.log("quantity error")
  }
  //if (locationInputs.checked != false){
    if (location1.checked | location2.checked | location3.checked | location4.checked |location5.checked){
    console.log("location is good");
  } else {
    console.log("location error")
  }
  if (conditionsInput.checked != false){
    console.log("checked is good");
  } else {
    console.log("check error");
  }
}



function validate() {
  verificator ();
  console.log("Merci pour votre inscription");
}

// Afficher erreur

// Validateur

/*
function verificator(){
  if (first => 2.length.first){
    let validationCount = i++;
  } else {
    let validationCount = i--;
  };

  if (last => 2){
    let validationCount = i++;
  } else {
    let validationCount = i--;
  };

  if (email => 4){
    let validationCount = i++;
  } else {
    let validationCount = i--;
  };

  if (birthdate == 10){
    let validationCount = i++;
  } else {
    let validationCount = i--;
  };

  if (radio = checked.input.radio){
    let validationCount = i++;
  } else {
    let validationCount = i--;
  };

  if (document.getElementsByClassName("checkbox1") = checked){
    let validationCount = i++;
  } else {
    let validationCount = i--;
  };
}
console.log(validationCount);

if (ValidationCount = 6){
  let validation = true;
} else {
  let validation = false;
  console.log("Il y a une erreur de comptage")
}

console.log("Tous les passagers sont embarqués !");


*/




