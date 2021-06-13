const functions = require('./functions')
class Student {
    constructor(){
        this.name = null
        this.lastName = null
        this.age = null
        this.username = null
        this.password = null
        this.teacher = null
        this.materias = null
    }

    setName(newName){
        this.name = functions.capitalice(newName)
    }

    setLastName(newLastName){
        this.lastName = functions.capitalice(newLastName)
    }

    setAge(newAge){
        this.age = newAge
    }

    setUsername(newUsername){
        this.username = newUsername
    }

    setPassword(newPassword){
        this.password = newPassword
    }

    setTeacher(newTeacher){
        this.teacher = functions.capitalice(newTeacher)
    }

    setMaterias(newMateria){
        this.materia = newMateria
    }
}

class Teacher {
    constructor(){
        this.name = null
        this.lastName = null
        this.age = null
        this.username = null
        this.password = null
        this.students = null
        this.materias = null
    }

    setName(newName){
        this.name = functions.capitalice(newName)
    }

    setLastName(newLastName){
        this.lastName = functions.capitalice(newLastName)
    }

    setAge(newAge){
        this.age = newAge
    }

    setUsername(newUsername){
        this.username = newUsername
    }

    setPassword(newPassword){
        this.password = newPassword
    }

    setStudents(newStudent){
        this.students = functions.capitalice(newStudent)
    }

    setMaterias(newMateria){
        this.materia = newMateria
    }
}

module.exports = {Student,Teacher}

