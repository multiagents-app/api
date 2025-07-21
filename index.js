const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

http.createServer((req, res) => {
  if (req.url === '/') {
      const filePath = path.join(__dirname, 'index.html');
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Erro interno no servidor');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
  } else if (req.url === '/resources/openapi.json') {
      const filePath = path.join(__dirname, '/resources/openapi.json');
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Erro interno no servidor');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/json' });
          res.end(content);
        }
      });
  }

}).listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
