function setHeaderTemplate() {
    var headerTemplate = `<div>
        <img src="assests/images/logo.png" id="logo" alt="logo" />
    </div>
    <div>
        <button id="login" type="button" class="btn btn-light btn-sm" data-bs-toggle="modal" 
        data-bs-target="#loginModal">
            LOGIN
        </button>
        <button id="logout" type="button" onclick="logout()" class="btn btn-light btn-sm" style="display: none;">
            LOGOUT
        </button>
    </div>`;

    document.getElementById("header").innerHTML = headerTemplate;
}

function viewMore() {
    if (document.getElementById("city-cards-more").style.display === "none") {
        document.getElementById("city-cards-more").style = "visibility: visible;";
        document.getElementById("view-more-button").innerHTML = "View Less";
    }
    else {
        document.getElementById("city-cards-more").style = "display: none;";
        document.getElementById("view-more-button").innerHTML = "View More";
    }
    console.log(document.getElementById("city-cards-more").style);
}

setHeaderTemplate();