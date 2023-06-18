import { registro, validarCorreo } from "./utils.js";
import logoMountainMe from '../Imagenes/Logo MountainMe.png';

export const registroCorreo = (onNavigate) => {
 /*HEADER PRINCIPAL*/
  const header1 = document.createElement("header");
  const logoGrande = document.createElement("img");
  logoGrande.src = logoMountainMe
  header1.classList.add("headerRegistro2");
  logoGrande.classList.add("logoRegistro2");

  const registroCorreoDiv = document.createElement("div");
  const formulario = document.createElement("div");
  const bienvenido = document.createElement("p");
  const textoRegistro = document.createElement("p");
  const nameNewUser = document.createElement("input");
  const mailNewUser = document.createElement("input");
  const passNewUser = document.createElement("input");
  const confirPass = document.createElement("input");
  const botonRegistrate = document.createElement("button");
  const textoPrivacidad = document.createElement("p");

  nameNewUser.setAttribute("type", "text");
  nameNewUser.setAttribute("name", "username");
  nameNewUser.setAttribute("placeholder", "Selecciona tu nombre de usuario");
  nameNewUser.setAttribute("id", "nameNewUser");
  nameNewUser.required;

  mailNewUser.setAttribute("type", "text");
  mailNewUser.setAttribute("name", "email");
  mailNewUser.setAttribute("placeholder", "Ingresa tu correo");
  mailNewUser.setAttribute("id", "mailNewUser");
  mailNewUser.required;

  passNewUser.setAttribute("type", "password");
  passNewUser.setAttribute("name", "password");
  passNewUser.setAttribute("placeholder", "Selecciona tu contraseña");
  passNewUser.setAttribute("id", "passNewUser");
  passNewUser.required;

  confirPass.setAttribute("type", "password");
  confirPass.setAttribute("name", "password2");
  confirPass.setAttribute("placeholder", "Confirma tu contraseña");
  confirPass.setAttribute("id", "confirPass");
  confirPass.required;

  botonRegistrate.textContent = "REGISTRATE";

  registroCorreoDiv.classList.add("registroCorreoDiv");
  formulario.classList.add("formulario2");
  bienvenido.classList.add("bienvenido");
  textoRegistro.classList.add("textoRegistro");
  nameNewUser.classList.add("nameNewUser");
  mailNewUser.classList.add("mailNewUser");
  passNewUser.classList.add("passNewUser");
  confirPass.classList.add("confirPass");
  botonRegistrate.classList.add("botonRegistrate");
  textoPrivacidad.classList.add("textoPrivacidad");

  bienvenido.textContent = "¡BIENVENIDO!";
  textoRegistro.textContent =
    "Para crear una nueva cuenta, por favor llena los siguientes campos";
  textoPrivacidad.textContent =
    "Al registrarte aceptas nuestras Condiciones de Uso y Política de Privacidad";

  registroCorreoDiv.appendChild(header1);
  header1.appendChild(logoGrande);
  registroCorreoDiv.appendChild(formulario);
  formulario.appendChild(bienvenido);
  formulario.appendChild(textoRegistro);
  formulario.appendChild(nameNewUser);
  formulario.appendChild(mailNewUser);
  formulario.appendChild(passNewUser);
  formulario.appendChild(confirPass);
  formulario.appendChild(botonRegistrate);
  formulario.appendChild(textoPrivacidad);

  botonRegistrate.addEventListener("click", () => {
    validarCorreo();
    registro(onNavigate);
    if (validarCorreo() == true){
        registro(onNavigate);

      } else {
        return console.log("Correo no valido")
      }

      
      
    } 
  );

  return registroCorreoDiv;
};
