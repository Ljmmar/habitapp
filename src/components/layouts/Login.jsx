import { useState } from 'react';
// import { useHistory } from 'react-router-dom';


const Login = () => {

  // const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {

    e.preventDefault(); 
    if (username === 'habitapp' && password === '12345') {
      history.push('/admin');
  
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };


  return (
    <section className="admin-container">
      <div className="login-container">
        <h1>Login</h1>
        <form action="#" method='post'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
          <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='contraseña' />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </form>
      </div>
    </section>
  )
}


export default Login