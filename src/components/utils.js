/*------------------------------------FUNCIONES INICIO SESIÓN -------------------------------------------*/

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  getDocs,
  documentId,
  where,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,

} from "firebase/firestore";

export const validarDatos = (onNavigate) => {
  const correo = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //ejecuta la funcion para realizar el registro con correo
  loginEmail(correo, password, onNavigate);
};

const auth = getAuth();
export function loginEmail(email, password, onNavigate) {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in
      onNavigate("/Home");
    })
    .catch((error) => {
      alert(error.message);
    });
}

/*------------------------------------FUNCIONES REGISTRO CORREO -------------------------------------------*/

import { createUserWithEmailAndPassword } from "@firebase/auth";
import { db } from "../app/firebase";

export const registro = (onNavigate) => {
  const nameNewUser = document.getElementById("nameNewUser");
  const mailNewUser = document.getElementById("mailNewUser");
  const passNewUser = document.getElementById("passNewUser");
  const confirPass = document.getElementById("confirPass");

  const expresionRegular =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (
    nameNewUser.value === "" ||
    mailNewUser.value === "" ||
    passNewUser.value === "" ||
    confirPass.value === ""
  ) {
    return alert("Debes de llenar todos los campos");
  }

  if (passNewUser.value !== confirPass.value) {
    return alert("Las contraseñas deben coincidir");
  }

  if (expresionRegular.test(passNewUser.value)) {
    registroMail(
      mailNewUser.value,
      passNewUser.value,
      onNavigate,
      nameNewUser.value
    );
  } else {
    alert("Tu contraseña debe incluir los siguientes caracteres:\n Aa1@");
  }
};

const registroMail = (email, password, onNavigate, nameNewUser) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(email, password);
      addDoc(collection(db, "user"), {
        name: nameNewUser,
        mail: email,
        password: password,
      });
      //console.log(result) adddoc aqui va la logica para traer datos
      // Signed in
      onNavigate("/FotoPerfil");
    })
    .catch((error) => {
      console.log(error);
    });
};

export function logout() {
  signOut(auth);
}

/*------------------------------------FUNCIONES CREAR POSTS -------------------------------------------*/
import { usuarioActual } from "./registroGoogle";

export const crearPost = () => {
  const textoPublicacion = document.getElementById("textoPublicacion").value;
  const fotoPublicacion = document.getElementById("fotoPublicacion").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const dificultad = document.getElementById("dificultad").value;
  const equipo = document.getElementById("equipo").value;
  const fecha = serverTimestamp();

  console.log(usuarioActual);
  if (usuarioActual) {
    addDoc(collection(db, "posts"), {
      email_user: usuarioActual.email,
      nombre: usuarioActual.displayName,
      ubicacion: ubicacion,
      dificultad: dificultad,
      equipo: equipo,
      fotoPublicacion: fotoPublicacion,
      textoPublicacion: textoPublicacion,
      fecha: fecha,
      likes: [],
    });
  }
};

export const obtenerUsers = () => getDocs(collection(db, "user", documentId));
console.log(obtenerUsers);

/*------------------------------------------------ FUNCIONES HOME -------------------------------------------*/

export const validarpost = () => {
  const dificultad = document.getElementById("dificultad");
  const equipo = document.getElementById("equipo");
  const textoPublicacion = document.getElementById("textoPublicacion");
  const ubicacion = document.getElementById("ubicacion");
  const fotoPublicacion = document.getElementById("fotoPublicacion");

  if (
    dificultad.value === "" ||
    equipo.value === "" ||
    textoPublicacion.value === "" ||
    ubicacion.value === "" ||
    fotoPublicacion.value === ""
  ) {
    alert("Debes de llenar todos los campos");
  }
};

const usuario = collection(db, "user");
export const usuarioCorreo = await getDocs(usuario);

/*------------------------------------------------ FUNCION MOSTRAR NOMBRES USUARIO -------------------------------------------*/

export const getUsername = async (email) => {
  const userquery = query(collection(db, "user"), where("mail", "==", email));
  const usersnapshot = await getDocs(userquery);
  if (!usersnapshot.empty) {
    const userdoc = usersnapshot.docs[0];
    return userdoc.data().name;
  }
  return "google";
};

/*------------------------------------------------ FUNCION EDITAR POSTS -------------------------------------------*/

export const traerPost = (id) => getDoc(doc(db, "posts", id));  //SIRVE PARA TRAER LOS DATOS

export const editarPost = (id, camposEditados) => updateDoc(doc(db, 'posts', id), camposEditados);

/*------------------------------------------------ FUNCION ELIMINAR POSTS -------------------------------------------*/

export const eliminarPost = id => deleteDoc(doc(db, 'posts', id)); 


/*------------------------------------------------ FUNCION ME GUSTA       -------------------------------------------*/

export const updateLike = (idPost, idUsuario) => {
  updateDoc(doc(db, "posts", idPost), { likes: arrayUnion(idUsuario) });
};

export const disLike = (idPost, idUsuario) => {
  updateDoc(doc(db, "posts", idPost), { likes: arrayRemove(idUsuario) });
};

/*------------------------------------------------ VALIDAR CORREO   -------------------------------------------

export const validarCorreo = (mailNewUser) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mailNewUser)){
   alert("La dirección de email " + mailNewUser + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
   return;
  }
}*/

export function validarCorreo(){

  // Define our regular expression.
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Using test we can check if the text match the pattern
  if( validEmail.test(mailNewUser.value) ){
      console.log('Email is valid, continue with form submission');
  }else{
      alert('Email is invalid, skip form submission');
      return false;
  }
}

