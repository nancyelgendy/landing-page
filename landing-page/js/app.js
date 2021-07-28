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
 let sections = document.querySelectorAll("section"); // all sections
 let nav = document.querySelector("#navbar__list"); // navigation bar
 let fragment = document.createDocumentFragment(); // like empty containar
 
 /**
   * End Global Variables
   
  */
 
 // build the nav
 
 //  looping over all sections
 
 sections.forEach((section) => {
     let text = section.getAttribute("data-nav");
     let nLink = document.createElement("a");
     let textNode = document.createTextNode(text);
 
     nLink.addEventListener("click", function() {
         section.scrollIntoView({
             behavior: "smooth",
         });
     });
 
     let nLi = document.createElement("li");
 
     // append all elements
     nLink.appendChild(textNode);
     nLi.appendChild(nLink).classList.add("menu__link");
     fragment.appendChild(nLi);
 });
 nav.appendChild(fragment);
 
 // ending the first part....
 
 // Add class 'active' to section when near top of viewport
 
 // make the active class using the intersection observer
 
 let option = {
     root: null, // make it no thing
     rootMargin: "200px",
     threshold: 1,
 };
 
 let observer = new IntersectionObserver(function(
         entries,
         observer
     ) // looping the function
 
     {
         entries.forEach((entry) => {
             if (entry.isIntersecting) {
                 entry.target.classList.add("your-active-class");
             } else {
                 entry.target.classList.remove("your-active-class");
             }
 
             // add active link to the active section
 
             let mylinks = document.querySelectorAll("a");
             mylinks.forEach((link) => {
                 let anav = entry.target.getAttribute("data-nav");
                 if (anav == link.textContent) {
                     link.classList.add("active_link");
                 } else {
                     link.classList.remove("active_link");
                 }
             });
         });
     },
     option);
 sections.forEach((section) => {
     observer.observe(section);
 });
 
 // create  button scroll to top
 
 let butt = document.querySelector("#button");
 butt.addEventListener("click", function() {
     scrollTo({
         top,
         behavior: "smooth",
     }); // let the button make the page back to top smoothy
 });
 
 //  appearing the icon after 500px to down
 
 document.onscroll = () => {
     if (window.scrollY > 500) {
         butt.style.display = "block";
     } else {
         butt.style.display = "none";
     }
 };
 
 document.body.appendChild(butt);