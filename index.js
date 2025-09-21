const connectDatabase = require('./database/connetcMongo');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"views", "home.html"))
} )

const estudanteRoutes = require('./routes/estudanteRoutes');
app.use("/estudante",estudanteRoutes); 

const professorRoutes = require('./routes/professorRoutes');
app.use("/professor",professorRoutes); 

connectDatabase().then(() => {
app.listen(5001, (erro)=>{
    if(erro){
        console.log("Erro ao iniciar o servidor" + erro);
     }else{
        console.log("Servidor iniciado na porta 5001");
    }
});
});