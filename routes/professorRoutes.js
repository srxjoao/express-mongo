const ProfessorController = require("../controllers/ProfessorController")
const router = require('express').Router();

router.get("/cadastro", ProfessorController.formCadastroProfessor);
router.post("/cadastro", ProfessorController.cadastroProfessor);
router.get("/listaProfessor", ProfessorController.listaProfessor);

module.exports = router;