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




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const isInViewport = (elem) =>  {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Build menu 

const createNav = () => {

    for(let i = 0; i < sections.length; i ++){
        const listItem =  document.createElement('li');
        const link = document.createElement('a');
              link.classList.add('menu__link');
              link.setAttribute('href', `#section${i+1}`);
              link.setAttribute('id', `to-section-${i+1}`);
              link.textContent = `section ${i+1}`;
        listItem.appendChild(link);
        ul.appendChild(listItem);
    };
  
}

createNav();

// Add class 'active' to section when near top of viewport

const addActiveClass = (isInViewport) => {

document.addEventListener('scroll',  () => {

        for(let i = 0; i < sections.length; i ++){

            const section = sections[i];
    
           isInViewport(section) ? section.classList.add('active-section') :  section.classList.remove('active-section');
            
        }
    });
}

addActiveClass(isInViewport);

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click


const scrollByClick = (id) => {
const links = document.querySelectorAll('a[href^="#"]');
const sectionId = id;

links.forEach(link => {
    link.addEventListener('click', () => {
        const targetSection = document.querySelector(`#${sectionId}`);
        let top = targetSection.getBoundingClientRect().top + window.pageYOffset
        let left = targetSection.getBoundingClientRect().left + window.pageXOffset

        window.scrollTo({
            top,
            left,
            behavior: 'smooth',
          });
    })
});
}


const findTarget = sections.forEach(section => {
    const id = section.getAttribute('id');
    scrollByClick(id);
})


// Set sections as active
/**
 * End Main Functions
 * Begin Events
 * 
*/









