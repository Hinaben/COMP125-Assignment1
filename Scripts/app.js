/* Main JavaScript file */

/*
        Author:       Hina Patel (StuentID: 821021425)
        File Name:    app.js
        Description:  Java Script file for COMP 125- Assignment 1 web application. 
*/

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
 
  //define an array of HTML elements
  
  var paragraphElements = [];
  
  paragraphElements[0]= document.getElementById("statement");  
  paragraphElements[1]= document.getElementById("paragraphTwo");  
  paragraphElements[2]= document.getElementById("paragraphThree");    
  paragraphElements[3]= document.getElementById("work_address");
  paragraphElements[4]= document.getElementById("pro_1_title");  
  paragraphElements[5]= document.getElementById("pro_2_title");
  paragraphElements[6]= document.getElementById("pro_3_title");
  paragraphElements[7]= document.getElementById("bio_heading");
  paragraphElements[8]= document.getElementById("name");
  //define paragraphs array
  var paragraphs = [];
    
  paragraphs[0] = "<strong>To become a skilled and experienced software solution professional with extensive \
                    knowledge of all the areas of SDLC including requirements gathering, design, development \
                    and testing.<strong>";
  paragraphs[1] = "This is my project page and project details will be added later."
  paragraphs[2] = "My name is Hina Patel and my student number is 821021425."
  paragraphs[3] = "<strong> CIBC </strong> - 750 - Lawerence Avenue W., Toronto"
  paragraphs[4] = "Administrative Assistant"
  paragraphs[5] = "Workforce Analyst"
  paragraphs[6] = "Accounting Officer"
  paragraphs[7] = "Mission Statement"
  paragraphs[8] = "Hina Patel"
  
    //check to see if paragraph one exists
  for (var index = 0; index < paragraphElements.length; index++){
    if(paragraphElements[index]){
      paragraphElements[index].innerHTML = paragraphs[index];
    }
  }
  
})();