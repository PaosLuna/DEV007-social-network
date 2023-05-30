import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import {provider} from './../app/firebase.js'

let usuarioActual;
const auth = getAuth();

function loginGoogle(onNavigate) {
  //es una funcion de la libreria que permite hacer login con google en popup
  signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/Home');
    })
    .catch((error) => {
      console.log(error.message);
    });
}

onAuthStateChanged(auth, (usuario) => {
  //si hay un usuario que aparezca usuario logueado
  if (usuario) {
    usuarioActual = usuario;
    console.log('usuario logueado', usuarioActual.displayName);
  } else {
    usuarioActual = null;
    console.log('no hay usuario logueado');
  }
});

export const registroGoogle = (onNavigate) => {
  //ejecuta la funcion para realizar el registro con google
  loginGoogle(onNavigate);
};
