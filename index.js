const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expresss = express();
const http = require("http");
const port = process.env.port || 4545;
var server = http.createServer(expresss);
const socket = require("socket.io")(server);
expresss.use(express.json());

var signin = {};

socket.on('connection', (socket) => {
  console.log("fff");
  console.log(socket.id);

  socket.on("/signin", (sockets) => {
    signin[sockets] = { email: sockets, socket: socket };
    console.log("Stored signin data for socket ID", sockets, ":", signin[sockets]);
  });
  

  socket.on("/fuck", (msg) => {
    let checkrecipent = msg["to"];
    console.log(signin);
    console.log("Recipient ID:", checkrecipent);
    if(signin[checkrecipent]
      )
      {
        console.log("contains");
      }
      else{
        console.log("not contains");
      }
    // for (const check in signin) {
    //   console.log(check);
    //   if (signin[check] === checkrecipent) {
    //     signin[check].socket.emit("/messg", msg);
    //   } else {
    //     console.log("not found");
    //   }
    // }
  });
});

server.listen(port, () => {
  console.log(port);
});
