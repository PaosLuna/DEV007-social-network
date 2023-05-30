import {registroGoogle} from './registroGoogle.js'
import { registroCorreo } from './registroCorreo.js';


export const inicio = (onNavigate) => {

    const inicioDiv = document.createElement('div');
    const botonInicio = document.createElement('button');
    const botonRegistro = document.createElement('button');
    const botonGoogle = document.createElement ('button');
    
    inicioDiv.classList.add("inicioDiv")
    botonInicio.classList.add("botonInicio")
    botonRegistro.classList.add("botonRegistro")
    botonGoogle.classList.add("botonGoogle")

    botonInicio.textContent = 'Inicia Sesion';
    botonRegistro.textContent = 'Registrateeeeeeeeee';
    botonGoogle.textContent = 'Ingresa con Google';
    
    botonInicio.addEventListener('click', () => onNavigate('/Inicio'));
    botonRegistro.addEventListener('click', () => onNavigate('/Registro'));
    botonGoogle.addEventListener('click', () => registroGoogle(onNavigate));

    inicioDiv.appendChild(botonInicio);
    inicioDiv.appendChild(botonRegistro);
    inicioDiv.appendChild(botonGoogle);

    return inicioDiv;
}

