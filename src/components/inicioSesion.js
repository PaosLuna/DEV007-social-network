import { validarDatos } from './domUtils.js';
import logoMountainMe from '../Imagenes/Logo_MountainMe.png';

export const inicioSesion = (onNavigate) => {
  /* HEADER PRINCIPAL */
  const header1 = document.createElement('header');
  const logoGrande = document.createElement('img');
  logoGrande.src = logoMountainMe;
  header1.classList.add('headerRegistro');
  logoGrande.classList.add('logoRegistro');

  const inicioSesionDiv = document.createElement('div');
  const formulario = document.createElement('formulario');
  const inputCorreo = document.createElement('input');
  const inputPassword = document.createElement('input');
  const botonIngresar = document.createElement('button');
  const textoBienvenida = document.createElement('p');
  const botonRegresar = document.createElement('button');
  // const montañaVector = document.createElement('img');

  inputCorreo.type = 'email';
  inputCorreo.id = 'email';
  inputCorreo.placeholder = 'Ingresa tu correo';

  inputPassword.type = 'password';
  inputPassword.id = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  inicioSesionDiv.classList.add('inicioSesionDiv');
  formulario.classList.add('formulario');
  textoBienvenida.classList.add('textoBienvenida');
  inputCorreo.classList.add('inputCorreo');
  inputPassword.classList.add('inputPassword');
  botonIngresar.classList.add('botonIngresar');
  botonRegresar.classList.add('botonRegresar');
  botonRegresar.textContent = 'REGRESAR';
  textoBienvenida.textContent = '¡BIENVENIDO DE VUELTA!';
  botonIngresar.textContent = 'INGRESA';

  inicioSesionDiv.appendChild(header1);
  header1.appendChild(logoGrande);

  inicioSesionDiv.appendChild(formulario);
  formulario.appendChild(textoBienvenida);
  formulario.appendChild(inputCorreo);
  formulario.appendChild(inputPassword);
  formulario.appendChild(botonIngresar);
  formulario.appendChild(botonRegresar);

  botonRegresar.addEventListener('click', () => {
    onNavigate('/');
  });
  botonIngresar.addEventListener('click', () => {
    validarDatos(onNavigate);
  });
  return inicioSesionDiv;
};
