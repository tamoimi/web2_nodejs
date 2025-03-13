var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;
  console.log(queryData.id);
  if (_url == "/") {
    title = "Welcome";
  }
  if (_url === "/favicon.ico") {
    return response.writeHead(204);
  }
  response.writeHead(200);
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
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
  </body>
</html>

  `;
  response.end(template);
});

app.listen(3000);
