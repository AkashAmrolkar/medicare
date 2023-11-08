import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { login, registerUser } from './controller/authController.js';
import { deleteUser, getAllUsers, getSingleUser, updateUser } from './controller/userController.js';
import { deleteDoctor, getAllDoctors, getSingleDoctor, updateDoctor } from './controller/doctorController.js';
import { authenticate, restrict } from './auth/VerifyToken.js';
import { createReviews, getAllReviews } from './controller/reviewController.js';
//import reviewRouter from './routes/review.js';
//import router from './routes/routes.js';
//const formRoutes = require('./routes/routes')

const app = express();
dotenv.config()

//user route
const authRouter = express.Router()
const userRouter = express.Router()
const docRouter = express.Router()
const reviewRouter = express.Router({mergeParams: true})

app.use(express.json())
app.use(cors()); 
app.use('/api/auths', authRouter)
app.use('/api/users', userRouter)
app.use('/api/doctors', docRouter)
app.use('/api/reviews', reviewRouter)

// Auth Routes
//authRouter.get('/', getAllUsers);
authRouter.post('/register', registerUser);
authRouter.post('/login', login);

// Users Routes

userRouter.get('/:id', authenticate, restrict(['patient']), getSingleUser)
userRouter.get('/', authenticate, restrict(['admin']), getAllUsers)
userRouter.put('/:id', authenticate, restrict(['patient']), updateUser)
userRouter.delete('/:id', authenticate, restrict(['patient']), deleteUser)

// Doctors Routes

docRouter.use('/:doctorId/reviews', reviewRouter)
docRouter.get('/:id', authenticate, restrict(['patient']), getSingleDoctor)
docRouter.get('/', authenticate, restrict(['admin']), getAllDoctors)
docRouter.put('/:id', authenticate, restrict(['patient']), updateDoctor)
docRouter.delete('/:id', authenticate, restrict(['patient']), deleteDoctor)


//Reviews Routes
reviewRouter.get('/', getAllReviews).post(authenticate, restrict(['patient']), createReviews)


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