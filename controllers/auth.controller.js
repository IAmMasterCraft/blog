const bcrypt = require("bcrypt");
const crypto = require('crypto');
const utils = require("../utils/utils");
const User = require("../models/User");
const PasswordReset = require("../models/PasswordReset");

exports.signup = async(request, response) => {
    try {
        const saltRounds = await bcrypt.genSalt();
        //get data
        const { fullname, email, password } = request.body;
        if (fullname && email && password) {
            bcrypt.hash(password, saltRounds, async(error, hashedPassword) => {
                if (error) {
                    console.log(error);
                    response.status(500).json(error);
                } else {
                    const newUser = new User({
                        fullname,
                        email,
                        password: hashedPassword,
                    });
                    const myUser = await newUser.save();
                    await utils.generateToken(response, myUser);
                    response.status(201).json({
                        success: true,
                        fullname,
                        email,
                        token: request.cookies.token,
                    });
                }
            });

        }
    } catch (error) {
        response.status(500).json(error);
    }


}

exports.login = async(request, response) => {
    try {
        const { email, password } = request.body;
        const myUser = await User.findOne({ email: email });
        if (!myUser) response.status(404).json({ error: "no user with that email" });
        else {
            bcrypt.compare(password, myUser.password, async(error, match) => {
                if (error) response.status(500).json(error);
                else if (match) {
                    myUser.password = null;
                    await utils.generateToken(response, myUser);
                    const responseData = {
                        dateGenerated: myUser.dateGenerated,
                        dateUpdated: myUser.dateUpdated,
                        _id: myUser._id,
                        fullname: myUser.fullname,
                        email: myUser.email,
                        token: request.cookies.token,
                    };
                    response.status(201).json(responseData);
                } else response.status(403).json({ error: "passwords do not match" });
            })
        }
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.forgotPassword = async(request, response) => {
    try {
        const email = request.body.email;
        const myUser = await User.findOne({ email: email });
        if (!myUser) response.status(404).json({ error: "no user with that email" });
        else {
            const cryptoKey = await crypto.randomBytes(20);
            const token = cryptoKey.toString("hex");
            const resetObject = {
                user_id: myUser._id,
                reset_token: token,
            };
            const myPasswordUpdate = await PasswordReset.findOneAndUpdate({ user_id: myUser._id }, resetObject, { upsert: true });
            if (myPasswordUpdate) {
                //send mail
            }
        }
    } catch (error) {
        response.status(500).json(error);
    }
}