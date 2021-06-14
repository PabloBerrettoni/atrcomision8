function crearUsuario( nombre, lastName, birthDate, username, password ){
    let user = {
        name: nombre,
        lastName: lastName,
        birthDate: birthDate,
        username: username,
        password: password
    }
    funciones.cargarDb()
}



window.onload = () => {
    document.addEventListener('keypress', (event)=>{
        console.log(event)
        if (event.key == 'Enter'){
            //document.getElementById('lastName').focus()
            console.log(event.path[0])
            let elementoId = event.path[0].getAttribute('id')
            switch (elementoId){
                case 'name':
                    document.getElementById('lastName').focus()
                    break
                case 'lastName':
                    document.getElementById('birthDate').focus()
                    break
                case 'birthDate':
                    document.getElementById('username').focus()
                    break
                case 'username':
                    document.getElementById('password').focus()
                    break
                case 'password':
                    document.getElementById('passwordConfirm').focus()
                    break
                case 'passwordConfirm':
                    let nombre = document.getElementById('name').value
                    let lastName = document.getElementById('lastName').value
                    let birthDate = document.getElementById('birthDate').value
                    let username = document.getElementById('username').value
                    let password = document.getElementById('password').value
                    if ( nombre && lastName && birthDate && username && password){
                        crearUsuario( nombre, lastName, birthDate, username, password )
                    }
                    break
            }

        } 
    } )

    document.addEventListener('keyup', (event)=>{
        let pass = document.getElementById('password').value
        let pass2 = document.getElementById('passwordConfirm').value
        if (pass != pass2){
            let boton = document.getElementById('crearUsuario')
            boton.style.background = 'linear-gradient(26deg, rgb(214 1 1 / 63%) 0%, rgb(251 144 12 / 84%) 100%)'
        } else if (pass == pass2){
            let boton = document.getElementById('crearUsuario')
            boton.style.background = 'linear-gradient(26deg, rgb(6 150 11 / 63%) 0%, rgb(12 251 150 / 84%) 100%)'
        }
    })
}


