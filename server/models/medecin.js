const mongoose = require("mongoose");
const User = require("../models/user");
options = { discriminatorKey: "kind" };

medecin = User.discriminator('medecin',


new mongoose.Schema({
    specialite: {
        required: true,
        type: String,
    },
    listInfirmier:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "Infirmier",
        },
    ],
    },options)
);

module.exports = medecin;