const ProductModel = require('./productmodel')
const ConnecteToDB = require("./singleton")
const ErrorHandler = require('./errorhandeller')

async function getData(req, res) {
try {
    const product = await ProductModel.find()
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write(JSON.stringify(product))
    res.end()
} catch (error) {
    ErrorHandler
    console.log(error);
}
   } 
async function getDataById(req, res){
    const id = req.url.split("/")[3];
    const product = await ProductModel.FindByIdProduct(id);
    if (!product) {
        res.writeHead(400,{"Content-Type":"text/plain"})
        res.write("not Found Product id")
        res.end()
    } else {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.write(JSON.stringify(product))
        res.end()
    }
}
async function create(req,res){
    try {
        let bodyS = "";
        req.on('data', (chunk) => {
            bodyS += chunk.toString();
        });
        req.on('end' ,async ()=>{
        const product = {...JSON.parse(body), createdAt: new Date()}
   const result= await ProductModel.create(product)
    res.writeHead(201,{'Content-Type': 'text/plain'});
    res.write(JSON.stringify(result))
    res.end()
})
    } catch (error) {
        console.log(error);
    }
}

const ProductController = {
        getData,
        getDataById,
        create
    }
module.exports = ProductController;