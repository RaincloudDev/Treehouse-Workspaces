// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.getElementById('about');
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.



const aychToo = document.getElementsByTagName('h2');
for(i=0; i<aychToo.length; i++){
aychToo[i].style.color='tomato';
}


// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice

cards = document.querySelectorAll('.card');
for(i=0; i<cards.length; i++){
cards[i].style.backgroundColor='papayawhip';
}


// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
ul = document.querySelector('ul');
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
container = document.querySelector('.pt-4');
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.

 const titlelinks= document.querySelectorAll('a[title]');
 for(const link of titlelinks){
 link.style.color='purple';
 }
