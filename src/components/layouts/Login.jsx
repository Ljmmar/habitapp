import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'habitapp' && password === '12345') {
      redircttoadmin()
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  const redircttoadmin = () => {
    navigate('/admin');
  }

  return (
    <section className="admin-container">
      <div className="login-container">
        <h1>Login</h1>
        <form action="#" method='post'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Usuario' />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña' />
          <button onClick={handleLogin}>Iniciar sesión</button >
        </form>
      </div>
    </section>
  );
};

export default Login;