/*------------------------------------FUNCIONES INICIO SESIÓN -------------------------------------------*/

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


export const validarDatos = (onNavigate) => {
    
    const correo = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    //ejecuta la funcion para realizar el registro con correo
    loginEmail(correo, password, onNavigate)
}

const auth = getAuth();
export function loginEmail(email,password, onNavigate){
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        onNavigate('/Home')
        
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  /*------------------------------------FUNCIONES REGISTRO CORREO -------------------------------------------*/

  import { createUserWithEmailAndPassword } from "@firebase/auth";
  import { registroCorreo } from "./registroCorreo";
import { db } from "../app/firebase";

  export const registro = (onNavigate) => {
    const nameNewUser = document.getElementById('nameNewUser');
    const mailNewUser = document.getElementById('mailNewUser');
    const passNewUser = document.getElementById('passNewUser');
    const confirPass = document.getElementById('confirPass');  

    const expresionRegular = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (nameNewUser.value === "" || mailNewUser.value === "" || passNewUser.value === "" || confirPass.value === ""){ 
     return alert("Debes de llenar todos los campos")
    }
    
    if (passNewUser.value !== confirPass.value) {
        return alert("Las contraseñas deben coincidir")
        
    } 
    
    if(expresionRegular.test(passNewUser.value) ){
      registroMail( mailNewUser.value, passNewUser.value, onNavigate)

    } else {
        alert("Tu contraseña debe incluir los siguientes caracteres:\n Aa1@")
    }
 }
 

 const registroMail = (email, password, onNavigate) =>{
  console.log(  addDoc(collection(db, "posts"), {
    name: 'Hola',
  }))
 const auth = getAuth(); 
 createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
     //console.log(result) adddoc aqui va la logica para traer datos
     // Signed in
     onNavigate('/FotoPerfil')
   })
   .catch((error) => {
     console.log(error);
   });
 };

