const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKEN_SECRET;

exports.generateToken = (response, user) => {
    const token = jwt.sign({ data: user }, tokenSecret, { expiresIn: "24h" });
    return response.cookie("token", token, {
        expires: new Date(Date.now() + /*86400*/ 604800000),
        secure: false,
        httpOnly: true,
    });
}