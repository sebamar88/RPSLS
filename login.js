const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const loginCheck = (user) => {
  if(user){      
      loggedInLinks.forEach(link => link.style.display = 'block')
      loggedOutLinks.forEach(link => link.style.display = 'none')
  } else {
      loggedInLinks.forEach(link => link.style.display = 'none')
      loggedOutLinks.forEach(link => link.style.display = 'block')
  }
}

//Sign up
const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const signupEmail = document.querySelector('#signupEmail').value
    const signupPassword = document.querySelector('#signupPassword').value
    const signupName = document.querySelector('#signupName').value

    auth
        .createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then(()=>{
            //clear form
            signupForm.reset();
            signupModal.hide();
            console.log('Registrado de forma exitosa')
        })
})

//Login
const loginForm = document.querySelector('#loginForm');
const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
const signinModal = new bootstrap.Modal(document.getElementById('loginModal'));
const errorToast = document.querySelector('.toast')
const errorMsg = document.querySelector('.toast-body')
const toasClose = document.querySelector('#toastClose')
const myToast = bootstrap.Toast.getInstance(errorToast)

toasClose.addEventListener('click', ()=>{
  errorToast.classList.toggle("show")
})


loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const loginEmail = document.querySelector('#loginEmail').value
    const loginPassword = document.querySelector('#loginPassword').value

    auth
        .signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(userCredential => {
            //clear form
            loginForm.reset();
            signinModal.hide();
            console.log('Inicio de sesión exitoso')
        })
        .catch((error) => { // Error
            switch (error.code) {
                case 'auth/invalid-email':
                    errorToast.classList.toggle("show")
                    errorMsg.innerHTML = 'El formato del correo ingresado no es valido, verifica e intente de nuevo';
                break;
                case 'auth/user-not-found':
                    errorToast.classList.toggle("show")
                    errorMsg.innerHTML = 'No hay usuario registrado con ese correo, verifica e intente de nuevo';
                break;
                case 'auth/wrong-password':
                    errorToast.classList.toggle("show")
                    errorMsg.innerHTML = 'La contraseña no es válida, verifica e intente de nuevo';
                break;
                default:
                break;
            }
        });
})

//Logout
const logoutButton = document.querySelector('#logout');

logoutButton.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('Cerraste sesión de forma exitosa')
        location.reload();
    })
})

// Google Login
const googleButton = document.querySelector('#googleButton');
googleButton.addEventListener('click', (e)=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(cred => {
            return fs.collection('users').doc(cred.user.uid).set({
                email: cred.user.email,
                name: cred.user.displayName
            });
            
        })
        .then(result => {
            loginForm.reset();
            signinModal.hide();
        })
        .catch(err => {
            console.log(err)
        })
})

// Eventos
// list for auth state change
auth.onAuthStateChanged(user => {
    
  if(user){
    loginCheck(user);
  }else{
      loginCheck(user);
  }
})