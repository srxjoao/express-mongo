const mongoose = require('mongoose');

async function connectDatabase() {
    await mongoose
        .connect("mongodb+srv://joaobarbosa6:uwCYV6UPsfLh1pjl@projetoptas1.zhoig.mongodb.net/academico?retryWrites=true&w=majority&appName=ProjetoPTAS1")
        .then(() => console.log("Conectado ao banco de dados"))
        .catch((erro) => 
            console.log("Erro ao conectar ao banco de dados: " + erro));
}

module.exports = connectDatabase;
