/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const ul = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');



console.log(sections);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const createNav = () => {

    for(let i = 0; i < sections.length; i ++){
        const listItem =  document.createElement('li');
        const link = document.createElement('a');
              link.setAttribute('href', `#section${i+1}`);
              link.textContent = `section ${i+1}`;
        listItem.appendChild(link);
        ul.appendChild(listItem);
    }
  
};

createNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active