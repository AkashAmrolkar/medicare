import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth-route.js';
import userRouter from './routes/userRoutes.js';
const app = express();
dotenv.config()
app.use(cors({
    "origin": "*"
}))
app.use(express.json())

// Routes
app.use('/api/auths', authRouter)
app.use('/api/users', userRouter)

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(8000, () => {
        console.log('Server is working on 8000 port')
    })
}).then(() => {
    console.log('server is connected to database')
}).catch((e) => {
    console.log(e)
})