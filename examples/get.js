const cleanRequest = require("clean-request");

cleanRequest({ url: "https://www.example.com" })
    .then(response => console.log("Response", response))
    .catch(error => console.error("Error", error));
