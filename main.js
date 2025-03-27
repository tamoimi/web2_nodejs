var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;

  if (pathname === "/") {
    fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
      var template = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WEB1 - ${title}</title>
  </head>
  <body>
    <h1><a href="/">${title}</a></h1>
    <h1>${description}</h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
  </body>
</html>
  `;
      response.writeHead(200);
      response.end(template);
    });
  } else {
    response.writeHead(400);
    response.end("Not found");
  }
});

app.listen(3000);
