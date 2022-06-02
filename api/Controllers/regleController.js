const Regle = require('../models/regle.model');
const Tab = require('../models/array.model');

module.exports = {
    create: async (req, res) => {
        try {
            const {name, type, typeArrayId} = req.body;
            const regle = new Regle({name, type})
            if (type === 'array') {
                regle.typeArrayId = typeArrayId
            }
            await Regle.create(regle);
            return res.status(200).json({message: "régle créée"});
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    },
    findAll: async (req, res) => {
        try {
            const regles = await Regle.find();
            return res.status(200).json(regles)
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
    findById: async (req, res) => {
        try {
            const {id} = req.params;
            const regle = await Regle.findById(id);
            return res.status(200).json(regle)
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
    update: async (req, res) => {
        try {
            const newRegle = req.body;
            const {id} = req.params;
            await Regle.findByIdAndUpdate(id, newRegle).then(data => {
                return res.status(200).json({message: "régle modifiée"})
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
            await Regle.findByIdAndDelete(id);
            return res.status(200).json({message: "régle effacée"})
        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
    verifyRegle: async (req, res) => {
        try {
            const {id} = req.params;
            const {tableau} = req.body;
            const regle = await Regle.findById(id);
            if (regle.type === 'array') {
                const arrayType = await Tab.findById(regle.typeArrayId)
                console.log("arrayType ", arrayType)
                let i = 0;
                while (i <= arrayType.values.length - 1) {

                    if (!arrayType.values.includes(tableau[i])) {
                        return res.status(400).json({message: 'valeur erroné'})
                    } else {
                        if (i >= tableau.length - 1) {
                            return res.status(200).json({message: "valeur correcte"})
                        } else {
                            i++
                            console.log("compt ", i)
                        }
                    }
                }
            }

        } catch (error) {
            console.log("error ", error.message)
            return res.status(400).json({message: error.message})
        }
    },
}
