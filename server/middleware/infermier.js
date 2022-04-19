const Infirmier = require("../models/infirmier"),
User = require("../models/user");

module.exports = {
    createInf: async (req, res) => {
        const { email, username, first_Name, last_Name, password , grade } = req.body;
        try {
            const user = await Infirmier.create({ email, username, first_Name, last_Name, password ,grade });
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showInf : async (req, res) => {
        const id = req.params.id;
        try {
            const pat = await Infirmier.findById(id).select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllInf: async (req, res) => {
        try {
            const pat = await Infirmier.find().select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editInf : async (req, res) => {
        const { email, username, first_Name, last_Name, password ,maladie  } = req.body,
            id = req.params.id;
        try {
            const med = await Infirmier.findById(id);
            med.email = email ? email : med.email;
            med.username = username ? username : med.username;
            med.first_Name = first_Name ? first_Name : med.first_Name;
            med.last_Name = last_Name ? last_Name : med.last_Name;
            med.password = password ? password : med.password;
            med.grade = grade ? grade : med.grade;
            await med.save();
            res.status(201).send(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteInf : async (req, res) => {
        try {
            const id = req.params.id,
                med = await Patient.findById(id);
            await med.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}