import app from "./app";
import config from "./app/config";
import mongoose from 'mongoose';

async function main() {
    try{
        await mongoose.connect(process.env.DATABASE_URL as string);
    app.listen(config.port || 5000,()=>{
        console.log(`app listening on port ${config.port || 5000}`);
    });
    }catch(err){
        console.log(err);
    }
  }
  main();

