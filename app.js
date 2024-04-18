import  dotenv  from 'dotenv';
dotenv.config();
import  Express  from 'express';
const app=Express();
const port=process.env.PORT
//listen to port
app.listen(port,()=>{
   console.log(`port listent to :${port}`)
})
