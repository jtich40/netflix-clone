const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


// register new user
router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password, 
                process.env.SECRET_KEY
                ).toString()
        })

        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

// login user
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        // throw error if user not found
        !user && res.status(401).json("Wrong password or username!");
        // decrypt password and compare to user input
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        // throw error if password doesn't match
        originalPassword !== req.body.password &&
          res.status(401).json("Wrong password or username!");

          const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY, 
            { expiresIn: "5d" }
            )
        // pull password from user object to prevent it from being sent to client
        const { password, ...info } = user._doc
        // send user object and access token to client
        res.status(200).json({ ...info, accessToken })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router