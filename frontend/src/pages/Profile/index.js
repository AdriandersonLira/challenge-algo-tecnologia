import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './style.css';
import api from '../../services/api';

function Profile() {
  const [ user, setUser ] = useState({});
  const userName = localStorage.getItem('userName');
  const userToken = localStorage.getItem('userToken');

  const history = useHistory();

  useEffect(() => {
    api.get('verification', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      setUser(response.data)
    })
  }, [userToken]);

  const msg = user.admin === 1 ? `Bem vindo(a), Admin. ${userName}` : `Bem vindo(a), ${userName}` ;

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return(
    <div className="container">
      <div className="content">
        <h1>{msg}</h1>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </div>
    </div>
  );
}

export default Profile;