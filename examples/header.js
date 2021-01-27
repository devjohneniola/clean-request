const peto = require("peto");

peto({
  url: "https://www.example.com",
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip",
    "accept-language": "en-US,en;q=0.9,es-US;q=0.8,es;q=0.7",
  },
})
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.error("Error", error);
  });
