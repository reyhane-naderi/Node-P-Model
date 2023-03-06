const ConnecteToDB = require("./singleton")
const { resolve } = require("path");
const { ObjectId } = require("mongodb");
const productCollection = "product";


async function find() {
    const db = await new ConnecteToDB().Get();
    return new Promise(async(resolve, reject) => {
        const products = await db.collection(productCollection).find({},{
            sort:{
                _id:-1
            }
        }).toArray();
        resolve(products)
    })
}
async function FindByIdProduct(id) {
    return new Promise((resolve, reject) => {
        resolve(product.find(product => product.id == id))
    })
}
async function create(productCollection) {
   const db = await new ConnecteToDB().Get()
  return new Promise(async(resolve, reject) => {
    const result= await db.collection('productCollection').insertOne(productCollection)
    resolve(result)
    
   })
        
    }

        // product.push(product);
        // fs.writeFile(`${process.cwd()}/data/product.json`, JSON.stringify(product), (error) => {
        //     if (error) reject(error)
        //     else resolve({message: "hiiiiiii product",data:product})
        // })

async function update(id, payload){
 const db = await new ConnecteToDB().Get()
 return new Promise(async(resolve, reject)=>{
    const result = await db.collection(productCollection).find({_id:new ObjectId(id)})
    resolve(payload)
 })
}


const ProductModel = {
    find,
    FindByIdProduct,
    create
}
module.exports = ProductModel;