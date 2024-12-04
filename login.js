document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // prevent from submission - default in html5, cant leave empty fields

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    //doesnt work!!!
    if (!username || !password) {
        document.getElementById("message").innerText = "Ispunite oba polja.";
        return; // stop the function if fields are empty
    }

    // Example credentials for demonstration
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        alert("Uspjesna prijava!"); // show success message
        window.close(); // close the login window
    } else {
        document.getElementById("message").innerText = "Neuspjesna prijava. Pokusajte ponovo.";
    }
};

function forgotPassword() {
    // redirect to forgotten password page
    alert("Preusmjeravamo Vas na stranicu za promjenu lozinke.");
    
};

//ne radi
function newUser() {
    // redirect to your "create account" page
    alert("Preusmjeravamo Vas na stranicu za registraciju novog korisnika.");
};