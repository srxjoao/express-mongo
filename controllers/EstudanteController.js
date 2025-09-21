const path = require('path');
const Estudante = require('../models/Estudantes')
module.exports = class EstudanteController{
    static formCadastro(req, res){
        res.sendFile(path.join( __dirname, "../views", "formCadEstudante.html"));
    }

    static cadastroEstudante(req, res){
        const {nome, email, idade} = req.body;

        Estudante.create({
            nome,
            email,
            idade,
        }).then(() => {
            res.send("Cadastro Realizado! <a href='/'>Volte para a página Home </a>")
        })
        .catch((err) => {
            res.send("Erro ao cadastrar estudante" + err + "<br>  <a href='/'>Volte para a página Home </a>" )
        })
    }

    static listaEstudante(req, res){
        Estudante.find().then((estudantes) =>{
            res.json(estudantes);
        })
        .catch((err) => {
            res.send("Erro ao Buscar estudante + err  + <br>  <a href='/'>Volte para a página Home </a>" )
        });
    }    
}