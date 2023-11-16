// JavaScript code to create and insert a paragraph element
var paragraphText = "This is a dynamically created paragraph.Your paragraph text goes here. You can add more content as needed. Lorem ipsum dolor sit amet consectetur adipiscing elit.";
    



var paragraph = document.createElement("p"); // Create a new <p> element
paragraph.textContent = paragraphText; // Set the text content of the paragraph


// Append the paragraph to the container element
var container = document.getElementById("paragraph-container");
container.appendChild(paragraph);







// JavaScript code to create and insert a paragraph element
var pText = "This is a dynamically created paragraph.Your paragraph text goes here. You can add more content as needed. Lorem ipsum dolor sit amet consectetur adipiscing elit. Fly eagles fly";
    

var paragraph = document.createElement("p"); // Create a new <p> element
paragraph.textContent = pText; // Set the text content of the paragraph


// Append the paragraph to the container element
var container = document.getElementById("pText-container");
container.appendChild(paragraph);