// server.js
// Require debug
const debug = require("debug")("app");

// Import createServer
const app = require("./app");

// Use const
const port = 3000;
const hostname = "127.0.0.1";

app
  .listen(port, hostname, () => {
    debug(`Server running at http://${hostname}:${port}/`);
  })
  .on("error", (err) => {
    debug(`Error starting server: ${err.message}`);
  });
