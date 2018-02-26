const Router = require("express").Router;
let router= Router();
const StudentService = require('../services/studentService');

let studentService = new StudentService();

router.post('/', (request,response) => {
    console.log('req',request)
    studentService.createStudent(request.body).then((student) => {
        response.status(200).json(student)
    }).catch((err) => {
        response.status(500).json(err)
    });
});

router.get('/', (request,response) => {
    studentService.getStudent().then((student) => {
        response.status(200).json(student)
    }).catch((err) => {
        response.status(500).json(err)
    });
});


module.exports = router;