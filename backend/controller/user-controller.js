import Users from "../model/UserSchema.js";

export const getAllUsers = async (req, res, next) => {
    let user;
    try {
        user = await Users.find()
    } catch (error) {
        console.log(error)
    }
    if (!user) {
        return res.status(404).json({ message: "No user found" })
    }
    return res.status(200).json({ user })
}

export const registerUser = async (req, res, next) => {
    const { firstname, lastname, email, role, gender, profileimg } = req.body;
    let user;
    try {
        user = await Users.findOne({ email })
    } catch (error) {
        console.log(error)
    }
    if (user) {
        res.status(404).json({ message: "User already registered" });
        console.log('User already registered');
    }
    const newUser = new Users({
        firstname,
        lastname,
        email,
        role,
        gender,
        profileimg
    })
    try {

        newUser.save();
        console.log("user added successfully");
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({ Users })
}
