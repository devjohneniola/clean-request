const peto = require("peto");

peto({
  url: "https://www.example.com",
  headers: {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
  },
})
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.error("Error", error);
  });
