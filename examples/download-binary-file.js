const cleanRequest = require("clean-request");

cleanRequest({ url: "https://www.example.com/image.jpeg", downloadPath: "image.jpeg" })
    .then(response => console.log("Response", response))
    .catch(error => console.error("Error", error));
