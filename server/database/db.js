import mongoose from 'mongoose';


const Connection = async(username , password) =>{
    const URL  = `mongodb://${username}:${password}@ac-iavnxnj-shard-00-00.lp3b8uf.mongodb.net:27017,ac-iavnxnj-shard-00-01.lp3b8uf.mongodb.net:27017,ac-iavnxnj-shard-00-02.lp3b8uf.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-t90m3q-shard-0&authSource=admin&retryWrites=true&w=majority`;
   try{
     await mongoose.connect(URL , { useUnifiedTopology:true , useNewUrlParser:true });
     console.log('Database Connected Successfully');
   }catch(error){
      console.log('Error while connecting to the database' , error);
   }
} 

export default Connection; 