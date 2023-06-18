import {logout} from "./utils.js"
import logoMountainMe from '../Imagenes/Logo MountainMe.png';
import menu from '../Imagenes/menu.png';
import iconoHome from "../Imagenes/iconoHome.png";
import iconoPerfil from "../Imagenes/iconoPerfil.png";
import iconoSalir from "../Imagenes/iconoSalir.png";

export const PerfilUsuario = (onNavigate) =>{
  const header2 = document.createElement("header");
  const logoChico = document.createElement("img");
  const despliegueMenu = document.createElement('button');
  const imagenMenu = document.createElement('img');
  const menuHome = document.createElement('div');
  const opcionSection = document.createElement('ul');
  const navHome = document.createElement('li');
  const navPerfil = document.createElement('li');
  const navCerrarSesion = document.createElement('li');
  logoChico.src = logoMountainMe
  imagenMenu.src = menu
  header2.classList.add("header2");
  logoChico.classList.add("logo2");
  imagenMenu.classList.add("tresLineas");
  menuHome.classList.add("menuHome");
  despliegueMenu.classList.add("despliegueMenu");
  opcionSection.classList.add("opcionSection");

  /*-----------------------------------*/
  const menuGrande = document.createElement("div");
  menuGrande.classList.add("menuGrande");
  const iconosDiv = document.createElement("div");
  iconosDiv.classList.add("iconosDiv");
  const selectDiv = document.createElement("div");
  selectDiv.classList.add("selectDiv");
  const imagenHome = document.createElement("img");
  const imagenPerfil = document.createElement("img");
  const imagenSalir = document.createElement("img");
  imagenHome.classList.add("imagenHome");
  imagenPerfil.classList.add("imagenPerfil");
  imagenSalir.classList.add("imagenSalir");
  imagenHome.src = iconoHome;
  imagenPerfil.src = iconoPerfil;
  imagenSalir.src = iconoSalir;
  const opcionSection2 = document.createElement("ul");
  const navHome2 = document.createElement("li");
  const navPerfil2 = document.createElement("li");
  const navCerrarSesion2 = document.createElement("li");
  opcionSection2.classList.add("opcionSection2");
  navHome2.classList.add("navHome2");
  navPerfil2.classList.add("navPerfil2");
  navCerrarSesion2.classList.add("navSalir2");
  navHome2.textContent = "HOME";
  navPerfil2.textContent = "PERFIL";
  navCerrarSesion2.textContent = "SALIR";
/*-----------------------------------*/

  const perfilDiv = document.createElement('div');
  const containerPerfil = document.createElement('div');
  const nombreUsuario =  document.createElement('p');
  const fotoPerfil = document.createElement('div');
  const paisUsuario = document.createElement('div');
  const nivelTrackUsuario = document.createElement('div');
  const infoTrackUsuario = document.createElement('div');


  perfilDiv.classList.add("perfilDiv");
  containerPerfil.classList.add("containerPerfil");
  nombreUsuario.classList.add("nombreUsuario");
  fotoPerfil.classList.add("fotoPerfil");
  paisUsuario.classList.add("paisUsuario");
  nivelTrackUsuario.classList.add("nivelTrackUsuario");
  infoTrackUsuario.classList.add("infoTrackUsuario");
  menuHome.classList.add("menuHome");
  despliegueMenu.classList.add("despliegueMenu");
  navHome.classList.add("navHome");
  navPerfil.classList.add("navPerfil");
  navCerrarSesion.classList.add("navCerrarSesion");


  //debe ser dinamico
  nombreUsuario.textContent = "Nombre usuario"
  paisUsuario.textContent = "PAIS"
  nivelTrackUsuario.textContent = "NIVEL"
  infoTrackUsuario.textContent = "TRACK RECORD"
  navHome.textContent = 'HOME';
  navPerfil.textContent = 'PERFIL';
  navCerrarSesion.textContent = 'SALIR';
  
  perfilDiv.appendChild(header2);
  header2.appendChild(logoChico);
  header2.appendChild(despliegueMenu);
  despliegueMenu.appendChild(imagenMenu);
  despliegueMenu.appendChild(menuHome);
  menuHome.appendChild(opcionSection);
  opcionSection.appendChild(navHome);
  opcionSection.appendChild(navPerfil);
  opcionSection.appendChild(navCerrarSesion)

  perfilDiv.appendChild(menuGrande);
  menuGrande.appendChild(iconosDiv);
  iconosDiv.appendChild(imagenHome);
  iconosDiv.appendChild(imagenPerfil);
  iconosDiv.appendChild(imagenSalir);
  menuGrande.appendChild(selectDiv);
  selectDiv.appendChild(opcionSection2);
  opcionSection2.appendChild(navHome2);
  opcionSection2.appendChild(navPerfil2);
  opcionSection2.appendChild(navCerrarSesion2);


  perfilDiv.appendChild(containerPerfil);
  containerPerfil.appendChild(nombreUsuario);
  containerPerfil.appendChild(fotoPerfil);
  containerPerfil.appendChild(paisUsuario);
  containerPerfil.appendChild(nivelTrackUsuario);
  containerPerfil.appendChild(infoTrackUsuario);
  
  despliegueMenu.addEventListener('click', () => {
    menuHome.classList.toggle('active');
   });

  navHome.addEventListener('click', () => {
    onNavigate("/Home");
  })

  navPerfil.addEventListener('click', () => {
    onNavigate("/PerfilUsuario");
  })

  navCerrarSesion.addEventListener('click', () => {
    logout();
    onNavigate("/");
  })

  navHome2.addEventListener('click', () => {
    onNavigate("/Home");
  })

  navPerfil2.addEventListener('click', () => {
    onNavigate("/PerfilUsuario");
  })
  
  navCerrarSesion2.addEventListener('click', () => {
    logout();
    onNavigate("/");
  })

  

  return perfilDiv


}