// Dependencies

const http = require("http");
const handler = require("./helper/handleReqRes");

// app object module scaffolding

let app = {};

app.config = {
  port: 3000,
};

app.createServer = () => {
  const server = http.createServer(handler.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Server running on port ${app.config.port}`);
  });
};

app.createServer();
