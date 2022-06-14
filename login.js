// Style for Logged and not
//const loggedOutLinks = document.querySelectorAll(".logged-out");
//const loggedInLinks = document.querySelectorAll(".logged-in");

// Register Toast
const errorToastR = document.querySelector(".toastR");
const errorMsgR = document.querySelector(".toastR-body");
const toasCloseR = document.querySelector("#toastCloseR");

// Login Toast
const errorToastL = document.querySelector(".toastL");
const errorMsgL = document.querySelector(".toast-bodyL");
const toasCloseL = document.querySelector("#toastCloseL");

//Login Form
const loginForm = document.querySelector("#loginForm");

// Modals Login / Register
const signupModal = new bootstrap.Modal(document.getElementById("signupModal"));
const signinModal = new bootstrap.Modal(document.getElementById("loginModal"));

//Sign up Form
const signupForm = document.querySelector("#signupForm");

// Logout button
const logoutButton = document.querySelector("#logout");
const googleButton = document.querySelector("#googleButton");

// Functions 
//const loginCheck = (user) => {
    //if (user) {
       // loggedInLinks.forEach((link) => (link.style.display = "block"));
       // loggedOutLinks.forEach((link) => (link.style.display = "none"));
   // } else {
   //     loggedInLinks.forEach((link) => (link.style.display = "none"));
   //     loggedOutLinks.forEach((link) => (link.style.display = "block"));
   // }
//};


const showUser = () => {
    const actualUser = document.querySelector("#userLogged");
    const currentUser = JSON.parse(localStorage.getItem("user"));
    actualUser.innerHTML = `Welcome ${currentUser}`;
};

if (localStorage.getItem("user") != null) {
    showUser();
}

// Events
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signupEmail = document.querySelector("#signupEmail").value;
    const signupPassword = document.querySelector("#signupPassword").value;

    auth
        .createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then(() => {
            //clear form
            signupForm.reset();
            signupModal.hide();
            console.log("Registrado de forma exitosa");
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/weak-password":
                    errorToastR.classList.toggle("show");
                    errorMsgR.innerHTML = "Password should be at least 6 characters";
                    break;
                case "auth/email-already-in-use":
                    errorToastR.classList.toggle("show");
                    errorMsgR.innerHTML =
                        "The email address is already in use by another account.";
                    break;
                default:
                    break;
            }
        });
});

toasCloseR.addEventListener("click", () => {
    errorToastR.classList.toggle("show");
});

toasCloseL.addEventListener("click", () => {
    errorToastL.classList.toggle("show");
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector("#loginEmail").value;
    const loginPassword = document.querySelector("#loginPassword").value;

    auth
        .signInWithEmailAndPassword(loginEmail, loginPassword)
        .then((userCredential) => {
            //clear form
            loginForm.reset();
            signinModal.hide();
            localStorage.setItem("user", JSON.stringify(userCredential.user.email));
            showUser();
            console.log("Successful login");
        })
        .catch((error) => {
            console.log(error)
            // Error
            switch (error.code) {
                case "auth/invalid-email":
                    errorToastL.classList.toggle("show");
                    errorMsgL.innerHTML =
                        "The email format entered is not valid, please check and try again.";
                    break;
                case "auth/user-not-found":
                    errorToastL.classList.toggle("show");
                    errorMsgL.innerHTML =
                        "There is no user registered with that email, please check and try again.";
                    break;
                case "auth/wrong-password":
                    errorToastL.classList.toggle("show");
                    errorMsgL.innerHTML =
                        "The password is invalid, verify and try again.";
                    break;
                case "auth/too-many-requests":
                    errorToastL.classList.toggle("show");
                    errorMsgL.innerHTML =
                        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
                    break;
                default:
                    break;
            }
        });
});

logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("You have successfully logged out");
        localStorage.removeItem("user");
        location.reload();
    });
});

googleButton.addEventListener("click", (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
        .signInWithPopup(provider)
        .then((cred) => {
            localStorage.setItem("user", JSON.stringify(cred.user.email));
            showUser();
        })
        .then((result) => {
            loginForm.reset();
            signinModal.hide();
        })
        .catch((err) => {
            console.log(err);
        });
});


// list for auth state change
//auth.onAuthStateChanged((user) => {
 //   if (user) {
 //       loginCheck(user);
 //   } else {
 //       loginCheck(user);
//    }
//});
