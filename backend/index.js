import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { login, registerUser } from './controller/authController.js';
import { deleteUser, getAllUsers, getSingleUser, updateUser } from './controller/userController.js';
import { deleteDoctor, getAllDoctors, getSingleDoctor, updateDoctor } from './controller/doctorController.js';

//import router from './routes/routes.js';
//const formRoutes = require('./routes/routes')

const app = express();
dotenv.config()

//user route
const authRouter = express.Router()
const userRouter = express.Router()
const docRouter = express.Router()

app.use(express.json())
app.use(cors()); 
app.use('/api/auths', authRouter)
app.use('/api/users', userRouter)
app.use('/api/doctors', docRouter)

// Auth Routes
//authRouter.get('/', getAllUsers);
authRouter.post('/register', registerUser);
authRouter.post('/login', login);

// Users Routes

userRouter.get('/:id', getSingleUser)
userRouter.get('/', getAllUsers)
userRouter.put('/:id', updateUser)
userRouter.get('/:id', deleteUser)

// Doctors Routes

docRouter.get('/:id', getSingleDoctor)
docRouter.get('/', getAllDoctors)
docRouter.put('/:id', updateDoctor)
docRouter.get('/:id', deleteDoctor)

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