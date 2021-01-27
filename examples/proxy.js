const peto = require("peto");

peto({ url: "https://www.example.com", proxy: "197.112.99.5:8080" })
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.error("Error", error);
  });
