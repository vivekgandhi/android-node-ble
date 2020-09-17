const http = require("http");
const port = process.env.PORT || 3000;
const noble = require("@abandonware/noble");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = "Hello Node!\n";
  res.end(msg);
});

let index = 1;
server.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}/`);

  // noble.on("discover", function (peripheral) {
  //   console.log(peripheral);
  // });

  console.log(noble);
  noble.on("stateChange", async (state) => {
    console.log(state);
    if (state === "poweredOn") {
      await noble.startScanningAsync(["180f"], false);
    }
  });

  setInterval(() => {
    console.log(index);
    index++;
  }, 5000);
});
