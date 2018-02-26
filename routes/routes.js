const Router = require("express").Router;

let router = Router();

const studentController  = require("../controllers/studentController");


router.use("/students", studentController);

module.exports = router;