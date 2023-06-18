import { provider } from '../app/firebase.js';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export let usuarioActual ;
const auth = getAuth();

export function loginGoogle(onNavigate) {
    //es una funcion de la libreria que permite hacer login con google en popup
    signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/FotoPerfil')
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  


onAuthStateChanged(auth, (usuario) =>{
    //si hay un usuario que aparezca usuario logueado
    if(usuario){
        usuarioActual = usuario;
        console.log("usuario logueado", usuarioActual.displayName)
        console.log(usuarioActual)
    }else {
        usuarioActual = null
        console.log("no hay usuario logueado")
    }
})

export const registroGoogle = (onNavigate) => {
    //ejecuta la funcion para realizar el registro con google
    loginGoogle(onNavigate)
 
}

