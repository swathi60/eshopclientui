 


function login() {
    var Username = document.getElementById("name").value;
    var Password = document.getElementById("password").value;

    fetch("https://fair-pants-tuna.cyclic.app/userlogindetails")
        .then(details => details.json())
        .then(Users => {
            const user = Users.find(user => user.username === Username);

            if (user) {
                if (user.password === Password) {
                    alert("Login successful");
                    window.location.href = "productspage.html";
                } else {
                    alert("credentials mismatch");
                }
            } else {
                alert("Details not found. Please register to login.");
            }
        });
}


