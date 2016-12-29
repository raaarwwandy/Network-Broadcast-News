const  net = require(`net`);

let server = net.createServer((socket) => {

  socket.on('data', (chunk) => {
    console.log(`chunk: ${chunk}`);
  });



  process.stdin.on('data', (cmd) => {
    socket.write(cmd);
  });

});

  server.listen(6969, "0.0.0.0", () =>{
    console.log(`the current server is open`);
  });