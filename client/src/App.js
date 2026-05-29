// client/src/App.js

import { useState, useEffect } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');
  const [users, setUsers]       = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    // Fetch both API routes at the same time
    Promise.all([
      fetch('http://localhost:5000/api/greeting').then(res => res.json()),
      fetch('http://localhost:5000/api/users').then(res => res.json()),
    ]).then(([greetData, usersData]) => {
      setGreeting(greetData.message);
      setUsers(usersData);
      setLoading(false);
    });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: 60 }}>Loading...</p>;

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>

      {/* Greeting */}
      <h1 style={{ color: '#2563eb' }}>{greeting}</h1>

      {/* Users section */}
      <h2 style={{ marginTop: 40 }}>Team Members List</h2>

      {users.map(user => (
        <div key={user.id} style={{
          border: '1px solid #e2e8f0',
          borderRadius: 10,
          padding: '16px 20px',
          marginBottom: 12,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Left side */}
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>{user.name}</p>
            <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>{user.role}</p>
          </div>
          {/* Right side */}
          <p style={{ margin: 0, color: '#2563eb', fontSize: 13 }}>{user.email}</p>
        </div>
      ))}

    </div>
  );
}

export default App;