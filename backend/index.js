const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const server = createServer(app);
const io = new Server(server);

app.use(cors());

io.on("connection", (socket) => {
  console.log("User connected");

  // Example: Emit a 'message' event to the client
  socket.emit("message", "Hello from server!");
  socket.on("sendmessage", (message) => {
    console.log(message);
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

server.listen(5000, () => {
  console.log("Listening at port 5000");
});
