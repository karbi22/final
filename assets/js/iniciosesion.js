const  Form = document.querySelector('#rform');


 Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const  email = document.querySelector('#sinup-email').value;
    const  password = document.querySelector('#sinup-password').value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      Form.reset();
      
    alert('Ingresado Correctamente');
    window.location='welcome.html'; 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Contraseña o usuario incorrectos, vuelve a ingresar')
    });
      
})