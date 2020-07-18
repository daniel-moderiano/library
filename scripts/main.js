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

// Function to take render the library array as HTML items (individual books)

function render() {
    let parent = book;
    let children = book.childNodes;
    let newBook = book.cloneNode();
    children.forEach(function(child) {
        let childClone = child.cloneNode();
        newBook.appendChild(childClone);
    })
    bookshelf.appendChild(newBook);
}

// On click of submit button, call function to take user input and create new book object, then add this to library array

form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    closeModal();
    render();
})


