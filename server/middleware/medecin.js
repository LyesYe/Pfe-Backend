const Medecin = require("../models/medecin"),
User = require("../models/user");

module.exports = {
    createMed: async (req, res) => {
        const { email, username, first_Name, last_Name, password , specialite } = req.body;
        try {
            const user = await Medecin.create({ email, username, first_Name, last_Name, password ,specialite });
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showMed : async (req, res) => {
        const id = req.params.id;
        try {
            const med = await Medecin.findById(id).select({_id : 0});
            res.json(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllMed: async (req, res) => {
        try {
            const med = await Medecin.find().select({_id : 0});
            res.json(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editMed : async (req, res) => {
        const { email, username, first_Name, last_Name, password ,specialite  } = req.body,
            id = req.params.id;
        try {
            const med = await Medecin.findById(id);
            med.email = email ? email : med.email;
            med.username = username ? username : med.username;
            med.first_Name = first_Name ? first_Name : med.first_Name;
            med.last_Name = last_Name ? last_Name : med.last_Name;
            med.password = password ? password : med.password;
            med.specialite = specialite ? specialite : med.specialite;
            await med.save();
            res.status(201).send(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteMed : async (req, res) => {
        try {
            const id = req.params.id,
                med = await Medecin.findById(id);
            await med.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}