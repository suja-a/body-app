// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Create an array of quotes
const quotes = [
  "My body is perfect the way it is.",
  "I am worthy of love and respect, regardless of my size",
  "I am beautiful, inside and out.",
  "I am strong and capable.",
  "I am unique and special, just the way I am.",
  "I am confident and self-assured.",
  "I am beautiful and unique.",
];

// Generate a random index for the quotes array
const randomIndex = Math.floor(Math.random() * quotes.length);

// Get the quote at the random index
const quote = quotes[randomIndex];

// Alert the quote
alert(quote);


/* ------------------------------ like and dislike buttons ------------------------------------ */
// JavaScript
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const likeCount = document.getElementById('like-count');
const dislikeCount = document.getElementById('dislike-count');

// Initialize the like and dislike counts
likeCount.textContent = 0;
dislikeCount.textContent = 0;

// Add event listeners to the like and dislike buttons
likeButton.addEventListener('click', () => {
  // Update the like count
  likeCount.textContent++;
});

dislikeButton.addEventListener('click', () => {
  // Update the dislike count
  dislikeCount.textContent++;
});
