const { default: mongoose, version } = require("mongoose")
const workModel = require("../models/work.model")


exports.getWorks = async (req, res) => {
    try {
        let data = await workModel.find().populate('owner', 'nombre apellido correo')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.getOneWork = async (req, res) => {
    try {
        let id = req.params.id
        let work = await workModel.findById(id).populate('owner', 'nombre, apellido')

        if (work) {
        res.status(200).json(work)
    } else {
        res.status(205).json({msj: 'work not found!'})
    }
    } catch (error) {
        res.status(500).json(error)
    }
}



exports.createWork = async (req, res) => {
    try {
        let data = req.body
        let newWork = new workModel(data)
        let guardado = await newWork.save()
        res.status(200).json(guardado)

    } catch (error) {
        res.status(500).json(error)
    }
}



exports.updateWork = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID no válido' });
        }

        let update = await workModel.findByIdAndUpdate(id, {$set: data, $inc: { __v: 1 }},{new: true})
        res.status(200).json(update)

    } catch (error) {
        res.status(500).json(error)
    }
}





exports.deleteWork = async (req, res) => {
    try {
    let id = req.params.id
    let deleted = await workModel.findByIdAndDelete(id)
    if (deleted) {
         res.status(200).json(deleted)
    }else{
        res.status(201).json({msj:'Work not exist'})
    }
   
        
    } catch (error) {
        res.status(500).json(error)
    }
}

