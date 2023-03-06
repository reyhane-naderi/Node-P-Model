function errorPager(req, res) {
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.write(JSON.stringify({message: "this page not found...newwwwwwwwwww"}))
    res.end()
}
const ErrorHandler = {
    errorPager
}
module.exports= ErrorHandler