import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">Anubhuti</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#campaigns">Campaigns</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <header id="home" className="landing-header">
        <h1>Welcome to Anubhuti</h1>
        <p>Empowering communities through education and impact</p>
        <a href="#campaigns" className="cta-button">Get Started</a>
      </header>

      <section id="campaigns" className="features">
        <div className="feature">
          <h2>School Readiness</h2>
          <p>Helping kids get back into classrooms through awareness and guidance.</p>
        </div>
        <div className="feature">
          <h2>Community Campaigns</h2>
          <p>Spreading awareness about education through field sessions and storytelling.</p>
        </div>
      </section>

      <section id="service" className="features">
        <div className="feature">
          <h2>Fellow Support</h2>
          <p>Training and tech tools for grassroots educators.</p>
        </div>
      </section>

      <section id="contact" className="features">
        <div className="feature">
          <h2>Contact Us</h2>
          <p>Email: contact@anubhuti.org<br />Phone: +91-XXXX-XXX-XXX</p>
        </div>
      </section>
    </div>
  );
}

export default App;
