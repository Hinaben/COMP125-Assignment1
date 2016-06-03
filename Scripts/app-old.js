/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
  
  
  // index page (Bio Details)
  var bio_heading_text = "Mission Statement";
  var name = "Hina Patel";
  var statement = "<strong>To become a skilled and experienced software solution professional with extensive \
                    knowledge of all the areas of SDLC including requirements gathering, design, development \
                    and testing.<strong>"; 
  
  
  document.getElementById("name").textContent = name;
  document.getElementById("bio_heading").textContent = bio_heading_text;
  document.getElementById("statement").innerHTML = statement;
  
  // Project page - Project Details
  /*
  var address = "<strong> CIBC </strong> - 750 - Lawerence Avenue W., Toronto";
  document.getElementById("work_address").innerHTML = address;
  */
  var project1_title = "Administrative Assistant";
  var work_apps = "Applications" ;
  document.getElementById("pro_1_title").textContent = project1_title;
  //document.getElementById("pro_1_title").textContent = project1_title;
  document.getElementById("work_apps").textContent = work_apps;
   
  
})();