
const {MongoClient} = require("mongodb")

module.exports=class ConnecteToDB{
    #db = null;
    #DB_Url ="mongodb://localhost:27017/myDataBase";
    async #connect(){
        try {
            let client = new MongoClient(this.#DB_Url)
            let db = client.db();

            return db;
        
        } catch (error) {
            console.log(error.message);
            
        }
    }
    async Get(){
        try {
            if (this.#db) {
                console.log("db colection is alraedy");
                return this.#db
            }
            this.#db=await this.#connect();
            return this.#db;
        } catch (error) {
            console.log(error.message);
        }

    }
}
// async function main(){
//     const db = await new ConnecteToDB().Get()
//     const finduser= await db.collection("user").find({}).toArray({});
//     console.log(finduser);
// }
// main()
