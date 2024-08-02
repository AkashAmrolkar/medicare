import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authenticateToken  = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        console.log('authentication', token)
        if(!token || !token.startsWith('Bearer')){
            return res.status(401).json({success: false, message: 'No token, authorization denied'})
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } catch (error) {
        console.log(error)
        if(error.name === "TokenExpiredError"){
            res.status(401).json({message: 'Token is expired'})
        }

        return res.status(401).json({success: false, message: 'Invalid Token'})
    }
}
