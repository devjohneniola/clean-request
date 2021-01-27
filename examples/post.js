const peto = require("peto");

peto({
  url: "https://www.example.com/login",
  method: "POST",
  body: { username: "john", password: "jj****Jj20" },
})
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.error("Error", error);
  });
