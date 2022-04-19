const mongoose = require("mongoose");
const User = require("../models/user");
options = { discriminatorKey: "kind" };

patient = User.discriminator('patient',


new mongoose.Schema({
    maladie: {
        required: true,
        type: String,
    },
    listMedecin:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "medecin",
        },
    ],
    },options)
);

module.exports = patient;