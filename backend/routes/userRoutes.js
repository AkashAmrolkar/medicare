import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controller/userController.js"
import express from 'express'
const userRouter = express.Router()

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getSingleUser);
userRouter.put('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter