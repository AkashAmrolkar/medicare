import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { getAllUsers, registerUser } from './controller/user-controller.js';
//import router from './routes/routes.js';
//const formRoutes = require('./routes/routes')

const app = express();
dotenv.config()

//user route
const router = express.Router()

app.use(express.json())
app.use(cors());
app.use('/api/users', router)

// Users Routes
router.get('/', getAllUsers);
router.post('/register', registerUser);

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(8000, ()=>{
        console.log('Server is working on 8000 port')
    })
}).then(()=>{
    console.log('server is connected to database')
}).catch((e)=>{
    console.log(e)
})