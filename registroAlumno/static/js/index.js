
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
                case 'lastName':
                    document.getElementById('password').focus()
                    break
                case 'password':
                    document.getElementById('passwordConfirm').focus()
                    break
                case 'passwordConfirm':
                    let nombre = document.getElementById()
                    break
            }


            


        } 
    } )

}

