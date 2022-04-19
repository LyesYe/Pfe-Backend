const mongoose = require("mongoose");
const User = require("../models/user");
options = { discriminatorKey: "kind" };

infirmier = User.discriminator('infirmier',


new mongoose.Schema({
    Grade: {
        required: true,
        type: String,
    },
    listMedecin:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "infirmier",
        },
    ],
    },options)
);

module.exports = infirmier;