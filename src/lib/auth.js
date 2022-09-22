import {
  auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
} from './fireBaseConfig.js';
// updateProfile,

export { getCurrentUser } from './fireBaseConfig.js';

export function registro(nombres, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // window.location.href = '#muro';
      console.log(user); // redireccionar a la otra pagina

      // updateProfile(user, {
      //   displayName: nombres,
      // }).then(() => {
      //   // Profile updated!
      //   // ...
      // }).catch((error) => {
      //   // An error occurred
      //   // ...
      // });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessageJoin = document.querySelector('#errorMessageJoin');
      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessageJoin.innerHTML = '❌ Correo electrónico no válido';
          break;
        case 'auth/weak-password':
          errorMessageJoin.innerHTML = '⚠️ La contraseña debe contener un mínimo de seis caracteres';
          break;
        case 'auth/email-already-in-use':
          errorMessageJoin.innerHTML = '⚠️ Tu correo electrónico ya está registrado';
          break;
        default:
          errorMessageJoin.innerHTML = '⚠️ Rellena todos los campos';
          break;
      }
    });
}

export function iniciarSesion(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // window.location.href = '#muro';
      console.log(user); // redireccionar a la otra pagina
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('.errorMessagelogin');
      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessage.innerHTML = '❌Correo electrónico no válido';
          break;
        case 'auth/wrong-password':
          errorMessage.innerHTML = '❌Contraseña incorrecta';
          break;
        case 'auth/user-not-found':
          errorMessage.innerHTML = '⚠️ Usuario no encontrado, ¡por favor registrate!';
          break;
        default:
          errorMessage.innerHTML = '⚠️ Rellena todos los campos';
          break;
      }
    });
}

export function google() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // window.location.href = '#muro';
      console.log(token);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console.log(error.customData.email);
      console.log(GoogleAuthProvider.credentialFromError(error));
    });
}

export function salir() {
  signOut(auth).then(() => {
    // window.location.href = '/';
  }).catch((error) => {
    console.log(error.message);
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = '#muro';
    console.log(user, 'sesion iniciada');
  } else {
    console.log('sesion no iniciada');
    window.location.href = '#iniciarSesion';
  }
});
