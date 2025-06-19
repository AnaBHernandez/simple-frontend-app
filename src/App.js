import React, { useState } from 'react';
import './App.css'; // Mantiene los estilos CSS por defecto si quieres

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchMessage = async () => {
    try {
      // Cuando se despliegue en AWS, esta URL NO NECESITARÁ EL PUERTO.
      // React, gracias al proxy en package.json, redirigirá /api/hello a http://localhost:5000/api/hello en desarrollo.
      // En producción, tu frontend llamará directamente al dominio de tu backend.
      const response = await fetch('/api/hello'); // Llama a la ruta de tu Backend
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text(); // Esperamos una cadena de texto simple de tu Backend
      setMessage(data);
      setError('');
    } catch (e) {
      console.error("Error fetching message:", e);
      setError("Error fetching message from backend. Is the backend running? Check browser console for details.");
      setMessage('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Frontend App</h1>
        <p>Click the button to get a message from the Backend!</p>
        <button onClick={fetchMessage}>Get Backend Message</button>
        {message && <p>Backend Message: <b>{message}</b></p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;