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

const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// Build menu

const createNav = () => {
  for (let i = 0; i < sections.length; i++) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('menu__link', 'active-link');
    link.setAttribute('href', `#section${i + 1}`);
    link.setAttribute('id', `to-section-${i + 1}`);
    link.textContent = `section ${i + 1}`;
    listItem.appendChild(link);
    ul.appendChild(listItem);
  }
};

createNav();

// Add class 'active' to section when near top of viewport

const addActiveClass = isInViewport => {
  document.addEventListener('scroll', () => {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];

      isInViewport(section)
        ? section.classList.add('active-section')
        : section.classList.remove('active-section');
    }
  });
};

addActiveClass(isInViewport);


// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

const scrollByClick = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', () => {
      const targetSection = document.getElementById(links[i].getAttribute("href").substring(1));
      let top = targetSection.getBoundingClientRect().top + window.pageYOffset;
      let left = targetSection.getBoundingClientRect().left + window.pageXOffset;

      window.scrollTo({
        top,
        left,
        behavior: 'smooth'
      });

    });
  });
};


//Set sections as active



const onScroll = () => {
    
    const removeActiveClass = function (elements) {
        for (var i = 0; i < elements.length; ++i) {
            elements[i].classList.remove('active-link');
        }
    }
  
    const links = document.querySelectorAll('a[href^="#"]');

     //Get current scroll position
     let currentPosition = window.pageYOffset

    for (let i = 0; i < links.length; i++) {

      console.log('links', links)

      let currentLink = links[i];
      
      // Get the current section by the id from the links's href.
      const currentTargetElement = document.getElementById(links[i].getAttribute("href").substring(1));
      const currentTargetElementTop = currentTargetElement.getBoundingClientRect().top + window.pageYOffset;
      const currentTargetElementHeight = currentTargetElement.offsetHeight;

    return  (currentTargetElementTop <= currentPosition && currentTargetElementTop + currentTargetElementHeight > currentPosition) 
                    
                           ?  (removeActiveClass(links),
                              currentLink.classList.add('active-link'))
                           
                           :   currentLink.classList.remove('active-link')
    }  

}

window.onscroll = onScroll;


/**
 * End Main Functions
 * Begin Events
 *
 */
