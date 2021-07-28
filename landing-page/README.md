# Landing Page Project

## all the steps 
* start with adding  a new section inside the HTML file 

 ## first step create sections navigation link:  

 1- create all the global variables in side javascript file
  # variable select all  the sections 
  # variable for the navigation bar , get the name of navigation link from html file
  # an empty fragment 

2- build the navigation
  
  # first looping over all the sections using forEach
  # create new link 
  # make the text node to relate the link to the right section 
  # using event listener (scroll into view) and smoothy behavior to make it smoothy
  # create new list for section menu bar 
  # append the link to text node
  # append the new list to the link
  # add menu-link class to anchor tag 
  # append the fragment to the new list
  # append the navigation to the fragment but not inside the foreach to don't loop every time


  ## second step create the active class section

1- I choose to use the Intersection Observer API
2- create variable "option"  inside it root , root margin , threshold
3- make the root "null" To watch for intersection relative to the root element
4- make varibale observer back to entry and it self 
5- using for each to do thelooping while scroll and observing 
6- Each entry describes an intersection change for one observed
7- changing the design of "active class" in css file to make more clear
8- create if condation to add and remove the active class
9- so now  every time if the any section intersect with the viewport , the active class will be added
and when the section leave the viewport the active class will be removed
10- add active link to the active section with new stlye (active_link)


## third step create button to let the page scroll in to type

  1- create new div "button" in html
  2- make his style using css
  3- add event listner when this button clicked , scroll in to top 
  4- append this button
  5- let the button appear after 500 px from down


  ## last step make the page responsive for desktop , tablet , and phone browsers.
     by using  Media Queries and change   the style on small screens using css.

## end of the project


## resourses :
* https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

* https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

* https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

* https://www.w3schools.com/css/css_rwd_mediaqueries.asp

* https://www.w3schools.com/css/css3_mediaqueries.asp

* https://en.wikipedia.org/wiki/Responsive_web_design





# project rubric

## Architecture

The project should have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.                    (done)    


## Usability
 
All features are usable across modern desktop, tablet, and phone browsers.             (done)



## Styling

Styling has been added for active states.                                               (done)

## HTML Structure

There are at least 4 sections that have been added to the page.                         (done)


## Navigation

Navigation is built dynamically as an unordered list.                                   (done)  

## Section Active State

It should be clear which section is being viewed while scrolling through the page.       (done)

## Scroll to Anchor

When clicking an item from the navigation menu, the link should scroll to the appropriate section. 
                                                                                          (done)
## README

The ReadMe file should have non-default text in it that is specific to this project. It doesn’t have to be thorough, but should have some basic information, and use correct markdown.       (done)

## Comments

Comments are present and effectively explain longer code procedure when necessary.                                                                              (done)       
