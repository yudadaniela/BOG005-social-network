import { iniciarSesion2 } from './auth.js';

export const iniciarContenido = `<section class="contenedor">
<section class="logoInicial">
<img class="titulo" src="img/tituloprincipal.PNG" alt="music book" />
<img class="logo" src="img/Logo.png" alt="logo" />
</section>
<form id="ingresar" class="registro">
<label >Correo electrónico</label> <br>
<input id="loginCorreo" type="text"> <br>
<label >Contraseña</label> <br>
<input id="loginContraseña" type="text"> <br>
<button type="submit" id="iniciarSesion">Iniciar Sesión</button> <br>
<p>ó</p>
<button id="google" >Continúa con Google</button>
<p>¿No tienes una cuenta? <a href="#registrate">Registrate</a></p>
</form>
</section>`;

const vistaInciarS = () => {
  const buttonIngresar = document.getElementById('ingresar');
  buttonIngresar.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('ingresar');
    const email = document.querySelector('#loginCorreo').value;
    const contraseña = document.querySelector('#loginContraseña').value;
    iniciarSesion2(email, contraseña);
  });
};