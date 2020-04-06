const express = require("express");
const admin  = require("../models/admin/admin");
const router = express.Router();


router.post("/adminregister", (req, res) => {
    admin.adminRegister(req, res);

});
router.get("/adminlogin", (req, res) => {
    admin.adminLogin(req, res);

})

module.exports = app => app.use('/admin', router);