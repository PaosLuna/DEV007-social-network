import { inicio } from './components/inicio.js';
import { Home } from './components/Home.js';
import { registroCorreo } from './components/registroCorreo.js';

const rutaDiv = document.getElementById('rutaDiv');

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rutaDiv.firstChild) {
    rutaDiv.removeChild(rutaDiv.firstChild);
  }

  rutaDiv.appendChild(rutas[pathname]);
};


const rutas = {
   '/': inicio(onNavigate),
   '/Home': Home(onNavigate),
   '/Registro': registroCorreo(onNavigate),
};


const component = () => rutas[window.location.pathname];

window.onpopstate = () => {
  while (rutaDiv.firstChild) {
    rutaDiv.removeChild(rutaDiv.firstChild);
  }
  rutaDiv.appendChild(rutas[window.location.pathname]());
};

rutaDiv.appendChild(component());    