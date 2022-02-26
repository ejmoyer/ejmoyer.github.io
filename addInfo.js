let infoBox = document.getElementById("infoBox");

function projOneInfo() {
    // Clear infobox if previously added
    if (infoBox.innerHTML != "") {
    infoBox.innerHTML = "";
    } else {
    // if infobox is empty

    let heading = document.createElement("h1");
    heading.appendChild(document.createTextNode("Todo Web Application"));
    infoBox.appendChild(heading)

    let projDesc = document.createElement("p");
    let projInfo = document.createTextNode(
        `This was a small, simple introductory project to get used to Python's Flask Web Framework.`
        )
    projDesc.appendChild(projInfo);
    infoBox.appendChild(projDesc)

    // create the link for the project
    let link = document.createElement("a");
    link.appendChild(document.createTextNode("Project Link"));
    link.setAttribute("href", "https://github.com/ejmoyer/flask-todo");
    infoBox.appendChild(link);
    }
  }
  
function projTwoInfo() {
	// Clear infobox if previously added
    if (infoBox.innerHTML != "") {
        infoBox.innerHTML = "";
        } else {
        // if infobox is empty
    
        let heading = document.createElement("h1");
        heading.appendChild(document.createTextNode("School Portal Web Applicatoin"));
        infoBox.appendChild(heading)
    
        let projDesc = document.createElement("p");
        let projInfo = document.createTextNode(
            `This project was made with Python's Flask Web Framework with a MySQL database. It involved working with a
            small 4 person team to partially remake our school's portal. Main features include 
            users, assignments, grading, courses, and course sessions.`
            )
        projDesc.appendChild(projInfo);
        infoBox.appendChild(projDesc)
    
        // create the link for the project
        let link = document.createElement("a");
        link.appendChild(document.createTextNode("Project Link"));
        link.setAttribute("href", "https://github.com/ScottJohnson02/tsct-portal");
        infoBox.appendChild(link);
        }
}

function projThreeInfo() {
	// Clear infobox if previously added
    if (infoBox.innerHTML != "") {
        infoBox.innerHTML = "";
        } else {
        // if infobox is empty
    
        let heading = document.createElement("h1");
        heading.appendChild(document.createTextNode("Retirement Home Web Application"));
        infoBox.appendChild(heading)
    
        let projDesc = document.createElement("p");
        let projInfo = document.createTextNode(
            `A two man project that was made in PHP with a MySQL database. It is a fully functional web application that would be
            for a theoretical retirement home. It's features include mutliple types of users, doctor's appointments,
            employee rosters, patient payments, and more.`
            )
        projDesc.appendChild(projInfo);
        infoBox.appendChild(projDesc)
    
        // create the link for the project
        let link = document.createElement("a");
        link.appendChild(document.createTextNode("Project Link"));
        link.setAttribute("href", "https://github.com/ejmoyer/retirement-home-CSET2020");
        infoBox.appendChild(link);
        }
}

function projFourInfo() {
	// Clear infobox if previously added
    if (infoBox.innerHTML != "") {
        infoBox.innerHTML = "";
        } else {
        // if infobox is empty
    
        let heading = document.createElement("h1");
        heading.appendChild(document.createTextNode("Social Media Web Application"));
        infoBox.appendChild(heading)
    
        let projDesc = document.createElement("p");
        let projInfo = document.createTextNode(
            `This project is created in PHP with MySQL database support. A three
            person project that was based off of Facebook. Features include users, posts,
            friend requests, liking posts, and even videos.`
            )
        projDesc.appendChild(projInfo);
        infoBox.appendChild(projDesc)
    
        // create the link for the project
        let link = document.createElement("a");
        link.appendChild(document.createTextNode("Project Link"));
        link.setAttribute("href", "https://github.com/BillSpyro/MediaCenter");
        infoBox.appendChild(link);
        }
}
