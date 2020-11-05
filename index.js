"use strict";
function myFunction(myDiv, megusta) {
    document.getElementById(myDiv).style.borderColor = "blue";
    document.getElementById("mensaje").innerHTML = myDiv;
    document.getElementById("like").innerHTML = megusta;
}
