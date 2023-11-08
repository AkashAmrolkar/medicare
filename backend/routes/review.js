import express  from "express";
import { createReviews, getAllReviews } from "../controller/reviewController.js";
import { authenticate, restrict } from "../auth/VerifyToken.js";
const reviewRouter = express.Router({mergeParams: true})
reviewRouter.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReviews)

export default reviewRouter