// Import the functions necessary to make the API calls
import { fetchData, postData } from './utils.js';

// Select the necessary DOM elements
const loadButton = document.querySelector('#loadBooks');
const addForm = document.querySelector('form');

// Define the API endpoint
const endpoint = 'http://localhost:3000/books';

// Define a function to handle loading and displaying the list of books
async function loadHandler() {
  try {
    const books = await fetchData(endpoint);
    // TODO: display the books in the list (see README)
    console.log(books);
  } catch (error) {
    // TODO: display a nicer error message (see README)
    console.error(error.message);
  }
}

// Define a function to handle form submission for adding a new book
async function submitHandler(e) {
  e.preventDefault(); // never reload the page
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data['year'] = Number(data.year); // convert year to number

  try {
    await postData(endpoint, data);

    // Call loadHandler to refresh the list
    loadHandler();
  } catch (error) {
    // TODO: Display a better error for the user
    console.error('Error submitting form:', error);
  }
}

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);
// TODO: Add delete functionality
