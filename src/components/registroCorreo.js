export const registroCorreo = (onNavigate) => {
    const registroCorreoDiv = document.createElement('div');
    const botonRegistrate = document.createElement('button');
    const formularioRegistro = document.createElement('form');
    const nameNewUser = document.createElement('input');
    const mailNewUser = document.createElement('input');
    const passNewUser = document.createElement('input');
    const confirPass = document.createElement('input');

    nameNewUser.setAttribute("type", "text");
    nameNewUser.setAttribute("name", "username");
    nameNewUser.setAttribute("placeholder", "Selecciona tu nombre de usuario");

    mailNewUser.setAttribute("type", "text");
    mailNewUser.setAttribute("name", "email");
    mailNewUser.setAttribute("placeholder", "Ingresa tu correo");

    passNewUser.setAttribute("type", "password");
    passNewUser.setAttribute("name", "password");
    passNewUser.setAttribute("placeholder", "Selecciona tu contraseña");

    confirPass.setAttribute("type", "password");
    confirPass.setAttribute("name", "password2");
    confirPass.setAttribute("placeholder", "Confirma tu contraseña");

    botonRegistrate.textContent = 'Holaaaaa';
    
    registroCorreoDiv.classList.add("registroCorreoDiv");
    botonRegistrate.classList.add("botonRegistrate");

    registroCorreoDiv.appendChild(formularioRegistro);
    formularioRegistro.appendChild(nameNewUser);
    formularioRegistro.appendChild(mailNewUser);
    formularioRegistro.appendChild(passNewUser);
    formularioRegistro.appendChild(confirPass);
    formularioRegistro.appendChild(botonRegistrate);

    return registroCorreoDiv;
};