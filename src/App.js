import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Confetti from 'react-confetti'; // Import Confetti
import GiftsPage from './GiftsPage';
import './App.css';

function HomePage() {
  const [confetti, setConfetti] = useState(true); // State to control confetti

  // Stop confetti after 10 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(false);
    }, 50000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="home-page">
      {/* Confetti Effect */}
      {confetti && <Confetti numberOfPieces={200} colors={['#ff6f61', '#ff4a3d', '#ffcc00', '#00ccff']} />}

      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <h1>Happy Birthday Ashwathi💕!</h1>
      <h1>"welcome to 8teen😎"</h1>
      <Link to="/gifts">
        <button className="gifts-button">Gifts</button>
      </Link>

      {/* Toggle Confetti Button */}
      <button
        className="confetti-button"
        onClick={() => setConfetti(!confetti)}
      >
        {confetti ? 'Stop Confetti' : 'Start Confetti'}
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gifts" element={<GiftsPage />} />
      </Routes>
    </Router>
  );
}

export default App;