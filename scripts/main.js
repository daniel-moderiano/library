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

// Listen for click on new book button, and activate function to display modal
function openModal() {
    modal.style.display = "block";
}

newBook.addEventListener("click", openModal);

// Listen for click on close button, and activate function to hide modal
function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal)

// Listen for click on window, and if not the modal content, then close modal (i.e. close modal if clicking on screen outside modal)
function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("click", clickOutside);



//Function To Display Popup
// function div_show() {
// document.getElementById('abc').style.display = "block";
// }
//Function to Hide Popup
// function div_hide(){
// document.getElementById('abc').style.display = "none";
// }