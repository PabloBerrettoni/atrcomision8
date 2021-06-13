
let string = {
    capitalice(text){   /*
                        let arr = text.split("")
                         arr[0]=arr[0].toUpperCase()
                        return arr.join("") */
    let firstLetter = text[0].toUpperCase()
    return firstLetter + text.slice(1)
    }
}
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
        this.name = string.capitalice(newName)
    }

    setLastName(newLastName){
        this.lastName = string.capitalice(newLastName)
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
        this.teacher = string.capitalice(newTeacher)
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
        this.name = string.capitalice(newName)
    }

    setLastName(newLastName){
        this.lastName = string.capitalice(newLastName)
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
        this.students = string.capitalice(newStudent)
    }

    setMaterias(newMateria){
        this.materia = newMateria
    }
}

module.exports = {Student,Teacher}

