import  dotenv  from 'dotenv';
dotenv.config();
import  Express  from 'express';
import connectDb from './config/dbconnection.js';
import cors from 'cors';
const app=Express();
//enabled cross policy
app.use(cors())
//end cross plociy 
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL;
//connect db
connectDb(DATABASE_URL);
//for api response record in json format
app.use(Express.json())
//listen to port
app.listen(port,()=>{
   console.log(`port listent to  :${port}`)
})
