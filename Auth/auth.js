const User = require("../user");

exports.register = async (req, res, next) => {
    const { username, password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters" })
    }

    try {

    } catch (e) {
        res.status(401).json({
            msg: " User not successfully added",
            error: error.message,
        })
    }
}