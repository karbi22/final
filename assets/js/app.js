
const  signupForm = document.querySelector('#signup-form');


signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const  email = document.querySelector('#signup-email').value;
    const  password = document.querySelector('#signup-password').value;
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    signupForm.reset();
    
    alert('Registrado Correctamente');

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    signupForm.reset();
    
    alert('El usuario ya existe, ingrese otro porfavor')
    // ..
  });
      
})