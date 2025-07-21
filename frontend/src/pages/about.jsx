import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <div className="center-container">
      <div className="about-container">
        <h1>About Typer</h1>
        <p>
          <strong>Typer</strong> is a minimal, user-friendly typing speed test app. It is designed to help users practice
          and measure their typing speed in words per minute (WPM) and accuracy.
        </p>

        <h2>Typing Modes</h2>
        <p><strong>Normal Mode:</strong> In this mode, WPM is calculated based on standard rules:</p>
        <ul>
          <li>Every 5 characters count as one word.</li>
          <li>Correct characters are considered only — mistakes lower accuracy.</li>
          <li>Backspaces are not penalized, but time keeps ticking.</li>
        </ul>

        <p><strong>Custom Mode:</strong> This mode is for users who paste or input their own text:</p>
        <ul>
          <li>The entire input is matched exactly with your typed version.</li>
          <li>WPM is calculated based on the length of the custom text and your actual typing time.</li>
          <li>Accuracy takes into account all characters — typos have more impact here.</li>
        </ul>

        <h2>Hall of Fame</h2>
        <p>
          The <strong>Hall of Fame</strong> showcases the top performances. If your score (WPM & accuracy) is among the
          best, your name gets featured in the list. You must be logged in to submit your scores.
        </p>

        <p>
          Keep practicing, improve your typing, and aim for the Hall of Fame!
        </p>
      </div>
    </div>
  );
};

export default About;
