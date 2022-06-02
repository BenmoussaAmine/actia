const Tab = require('../models/array.model');

module.exports = {
    create: async (req, res) => {
        try {
            const {name, values} = req.body;
            const tab = new Tab({name, values})
            await Tab.create(tab);
            return res.status(200).json({message: "type array créé"});
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    },
    findAll: async (req, res) => {
        try {
            const arrays = await Tab.find();
            return res.status(200).json(arrays)
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
    findById: async (req, res) => {
        try {
            const {id} = req.params;
            const array = await Tab.findById(id);
            return res.status(200).json(array)
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
    update: async (req, res) => {
        try {
            const newArray = req.body;
            const {id} = req.params;
            await Tab.findByIdAndUpdate(id, newArray).then(data => {
                console.log("data ", data);
                return res.status(200).json({message: "type Array modifié"})
            }).catch(err => {
                console.log("err ", err)
                return res.status(400).json({message: err.message})
            })
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
    delete: async (req, res) => {
        try {
            const {id} = req.params;
            await Tab.findByIdAndDelete(id);
            return res.status(200).json({message: "type Array effacé"})
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    }
}
