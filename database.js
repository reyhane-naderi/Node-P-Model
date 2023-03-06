const {MongoClient} = require("mongodb");
const URl = "mongodb://localhost:27017";
const DB_Name = "myDataBase";
const client = new MongoClient(URl)

async function main(){
    await client.connect();
    console.log("conected ......");
    const db = client.db(DB_Name)
    const myCollection = db.collection("user")
    const result = await myCollection.insertOne({
        
        name:"Logitech G-Series Gaming Mouse",
        price:49.99
    })
    myCollection.find({}).toArray([]).then(result=>{
        console.log("result=====>" ,result); 
    })
    myCollection.countDocuments({}).then((countDocuments) => {
        console.log(countDocuments);
    })
        myCollection.insertOne({}).then((res)=>{console.log(res)})
}
main()