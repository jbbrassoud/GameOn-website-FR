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

// Form

const form = document.getElementById('form')
const firstNameInput = document.querySelector('#first');
const lastNameInput = document.querySelector('#last');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');
const quantityInput = document.querySelector('#quantity');
const locationInputs = Array.from(document.querySelectorAll('.location-input'));
const conditionsInput = document.querySelector('#checkbox1');
const newsletterInput = document.querySelector('#checkbox2');

// Regexp 
const nameRegExp = /^[a-zéèôöîïûùü' -]{2,50}$/i;
const emailRegExp = /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i;

// Listeners
firstNameInput.addEventListener(() => {
  checkInput(firstNameInput, nameRegExp);
});


// Fonction

// Afficher erreur

// Validateur

/*
function verificator(){
  if (first => 2){
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


function validate() {
  if (validation = true) {
    console.log("Merci pour votre inscription");
  } else {
    console.log("Il y a une erreur");
  }
}
*/



