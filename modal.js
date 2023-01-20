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
const locationInputs = document.querySelectorAll('.checkbox-input');
const conditionsInput = document.querySelector('#checkbox1');
const newsletterInput = document.querySelector('#checkbox2');
const errorDisplayFirst = document.querySelector('.formErrorFirst');
const errorDisplayLast = document.querySelector('.formErrorLast');
const errorDisplayEmail = document.querySelector('.formErrorEmail');
const errorDisplayBirthdate = document.querySelector('.formErrorBirthdate');
const errorDisplayQuantity = document.querySelector('.formErrorQuantity');
const errorDisplayLocation = document.querySelector('.formErrorLocation');
const errorDisplayConditions = document.querySelector('.formErrorConditions');
const thanksCall = document.querySelector('.thanks');
// Récupération de tous les éléments de formulaire
const inputs = document.querySelectorAll("input");


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

//Verificateur

function verificator(){
  let ilYaUneErreur = false;

  if (firstNameInput.value.length >= 2){
    console.log("first is good");
    errorDisplayFirst.style.display = "none";
  } else {
    ilYaUneErreur = true;
    errorDisplayFirst.style.display = "block";
    first.classList.add("inputError");
  }
  if (lastNameInput.value.length >= 2){
    console.log("last is good");
    errorDisplayLast.style.display = "none";
  } else {
    ilYaUneErreur = true;
    errorVerificator();
    errorDisplayLast.style.display = "block";
  }
  //email - logique inversée car on cherche une erreur avec le Mismatch
  if (emailInput.validity.typeMismatch != false){
    ilYaUneErreur = true;
    errorDisplayEmail.style.display = "block";
    email.classList.add("inputError");
  } else {
    console.log("email is good");
  }

  if (!birthDateInput.validity.valueMissing){
    console.log("date is good");
  } else {
    ilYaUneErreur = true;
    errorDisplayBirthdate.style.display = "block";
    birthdate.classList.add("inputError");
  }
  if (quantityInput.value.length >= 1){
    console.log("quantity is good");
  } else {
    ilYaUneErreur = true;
    errorDisplayQuantity.style.display = "block";
    quantity.classList.add("inputError");
  }
  //if (locationInputs.checked){
  if (location1.checked | location2.checked | location3.checked | location4.checked | location5.checked | location6.checked){
    console.log("location is good");
  } else {
    ilYaUneErreur = true;
    errorDisplayLocation.style.display = "block";
    location1.classList.add("inputError");
  }
  if (conditionsInput.checked != false){
    console.log("checked is good");
  } else {
    ilYaUneErreur = true;
    errorDisplayConditions.style.display = "block";
    checkbox1.classList.add("inputError");
  }

  return ilYaUneErreur
}

// Validateur

function validate() {

  if(verificator()){
    console.log("Erreur validator")
  } else {
    console.log("Merci pour votre inscription");
    document.getElementsByName('reserve')[0].style.display = "none";
    thanksCall.style.display = "flex";
    document.getElementsByName('reserve')[0].reset();
  }
}


