let infoBox = document.getElementById("infoBox");

function projOneInfo() {
    // Clear infobox if previously added
    infoBox.innerHTML = "";

    let link = document.createElement("a");
    link.appendChild(document.createTextNode("first content"));
    link.setAttribute("href", "https://github.com/ejmoyer/flask-todo");

    infoBox.appendChild(link);
  }
  
function projTwoInfo() {
	// Clear infobox if previously added
    infoBox.innerHTML = "";
    
}

function projThreeInfo() {
	// Clear infobox if previously added
    infoBox.innerHTML = "";

}

function projFourInfo() {
	// Clear infobox if previously added
    infoBox.innerHTML = "";
}
