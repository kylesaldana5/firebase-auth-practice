



// auth.createUserWithEmailAndPassword(email, pass);

// auth.onAuthStateChanged(firebaseUser => {

// })

( function(){

var config = {
    apiKey: "AIzaSyCj0YA_0hp76rEIQVl06sX0rGWMum6Ooxs",
    authDomain: "fb-auth-practice.firebaseapp.com",
    databaseURL: "https://fb-auth-practice.firebaseio.com",
    projectId: "fb-auth-practice",
    storageBucket: "fb-auth-practice.appspot.com",
    messagingSenderId: "188662414494"
};
firebase.initializeApp(config);

// Get Elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

// Add login event
btnLogin.addEventListener("click", e =>{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

// Add sign up event

btnSignUp.addEventListener("click", e =>{
    // TO:DO Check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
})


}());

btnLogout.addEventListener("click", e =>{
    firebase.auth().signOut();
})

// Add a realtime listener 
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    } else { 
        console.log('not logged in');
        btnLogout.classList.add('hide');
    }
});
        
        