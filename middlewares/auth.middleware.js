const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKEN_SECRET;

exports.verifyToken = (request, response, next) => {
    // const token = request.headers.authorization.split(" ")[1] || request.cookies.token;
    const token = request.cookies.token || "";
    if (!token) response.status(403).json({ error: "invalid token" });
    else {
        jwt.verify(token, tokenSecret, (error, value) => {
            if (error) response.status(500).json({ error });
            request.user = value.data;
            next();
        });
    }
}