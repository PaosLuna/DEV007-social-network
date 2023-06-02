import { validarDatos } from "./utils.js";

export const inicioSesion = (onNavigate) => {
/*HEADER PRINCIPAL*/
  const header1 = document.createElement("header");
  const logoGrande = document.createElement("img");
  logoGrande.src = "../Imagenes/Logo MountainMe.png";
  header1.classList.add("header1");
  logoGrande.classList.add("logo1");

  const inicioSesionDiv = document.createElement("div");
  const formulario =  document.createElement("formulario");
  const inputCorreo = document.createElement("input");
  const inputPassword = document.createElement("input");
  const botonIngresar = document.createElement("button");
  const textoBienvenida = document.createElement("p");

  inputCorreo.type = "email";
  inputCorreo.id = "email";
  inputCorreo.placeholder = "Ingresa tu correo";
  inputCorreo.required;

  inputPassword.type = "password";
  inputPassword.id = "password";
  inputPassword.placeholder = "Ingresa tu contraseña";
  inputPassword.required;

  inicioSesionDiv.classList.add("inicioSesionDiv");
  formulario.classList.add("formulario");
  textoBienvenida.classList.add("textoBienvenida");
  inputCorreo.classList.add("inputCorreo");
  inputPassword.classList.add("inputPassword");
  botonIngresar.classList.add("botonIngresar");

  textoBienvenida.textContent = "¡BIENVENIDO DE VUELTA!";
  botonIngresar.textContent = "INGRESA";

  inicioSesionDiv.appendChild(header1);
  header1.appendChild(logoGrande);

  inicioSesionDiv.appendChild(formulario);
  formulario.appendChild(textoBienvenida);
  formulario.appendChild(inputCorreo);
  formulario.appendChild(inputPassword);
  formulario.appendChild(botonIngresar);

  botonIngresar.addEventListener("click", () => {
    validarDatos(onNavigate);
  });
  return inicioSesionDiv;
};
