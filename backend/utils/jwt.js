import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) =>{
    return jwt.sign({id: user._id, userName: user.fullName, profileImage: user.profile}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

export const generateRefreshToken = (user) =>{
    return jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}