const http = require("http");
var noble = require("noble");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = "Hello Node!\n";
  res.end(msg);
});

let index = 1;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);

  noble.on("discover", function (peripheral) {
    console.log(peripheral);
  });

  noble.startScanning();

  setInterval(() => {
    console.log(index);
    index++;
  }, 5000);
});
