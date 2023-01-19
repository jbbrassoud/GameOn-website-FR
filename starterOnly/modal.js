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
const ErrorDisplayFirst = document.querySelector('.formErrorFirst');
const ErrorDisplayLast = document.querySelector('.formErrorLast');
const ErrorDisplayEmail = document.querySelector('.formErrorEmail');
const ErrorDisplayBirthdate = document.querySelector('.formErrorBirthdate');
const ErrorDisplayQuantity = document.querySelector('.formErrorQuantity');
const ErrorDisplayLocation = document.querySelector('.formErrorLocation');
const ErrorDisplayConditions = document.querySelector('.formErrorConditions');

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
  }
  if (lastNameInput.value.length >= 2){
    console.log("last is good");
    ErrorDisplayLast.style.display = "none";
  } else {
    console.log("error lastname");
    ErrorDisplayLast.style.display = "block";
  }
  //email - logique inversée car on cherche une erreur avec le Mismatch
  if (emailInput.validity.typeMismatch != false){
    console.log("email error");
    ErrorDisplayEmail.style.display = "block";
    email.classList.add("inputError");
  } else {
    console.log("email is good");
  }

  //chercher à trouver nouvelle date ?
  if (birthDateInput.validity.typeMismatch != true){
    console.log("date is good");
  } else {
    console.log("date error");
    ErrorDisplayBirthdate.style.display = "block";
    birthdate.classList.add("inputError");
  }
  if (quantityInput.value.length >= 1){
    console.log("quantity is good");
  } else {
    console.log("quantity error");
    ErrorDisplayQuantity.style.display = "block";
    quantity.classList.add("inputError");
  }
  //if (locationInputs.checked){
  if (location1.checked | location2.checked | location3.checked | location4.checked | location5.checked | location6.checked){
    console.log("location is good");
  } else {
    console.log("location error");
    ErrorDisplayLocation.style.display = "block";
    location1.classList.add("inputError");
  }
  if (conditionsInput.checked != false){
    console.log("checked is good");
  } else {
    console.log("check error");
    ErrorDisplayConditions.style.display = "block";
    checkbox1.classList.add("inputError");
  }
}



function validate() {
  verificator ();
  console.log("Merci pour votre inscription");
}

// Afficher erreur

// Validateur




