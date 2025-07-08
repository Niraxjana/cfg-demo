import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Our Project</h1>
        <p>Empowering communities through education and impact</p>
        <a href="#features" className="cta-button">Get Started</a>
      </header>

      <section id="features" className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Track outreach activities in real-time.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Visualize program impact with live dashboards.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Streamline data collection from Fellows.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
