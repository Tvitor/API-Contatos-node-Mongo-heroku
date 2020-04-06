const express = require("express");
const authMiddleWare = require("../middleware/tokenverify");
const contato = require("../models/contact/contato");
const router = express.Router();

router.use(authMiddleWare);


router.post("/contatocreate", (req, res) => {
    contato.contatocreate(req, res);

});
router.get("/contatoget", (req, res) => {
    contato.contatoget(req, res);

});
router.get("/contatolist", (req, res) => {
    contato.contatolist(req, res);

});
router.post("/contatoput", (req, res) => {
    contato.contatoput(req, res);

});
router.post("/contatodelete", (req, res) => {
    contato.contatodelete(req, res);

});

module.exports = app => app.use('/contato', router);