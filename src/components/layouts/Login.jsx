import React from 'react'

const Login = () => {
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