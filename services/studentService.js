const StudentModel = require("../models/studentModel");

class StudentService {

    createStudent(student) {
        return StudentModel.create({
            sname: student.name,
            address: student.address,
            roll: student.roll
        })
    }

    getStudent() {
        return StudentModel.findAll();
    }
}

module.exports = StudentService