import clientPromise from "../../lib/mongodb";

class DataService{

    constructor(){
            
    }

    async onInit(){
        const client = await clientPromise
        this.db = client.db("stream-sync")
    }

    async getSomeEntity(){
    
     }

    async getHighlightedFollowups(){
        
        var cursor = this.db.collection("followups").find();
        console.log(cursor);

        return cursor.toArray();
    }

    async getUser(){
        var cursor = this.db.collection("followups").find();
        console.log(cursor);
        await cursor.toArray();
        return {
            userName:'Jhon Doe',
            followups: ['62a5f3713864d24f93a702de', '62a7af337fb3ed8ab605320b']
        }
    }
}
 
 
export default DataService;