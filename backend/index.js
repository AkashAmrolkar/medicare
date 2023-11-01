import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import router from './routes/routes.js';
//const formRoutes = require('./routes/routes')

dotenv.config()
const app = express();

const port = process.env.PORT
const corsOptions = {
    origin: true
}


app.get('/', (req,res)=>{
    res.send('API is working');
})

app.use('/api/form', router);

mongoose.set('strictQuery', false)
const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) 
        console.log('database is connected')
    } catch (error) {
        console.log(error)
    }
}
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.listen(port, ()=>{
    connectDB();
    console.log(`Server is working on ${port} port`)
})