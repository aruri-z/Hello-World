import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [users, setUsers] = useState([])
  const [url, setUrl] = useState('18.140.68.162:3001')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('http://localhost:3001/users')
        const users = await res.json()
        console.log(users);
        setUsers(users)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="App">
      {
        users.map(user => (
          <h6 key={user.id}>{user.name}</h6>
        ))
      }
    </div>
  );
}

export default App;
