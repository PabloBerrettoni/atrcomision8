function crearUsuario( nombre, lastName, birthDate, username, password ){
    let user = {
        name: nombre,
        lastName: lastName,
        birthDate: birthDate,
        username: username,
        password: password
    }
    
    fetch(`${window.origin}/crearUsuario`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(user),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    }).then((response) => {if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status code: ${response.status}`);
        return;
    }
    response.json().then(function (respuesta) {
        let estado = respuesta['STATUS']
        if ( estado == 'OK'){
            console.log('El usuario se creo con exito')
        } else {
            console.log('Error al crear usuario')
        }
    });
    }).catch(function (error) {
        console.log("Fetch error: " + error);
    });



}



window.onload = () => {
    document.addEventListener('keypress', (event)=>{
        if (event.key == 'Enter'){
            //document.getElementById('lastName').focus()
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
                    let passwordConf = document.getElementById('passwordConfirm').value
                    if ( nombre && lastName && birthDate && username && password && password == passwordConf){
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


