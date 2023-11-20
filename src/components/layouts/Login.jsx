import React from 'react'

const Login = () => {
  //  const [inputColor, setInputColor] = useState('');
  // const [inputValue, setInputValue] = useState('');
  // const [message, setMessage] = useState('');

  // const variableColor = 'azul'; // Puedes cambiar esto a tu valor deseado

  const handleSubmit = () => {
    if (inputColor.toLowerCase() === variableColor && inputValue === 'TuValorDeseado') {
      setMessage('¡Correcto!');
    } else {
      setMessage('Incorrecto. Inténtalo de nuevo.');
    }
  };
  return (
    <section class="admin-container">
    <div class="login-container">
        <h1>Login</h1>
        <form action="#" method='post'>
            <input type='text' placeholder='usuario' />
            <input type='text' placeholder='contraseña' />
            <button type="button">Iniciar Sesión</button>
        </form>
    </div>
    </section>
  )
}


export default Login