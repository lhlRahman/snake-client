const {UP, DOWN, LEFT, RIGHT} = require("./constants");

let connection;

const handleUserInput = function(data) {
  if (data === UP) {
    connection.write("Move: up");
  }
  if (data === DOWN) {
    connection.write("Move: down");
  }
  if (data === LEFT) {
    connection.write("Move: left");
  }
  if (data === RIGHT) {
    connection.write("Move: right");
  }
  if (data === "g") {
    connection.write("Say: Lets Go");
  }
  if (data === '\u0003') {
    process.exit();
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
};