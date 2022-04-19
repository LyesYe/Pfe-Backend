const 
mongoose = require("mongoose"),
    jwt = require("jsonwebtoken"),
    options = { discriminatorKey: "kind" };
    bcrypt = require("bcrypt");
    userSchema = new mongoose.Schema({
        email: {
            required: true,
            type: String,
            unique: true,
            lowercase: true
        },
        username: {
            required: true,
            type: String,
        },
        first_Name: {
            required: true,
            type: String,
        },
        last_Name: {
            required: true,
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
    }, options);
    
    userSchema.pre("save", async function (next) {
        try {
            if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 13);
            next();
        } catch (e) {
            next(e);
        }
    });
    userSchema.methods.comparePasswords = async function (passwordSent, next) {
        try {
            return await bcrypt.compare(passwordSent, this.password);
        } catch (e) {
            next(e);
        }
    };
    userSchema.methods.insertToken = function () {
        let user = this.toObject();
        delete user.password;
        user.token = jwt.sign(
            {
                id: user._id,
                username: user.username,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "100h",
            }
        );
        return user;
    };
    module.exports = mongoose.model("user", userSchema);