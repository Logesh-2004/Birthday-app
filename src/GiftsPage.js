import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function GiftsPage() {
  // Array of video file names (replace with your actual video file names)
  const videoFiles = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4",
    "video7.mp4",
    "video8.mp4",
    "video9.mp4",
    "video10.mp4",
    "video11.mp4",
    "video12.mp4",
    "video13.mp4",
    "video14.mp4",
    "video15.mp4",
    "video16.mp4",
    "video17.mp4",
    "video18.mp4",
  ];

  return (
    <div className="gifts-page">
      <h1>Your Gifts</h1>
      {/* Back Button */}
      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
      {/* Video Grid */}
      <div className="video-grid">
        {videoFiles.map((file, index) => (
          <div key={index} className="video-card">
            <video controls width="200" height="150">
              <source src={`/videos/${file}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiftsPage;