const fs = require("fs");

fs.readFile("sample.txt", function (err, data) {
  console.error(data);
  return;
});
