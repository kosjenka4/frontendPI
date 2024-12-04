
function openLoginPopup() {
    const width = 500; 
    const height = 500; 

    // Calculate the position to center the popup
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2) - 50;
    
    // Open the popup in the center of the screen
    window.open("login.html", "Login", `width=${width},height=${height},top=${top},left=${left}`);
}

document.getElementById("loginBtn").onclick = function() {
    openLoginPopup(); // Call the function to open the login popup
};