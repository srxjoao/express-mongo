const path = require('path');
const Professor = require('../models/Professores')
module.exports = class ProfessorController{
    static formCadastroProfessor(req, res){
        res.sendFile(path.join( __dirname, "../views", "formCadProfessor.html"));
    }

    static cadastroProfessor(req, res){
        const {nome, email, cargahoraria, posgraduado} = req.body;

        Professor.create({
            nome,
            email,
            cargahoraria,
            posgraduado,
        }).then(() => {
            res.send("Cadastro Realizado! <a href='/'>Volte para a página Home </a>")
        })
        .catch((err) => {
            res.send("Erro ao cadastrar professor" + err  + "<br>  <a href='/'>Volte para a página Home </a>" )
        })
    }

    static listaProfessor(req, res){
        Professor.find().then((professores) =>{
            res.json(professores);
        })
        .catch((err) => {
            res.send("Erro ao Buscar professor" + err  + "<br>  <a href='/'>Volte para a página Home </a>" )
        });
    }    
}