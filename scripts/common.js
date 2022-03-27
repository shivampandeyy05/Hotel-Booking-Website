function setHeaderTemplate() {
    var headerTemplate = `<a href="index.html">
        <img src="assests/images/logo.png" id="logo" alt="logo" />
        </a>
        <button id="login" type="button" class="btn btn-light btn-sm" data-bs-toggle="modal"
            data-bs-target="#loginModal">
            LOGIN
        </button>
        <button id="logout" type="button" onclick="logout()" class="btn btn-light btn-sm" style="display: none;">
            LOGOUT
        </button>`;

    document.getElementById("header").innerHTML = headerTemplate;
}

function setFooterTemplate() {
    var footerTemplate = `<div id="contact-us">
    <button id="contact-us" type="button" class="btn btn-info btn-sm" data-bs-toggle="modal"
        data-bs-target="#contactModal">
        Contact Us
    </button>
    </div>
    <div id="copyright">
        &copy; 2022 SHIVAM PANDEY PVT. LTD.
    </div>
    <div id="social-media">
        <a href="https://www.facebook.com/" target="_blank">
            <img src="assests/images/facebook.png" class="social-logo">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <img src="assests/images/instagram.png" class="social-logo">
        </a>
        <a href="https://www.twitter.com/" target="_blank">
            <img src="assests/images/twitter.png" class="social-logo">
        </a>
    </div>`;

    document.getElementById("footer").innerHTML = footerTemplate;
}

function setLoginModal() {
    var loginModal = `<div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Please Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="login-modal">
                        <label class="login-fields" for="username">Username:</label>
                        <input class="input-fields" id="user-name" type="text" name="username" placeholder="Enter Username"
                            autocomplete="off" required />
                    </div>
                    <div class="login-modal">
                        <label class="login-fields" for="password">Password:</label>
                        <input class="input-fields" id="pass-word" type="password" name="password"
                            placeholder="Enter Password" required />
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="submit" id="login-button" onclick="login()" value="Login" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
            </form>
        </div>
    </div>`;

    document.getElementById("loginModal").innerHTML = loginModal;
}

function login() {
    var username = document.getElementById('user-name').value;
    var password = document.getElementById("pass-word").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.getElementById("login").style = "display: none;";
    document.getElementById("logout").style = "visibility: visible;";
    alert("Successfully loggedin");
    payNowEnable();
}

function payNowEnable() {
    document.getElementById("pay-button").innerHTML = '<button href=# class="btn btn-success" onclick="payNow()">Pay Now</button>';
}

function payNowDisable() {
    document.getElementById("pay-button").innerHTML = '<button href=# class="btn btn-success" disabled>Pay Now</button>';
}

function logout() {
    localStorage.clear();
    document.getElementById("logout").style = "display: none;";
    document.getElementById("login").style = "visibility: visible;";
    payNowDisable();
}

function setContactModal() {
    var contactModal = `<div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="contactModalLabel">Get in touch</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="index.html">
                <div class="modal-body">
                    <div>
                        <div>Thank you for reaching out!!!</div>
                        <div>Please enter your email and we will get back to you.</div>
                    </div>
                    <p></p>
                    <div>
                        <label for="email">Email: </label>
                        <input type="email" placeholder="Enter your email id" name="email" required />
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </div>
            </form>
        </div>
    </div>`;

    document.getElementById("contactModal").innerHTML = contactModal;
}

setHeaderTemplate();
setFooterTemplate();
setLoginModal();
setContactModal();