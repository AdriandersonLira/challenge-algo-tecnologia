import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';
import api from '../../services/api';

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    if (email.indexOf('@') < 0)
      alert("informe um email válido");
    else if (password.length < 8)
      alert("Digite no mínimo 8 caracteres no campo 'Password'");
    else {
      await api.post('session', { 
        email, password 
      }).then(response => {
        localStorage.setItem('userName', response.data.user.name);
        localStorage.setItem('userToken', response.data.token);
  
        history.push('/profile');
      }).catch(err => {
        alert(err.response.data.error)
      });
    }
  }

  return(
    <div className="container">
      <div className="content">
        <section>
          <div className="admin">
            <h1>User Admin</h1>
            <table>
              <tbody>
                <tr><td>e-mail</td><td>adriandersonmusica@gmail.com</td></tr>
                <tr><td>password</td><td>12345678</td></tr>
              </tbody>
            </table>
          </div>
          <div className="user">
            <h1>User</h1>
            <table>
              <tbody>
                <tr><td>e-mail</td><td>vitoriamaria@gmail.com</td></tr>
                <tr><td>password</td><td>12345678</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="form">
          <form onSubmit={handleLogin}>
            <h1>Faça seu Login</h1>

            <input 
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" className="button">Entrar</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;