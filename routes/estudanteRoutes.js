const EstudanteController = require("../controllers/EstudanteController")
const router = require('express').Router();

router.get("/cadastro", EstudanteController.formCadastro);
router.post("/cadastro", EstudanteController.cadastroEstudante);
router.get("/listaEstudante", EstudanteController.listaEstudante);
module.exports = router;