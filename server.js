const http = require("http")
const PORT = 3000;

const ErrorHandler = require("./errorhandeller");
const ProductController = require('./productcontoroller')
const server = http.createServer((req, res) => {
  if (req.url == '/api/product' && req.method == "GET") {
    ProductController.getData(req, res)

  } else if (req.url.match(/\api\/product\/[0-9]+/) && req.method == "GET") {
    ProductController.getDataById(req, res)

  }
  else if (req.url == '/api/product' && req.method == "POST") {
    ProductController.create(req, res)
  }

  else {
    ErrorHandler.errorPager(req, res)
  }
})
server.listen(PORT)
console.log(`Server is Running ....http://127.0.0.1:${PORT}`);