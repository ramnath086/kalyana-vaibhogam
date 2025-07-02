import React, { useState } from 'react';
import { API } from '../services/api';

export default function Register() {
  const [user, setUser] = useState({});

  const register = async () => {
    await API.post('/auth/register', user);
    alert('Registered!');
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={register}>Register</button>
    </div>
  );
}