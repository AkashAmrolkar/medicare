import express from 'express';
// import cors from 'cors'
// import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

const formRoutes = require('./routes/routes')

dotenv.config()
const app = express();

const port = process.env.PORT
const corsOptions = {
    origin: true
}

app.use('/api/form', formRoutes);

app.get('/', (req,res)=>{
    res.send('API is working');
})
n
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
// app.use(express.json())
// app.use(cookieParser())
// app.use(cors(corsOptions))

app.listen(port, ()=>{
    connectDB();
    console.log(`Server is working on ${port} port`)
})