import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import img from '../../assets/login.png'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "")
       mostrarAlerta();
      else
    if (username === 'habitapp' && password === '12345') {
      processLogin();
      redircttoadmin()
    } else {
      //alert('Nombre de usuario o contraseña incorrectos');
      mostrarAlerta2();
    }
  };

  const redircttoadmin = () => {
    navigate('/admin');
  }

  
  
  const mostrarAlerta = ()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe ingresar usuario y contraseña!",      
    });
  }

  const mostrarAlerta2 = ()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre de usuario o contraseña incorrectos",      
    });
  }

  const processLogin = ()=>{
    let timerInterval;
    Swal.fire({
      title: "Ingresando!",  
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
    
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
  }

  return (
    <section className="admin-container">
      <div className="login-container">        
        <img src= {img} className='img-login'/>
        <form action="#" method='post'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña' />
          <button onClick={handleLogin}>Iniciar sesión</button >
        </form>
      </div>
    </section>
  );
};

export default Login;