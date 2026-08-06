import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHello();
  }, []);

  const fetchHello = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/hello');
      setMessage(response.data.message);
      setError(null);
    } catch (err) {
      setError('Failed to fetch message');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full Stack Developer Project</h1>
        <div className="content">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <h2>{message}</h2>}
          <button onClick={fetchHello}>Refresh</button>
        </div>
      </header>
    </div>
  );
}

export default App;
