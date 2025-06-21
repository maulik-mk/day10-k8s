import React, { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function App() {
  const [count, setCount] = useState(0);

  const fetchLike = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/like`);
      const data = await res.json();
      setCount(data.count);
    } catch (err) {
      console.error('Failed to fetch likes:', err);
    }
  };

  const handleLike = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/like`, { method: 'POST' });
      const data = await res.json();
      setCount(data.count);
    } catch (err) {
      console.error('Failed to update like:', err);
    }
  };

  useEffect(() => {
    fetchLike();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Like App</h1>
      <p>Likes: {count}</p>
      <button onClick={handleLike}>Like 👍</button>
    </div>
  );
}

export default App;
