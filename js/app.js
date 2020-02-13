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

const createNav = () => {

    for(let i = 0; i < sections.length; i ++){
        const listItem =  document.createElement('li');
        const link = document.createElement('a');
              link.classList.add('menu__link');
              link.setAttribute('href', `#section${i+1}`);
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

const findTarget = () =>{
    sections.forEach(section => {
        const id = section.id
        scrollByClick(id);
    })
}



const scrollByClick = (id) => {

const links = document.querySelectorAll("a[href^='#section']");
const sectionId = id;

links.forEach(link => {
    link.addEventListener('click', event => {
     
        scrollTo(document.querySelector(`${sectionId}`))
        // console.log('target', target)
        // const targets = document.querySelectorAll(`${sectionId}`);
        // targets.forEach(target => {
        //     target.scrollIntoView({behavior: "smooth"})
        //  })
       
    })
})

}

function scrollTo(element) {
      window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

scrollTo();

//scrollByClick(id);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



// Set sections as active