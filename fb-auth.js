const auth = firebase.auth();

auth.siginInWithEmailAndPassword(email, pass);

auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUser => {
    
})