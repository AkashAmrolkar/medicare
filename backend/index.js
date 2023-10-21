import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://akashamrolkar10:Hq1gBsgg9dWT725m@cluster0.zd8t27o.mongodb.net/?retryWrites=true&w=majority').then(()=> app.listen(PORT)).then(()=> console.log('Connected with mongodb')).catch((e)=> console.log(e))
