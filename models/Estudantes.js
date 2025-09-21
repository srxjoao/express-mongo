const mongoose = require('mongoose');

const EstudantesSchema = new mongoose.Schema({
    nome:{
        type: String,
    },
    email:{
        type: String,
    },
    idade:{
        type: Number,
    },
});

const EstudantesModel = mongoose.model("Estudantes", EstudantesSchema);

module.exports = EstudantesModel;