const http = require("http");

const server = http.createServer(handleRequest)

function handleRequest(req, res) {
  if (req.url === "/") {
    res.write("Welcome.");
    res.end();
    return;
  }

  if (req.url === "/hello") {
    res.write("Hello.");
    res.end();
    return;
  }

  if (req.url === "/redirect") {
    res.writeHead(302, {
      "Location": "https://www.google.com"
    });
    res.end();
    return;
  }

  res.writeHead(404);
  res.end();
}

server.listen(5000);
