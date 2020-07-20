let myLibrary = []

function Book(title, author, pages, read) {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let bookEntry;
    if(checkYes.checked) {
        bookEntry = new Book(titleInput.value, authorInput.value, pagesInput.value, true);
    } else {    
        bookEntry = new Book(titleInput.value, authorInput.value, pagesInput.value, false);
    }
    myLibrary.push(bookEntry);
    return(bookEntry);
}  

// Initialise all document variables here

const modal = document.querySelector(".modal");
const addNewBook = document.querySelector(".button--new");
const closeBtn = document.querySelector(".form__close");
const submitBtn = document.querySelector(".form__submit");
const titleInput = document.querySelector(".form__input--title");
const authorInput = document.querySelector(".form__input--author");
const pagesInput = document.querySelector(".form__input--pages");
const checkYes = document.querySelector(".form__radio--read");
const checkNo = document.querySelector(".form__radio--notRead");
const formInputFields = document.querySelectorAll(".form__input");
const formInputRadios = document.querySelectorAll(".form__radio");
const form = document.querySelector(".form");
const book = document.querySelector(".book");
const bookshelf = document. querySelector('.library-container');
let updatedBookList = document.getElementsByClassName('book__title');




// Listen for click on new book button, and activate function to display modal
openModal = () => modal.style.display = "block";
addNewBook.addEventListener("click", openModal);

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

// Function to render the library array as HTML items (individual books) 

function renderBook(book) {
    let bookDiv = document.createElement("div");
    let bookId = myLibrary.findIndex(element => element.title === book.title);
    bookDiv.classList.add("book");
    bookDiv.dataset.id = bookId;
    for(let property in book) {
        let bookDetails = document.createElement("div");
        if(property === "read" && book[property] === true) {
            bookDetails.textContent = "Yes";
        } else if(property === "read" && book[property] === false) {
            bookDetails.textContent = "No"
        } else {
            bookDetails.textContent = book[property];
        }
        bookDetails.classList.add("book__property");
        bookDetails.classList.add(`book__${property}`);
        bookDiv.appendChild(bookDetails);
    }
    bookshelf.appendChild(bookDiv);
}



// Initialise page load with render function applied to any books in library. Add example book for display testing.

let lotr = new Book("The Lord of the Rings", "J.R.R. Tolkien", 423, true);
myLibrary.push(lotr);

function renderLibrary() {
    let bookTitleList = (Array.from(updatedBookList)).map(book => book.textContent);
    for(let i = 0; i < myLibrary.length; i++) {
        if(bookTitleList.includes(myLibrary[i].title)) {
            // pass
        } else {
            renderBook(myLibrary[i]);
        }
    }
}

// Function to check for stored libraries and load if present, else load default library

window.addEventListener("load", checkStored);

function checkStored() {
    if(!localStorage.getItem("myLibrary")) {
        renderLibrary();
    } else {
        myLibrary = JSON.parse((localStorage.getItem("myLibrary")));
        renderLibrary();
    }
}

// On click of submit button, call function to take user input and create new book object, then add this to library array, then render as HTML. Add to storage as well.

form.addEventListener("submit", function(e) {
    e.preventDefault();
    closeModal();
    addBookToLibrary();
    renderLibrary();
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
})


