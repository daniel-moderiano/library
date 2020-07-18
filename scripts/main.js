let myLibrary = []

function Book(title, author, pages, read) {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // Take user input and store new book objects into array
}

// Initialise all document variables here

const modal = document.querySelector(".modal");
const newBook = document.querySelector(".button--new");
const closeBtn = document.querySelector(".form__close");
const submitBtn = document.querySelector(".form__submit");
const titleInput = document.querySelector(".form__input--title");
const authorInput = document.querySelector(".form__input--author");
const pagesInput = document.querySelector(".form__input--pages");
const checkYes = document.querySelector(".form__input--checkYes");
const checkNo = document.querySelector(".form__input--checkNo");


const formInputs = document.querySelectorAll(".form__input");

// Listen for click on new book button, and activate function to display modal
openModal = () => modal.style.display = "block";
newBook.addEventListener("click", openModal);

// Listen for click on close button, and activate function to hide modal
closeModal = () => modal.style.display = "none";
closeBtn.addEventListener("click", closeModal)

// Listen for click on window, and if not the modal content, then close modal (i.e. close modal if clicking on screen outside modal)
function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("click", clickOutside);

// On click of submit button, gather all values from the input fields 

// submitBtn.addEventListener("click", gatherInputs);

function gatherInputs(inputList) {
    inputList.forEach(function(input) {
        console.log(input.checked);
    });
}

