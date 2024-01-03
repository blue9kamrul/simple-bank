
document.getElementById('buttonSubmit').addEventListener('click', function(){
    const emailField = document.getElementById('inputEmail')
    const email = emailField.value

    const passwordField = document.getElementById('inputPassword')
    const password = passwordField.value
    
    if(email === 'kamrul@islam.com' && password === '1234'){

    }
    else{
        console.log("invalid user")
    }

})