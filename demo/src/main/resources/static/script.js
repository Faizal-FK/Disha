function addUser() {

    // Username input se value lena
    let username = document.getElementById("username").value;

    // Password input se value lena
    let password = document.getElementById("password").value;

    // JS object banana
    let userData = {
        username: username,
        password: password
    };

    // Backend ko POST request
    fetch("http://localhost:8080/api/users/add", {
        method: "POST", // HTTP method
        headers: {
            "Content-Type": "application/json" // JSON bhej rahe hai
        },
        body: JSON.stringify(userData) // Object → JSON
    })
    .then(response => response.json()) // response ko JSON banana
    .then(data => {
        alert("User saved successfully!");
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
