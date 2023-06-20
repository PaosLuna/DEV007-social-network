import { getAuth } from 'firebase/auth';
import {
  onSnapshot,
  // getDoc,
  // deleteDoc,
  collection,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../app/firebase';
import logoMountainMe from '../Imagenes/Logo_MountainMe.png';
import menu from '../Imagenes/menu.png';
import lupa from '../Imagenes/lupa.png';
import iconoHome from '../Imagenes/iconoHome.png';
import iconoPerfil from '../Imagenes/iconoPerfil.png';
import iconoSalir from '../Imagenes/iconoSalir.png';
import {
  logout,
  // obtenerUsers,
  // usuarioCorreo,
  getUsername,
  traerPost,
  editarPost,
  eliminarPost,
  updateLike,
  disLike,
} from './utils.js';
import { crearPost, validarpost } from './domUtils';

export const Home = (onNavigate) => {
  /* HEADER */
  const header2 = document.createElement('header');
  const logoChico = document.createElement('img');
  const despliegueMenu = document.createElement('button');
  const imagenMenu = document.createElement('img');
  const menuHome = document.createElement('div');
  const opcionSection = document.createElement('ul');
  const navHome = document.createElement('li');
  const navPerfil = document.createElement('li');
  const navCerrarSesion = document.createElement('li');
  logoChico.src = logoMountainMe;
  imagenMenu.src = menu;
  header2.classList.add('header2');
  logoChico.classList.add('logo2');
  imagenMenu.classList.add('tresLineas');
  menuHome.classList.add('menuHome');
  despliegueMenu.classList.add('despliegueMenu');
  opcionSection.classList.add('opcionSection');

  /* MENÚ GRANDE */
  const menuGrande = document.createElement('div');
  menuGrande.classList.add('menuGrande');
  const iconosDiv = document.createElement('div');
  iconosDiv.classList.add('iconosDiv');
  const selectDiv = document.createElement('div');
  selectDiv.classList.add('selectDiv');
  const imagenHome = document.createElement('img');
  const imagenPerfil = document.createElement('img');
  const imagenSalir = document.createElement('img');
  imagenHome.classList.add('imagenHome');
  imagenPerfil.classList.add('imagenPerfil');
  imagenSalir.classList.add('imagenSalir');
  imagenHome.src = iconoHome;
  imagenPerfil.src = iconoPerfil;
  imagenSalir.src = iconoSalir;
  const opcionSection2 = document.createElement('ul');
  const navHome2 = document.createElement('li');
  const navPerfil2 = document.createElement('li');
  const navCerrarSesion2 = document.createElement('li');
  opcionSection2.classList.add('opcionSection2');
  navHome2.classList.add('navHome2');
  navPerfil2.classList.add('navPerfil2');
  navCerrarSesion2.classList.add('navSalir2');
  navHome2.textContent = 'HOME';
  navPerfil2.textContent = 'PERFIL';
  navCerrarSesion2.textContent = 'SALIR';
  const eventosDiv1 = document.createElement('div');
  eventosDiv1.classList.add('eventosDiv1');
  const eventosDiv = document.createElement('div');
  eventosDiv.classList.add('eventosDiv');
  const tituloEventos = document.createElement('h1');
  tituloEventos.classList.add('tituloEventos');
  tituloEventos.textContent = 'Conoce los eventos más cercanos';
  const eventosLista = document.createElement('div');
  eventosLista.classList.add('eventosLista');
  const botonEvento = document.createElement('button');
  botonEvento.classList.add('botonEvento');
  /* MENÚ GRANDE */

  /* POPUP CERRAR SESIÓN */
  const salirDiv = document.createElement('div');
  const salirPopUp = document.createElement('div');
  const salirMensaje = document.createElement('p');
  const btnSalir = document.createElement('button');
  const btnVolver = document.createElement('button');
  salirDiv.classList.add('salirDiv');
  salirPopUp.classList.add('salirPopUp');
  salirMensaje.classList.add('salirMensaje');
  btnSalir.classList.add('btnSalir');
  btnVolver.classList.add('btnVolver');
  salirMensaje.textContent = '¿Estás seguro de querer salir?';
  btnSalir.textContent = 'SALIR';
  btnVolver.textContent = 'VOLVER';
  /* POPUP CERRAR SESIÓN */

  const HomeDiv = document.createElement('div');
  const buscadorDiv = document.createElement('div');
  const buscadorHome = document.createElement('input');
  const botonBuscador = document.createElement('button');
  const imagenLupa = document.createElement('img');
  const publicacionDiv = document.createElement('div');
  const mensajePost = document.createElement('p');
  const botonPopUp = document.createElement('button');
  const botonPopUpText = document.createElement('span');
  const modalDiv = document.createElement('div');
  const publicacionPopUp = document.createElement('div');
  const close = document.createElement('span');
  const nombreUsuario = document.createElement('input');
  const ubicacion = document.createElement('input');
  const dificultad = document.createElement('select');
  const unselect = document.createElement('option');
  const bajo = document.createElement('option');
  const medio = document.createElement('option');
  const alto = document.createElement('option');
  const equipo = document.createElement('input');
  const textoPublicacion = document.createElement('input');
  const fotoPublicacion = document.createElement('input');
  const botonPublicar = document.createElement('button');
  const divPosts = document.createElement('div');

  HomeDiv.classList.add('homeDiv');
  buscadorDiv.classList.add('buscadorDiv');
  buscadorHome.classList.add('buscadorHome');
  botonBuscador.classList.add('botonBuscarHome');
  imagenLupa.classList.add('imagenLupa');
  publicacionDiv.classList.add('publicacionDiv');
  botonPopUp.classList.add('botonPopUp');
  botonPopUpText.classList.add('placeholder');
  modalDiv.classList.add('modalDiv');
  publicacionPopUp.classList.add('publicacionPopUp'); //
  publicacionPopUp.classList.add('active'); //
  mensajePost.classList.add('mensajePost');
  textoPublicacion.classList.add('textoPublicacion');
  fotoPublicacion.classList.add('fotoPublicacion');
  close.classList.add('close');
  botonPublicar.classList.add('botonPublicar');
  nombreUsuario.classList.add('nombreUsuario');
  ubicacion.classList.add('ubicacion');
  dificultad.classList.add('dificultad');
  equipo.classList.add('equipo');
  divPosts.classList.add('divPosts');

  buscadorHome.setAttribute('type', 'text');
  buscadorHome.setAttribute('placeholder', 'Busca por pais');
  imagenLupa.src = lupa;
  textoPublicacion.setAttribute(
    'placeholder',
    'Cuentanos tu nueva aventura...',
  );
  fotoPublicacion.setAttribute('placeholder', 'Copia la URL de la imagen');
  botonBuscador.setAttribute('type', 'button');
  botonPopUp.setAttribute('type', 'button');
  divPosts.setAttribute('id', 'divPosts');
  unselect.value = '';
  unselect.disabled = true;
  unselect.selected = true;

  publicacionPopUp.setAttribute('id', 'publicacionPopUp');
  textoPublicacion.setAttribute('id', 'textoPublicacion');
  fotoPublicacion.setAttribute('id', 'fotoPublicacion');
  ubicacion.setAttribute('placeholder', 'UBICACIÓN');
  equipo.setAttribute('placeholder', 'EQUIPO NECESARIO');
  ubicacion.setAttribute('id', 'ubicacion');
  dificultad.setAttribute('id', 'dificultad');
  equipo.setAttribute('id', 'equipo');

  navHome.textContent = 'HOME';
  navPerfil.textContent = 'PERFIL';
  navCerrarSesion.textContent = 'SALIR';
  mensajePost.textContent = 'Crear publicacion';
  botonPopUpText.textContent = 'Cuentanos tu nueva aventura...';
  botonPublicar.textContent = 'PUBLICAR';
  unselect.textContent = 'DIFICULTAD';
  bajo.textContent = 'BAJA';
  medio.textContent = 'MEDIA';
  alto.textContent = 'ALTA';
  botonEvento.textContent = 'COMPARTE TU EVENTO';

  HomeDiv.appendChild(header2);
  header2.appendChild(logoChico);
  header2.appendChild(despliegueMenu);
  despliegueMenu.appendChild(imagenMenu);
  despliegueMenu.appendChild(menuHome);
  menuHome.appendChild(opcionSection);
  opcionSection.appendChild(navHome);
  opcionSection.appendChild(navPerfil);
  opcionSection.appendChild(navCerrarSesion);

  /* MENÚ GRANDE */
  HomeDiv.appendChild(menuGrande);
  menuGrande.appendChild(iconosDiv);
  iconosDiv.appendChild(imagenHome);
  iconosDiv.appendChild(imagenPerfil);
  iconosDiv.appendChild(imagenSalir);
  menuGrande.appendChild(selectDiv);
  selectDiv.appendChild(opcionSection2);
  opcionSection2.appendChild(navHome2);
  opcionSection2.appendChild(navPerfil2);
  opcionSection2.appendChild(navCerrarSesion2);
  HomeDiv.appendChild(eventosDiv1);
  eventosDiv1.appendChild(eventosDiv);
  eventosDiv.appendChild(tituloEventos);
  eventosDiv.appendChild(botonEvento);
  eventosDiv.appendChild(eventosLista);
  /* MENÚ GRANDE */

  /* POPUP CERRAR SESIÓN */
  HomeDiv.appendChild(salirDiv);
  salirDiv.appendChild(salirPopUp);
  salirPopUp.appendChild(salirMensaje);
  salirPopUp.appendChild(btnSalir);
  salirPopUp.appendChild(btnVolver);
  /* POPUP CERRAR SESIÓN */

  HomeDiv.appendChild(buscadorDiv);
  buscadorDiv.appendChild(buscadorHome);
  buscadorDiv.appendChild(botonBuscador);
  botonBuscador.append(imagenLupa);
  HomeDiv.appendChild(publicacionDiv);
  publicacionDiv.appendChild(mensajePost);
  publicacionDiv.appendChild(botonPopUp);
  botonPopUp.appendChild(botonPopUpText);
  HomeDiv.appendChild(modalDiv);
  modalDiv.appendChild(publicacionPopUp);
  publicacionPopUp.appendChild(nombreUsuario);
  publicacionPopUp.appendChild(ubicacion);
  publicacionPopUp.appendChild(dificultad);
  dificultad.appendChild(unselect);
  dificultad.appendChild(bajo);
  dificultad.appendChild(medio);
  dificultad.appendChild(alto);
  publicacionPopUp.appendChild(equipo);
  publicacionPopUp.appendChild(textoPublicacion);
  publicacionPopUp.appendChild(fotoPublicacion);
  publicacionPopUp.appendChild(botonPublicar);
  HomeDiv.appendChild(divPosts);

  despliegueMenu.addEventListener('click', () => {
    menuHome.classList.toggle('active');
  });

  botonPopUp.addEventListener('click', () => {
    modalDiv.style.display = 'block';
  });

  close.addEventListener('click', () => {
    modalDiv.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalDiv) {
      modalDiv.style.display = 'none';
    }
  });

  navHome.addEventListener('click', () => {
    onNavigate('/Home');
  });

  navPerfil.addEventListener('click', () => {
    onNavigate('/PerfilUsuario');
  });

  navCerrarSesion.addEventListener('click', () => {
    salirDiv.style.display = 'block';
  });

  /* NUEVO */
  navHome2.addEventListener('click', () => {
    onNavigate('/Home');
  });

  navPerfil2.addEventListener('click', () => {
    onNavigate('/PerfilUsuario');
  });

  navCerrarSesion2.addEventListener('click', () => {
    salirDiv.style.display = 'block';
  });

  btnSalir.addEventListener('click', () => {
    logout();
    onNavigate('/');
    salirDiv.style.display = 'none';
  });

  btnVolver.addEventListener('click', () => {
    salirDiv.style.display = 'none';
  });
  /* NUEVO */
  /* --------------------SE EMPIEZAN A MOSTRAR LOS POSTS ---------------------------------------- */
  const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'));
  let postEditado = false;
  let id = '';

  onSnapshot(q, (querySnapshot) => {
    divPosts.innerHTML = '';
    const usuarioActual = getAuth().currentUser;

    querySnapshot.forEach(async (doc) => {
      const username = await getUsername(doc.data().email_user);
      const usernametoshow = username === 'google' ? doc.data().nombre : username;

      let divPost = `
    <div class='publicacionPost'>
    <p class='usuario'>${usernametoshow} : ${doc.data().textoPublicacion}</p>
    <p class='ubicacion2'>UBICACIÓN: ${doc.data().ubicacion}</p>
    <p class='dificultad2'>DIFICULTAD: ${doc.data().dificultad}</p>
    <p class='equipo2'>EQUIPO: ${doc.data().equipo}</p>
    <p class='contadorLikes'>${doc.data().likes.length} me gusta</p>
    <img class='imagenPost' src="${doc.data().fotoPublicacion}"></img>`;

      if (doc.data().likes.includes(usuarioActual.uid)) {
        divPost += `<div class='likePublicacion'>
      <button class='like' data-id="${doc.id}"></button>
    </div>`;
      } else {
        divPost += `<div class='likePublicacion'>
      <button class='like' data-id="${doc.id}"></button>
    </div>`;
      }

      if (usuarioActual.email === doc.data().email_user) {
        divPost += `<div class='editarPublicacion'>
          <button class='editar' data-id="${doc.id}">Editar</button>
      </div>
      <div class='eliminarPublicacion'>
          <button class='eliminar' data-id="${doc.id}">Eliminar</button>
      </div>`;
      }
      divPost += `</div>
    </div>`;

      divPosts.innerHTML += divPost;

      const btnsEditar = divPosts.querySelectorAll('.editar');
      btnsEditar.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          console.log(e.target.dataset.id);
          modalDiv.style.display = 'block';
          const postEditar = await traerPost(e.target.dataset.id);
          const post = postEditar.data();
          console.log(post);

          ubicacion.value = post.ubicacion;
          dificultad.value = post.dificultad;
          equipo.value = post.equipo;
          textoPublicacion.value = post.textoPublicacion;
          fotoPublicacion.value = post.fotoPublicacion;

          postEditado = true;
          id = e.target.dataset.id;
        });

        const btnsEliminar = divPosts.querySelectorAll('.eliminar');
        btnsEliminar.forEach((btns2) => {
          btns2.addEventListener('click', ({ target: { dataset } }) => {
            console.log('borrar');
            eliminarPost(dataset.id);
          });
        });
      });

      const botonLike = divPosts.querySelectorAll('.like');
      botonLike.forEach((boton) => {
        boton.addEventListener('click', async (e) => {
          e.preventDefault();
          const doc2 = await traerPost(e.target.dataset.id);
          const usuarioActual2 = getAuth().currentUser;

          if (doc2.data().likes.includes(usuarioActual2.uid)) {
            disLike(doc2.id, usuarioActual2.uid);
          } else {
            updateLike(doc2.id, usuarioActual2.uid);
          }
        });
      });
    });
  });

  botonPublicar.addEventListener('click', () => {
    modalDiv.style.display = 'none';

    if (postEditado === true) {
      editarPost(id, {
        ubicacion: ubicacion.value,
        dificultad: dificultad.value,
        equipo: equipo.value,
        textoPublicacion: textoPublicacion.value,
        fotoPublicacion: fotoPublicacion.value,
      });

      postEditado = false;
    } else {
      validarpost();
      crearPost();
    }

    document.getElementById('ubicacion').value = '';
    document.getElementById('dificultad').value = '';
    document.getElementById('equipo').value = '';
    document.getElementById('textoPublicacion').value = '';
    document.getElementById('fotoPublicacion').value = '';
  });

  return HomeDiv;
};
