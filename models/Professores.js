const mongoose = require('mongoose');

const ProfessoresSchema = new mongoose.Schema({
    nome:{
        type: String,
    },
    email:{
        type: String,
    },
    cargahoraria:{
        type: Number,
    },
    posgraduado:{
        type: Boolean,
    },
})

const ProfessoresModel = mongoose.model("Professores", ProfessoresSchema);
module.exports = ProfessoresModel;