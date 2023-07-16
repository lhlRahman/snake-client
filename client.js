const net = require("net");
const  { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data" , ()=>{
    console.log("you ded cuz you idled");
  });

  conn.on("connect", () => {
    console.log("Successful Connection!");
    conn.write("Name: HAB");


  });

  conn.write("Move: up");

  return conn;
};

module.exports = {connect};