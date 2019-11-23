import React from 'react';
import './Menu.css'
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';

const Menu = (props) => {

  return (
    <nav className="menu">
      <h4>Select Articles by Type:</h4>
      <div className="btn-container">
        <button id="entertainment-btn" className="menu-btn" onClick={() => props.switchStateGenre(entertainment)}>
          Entertainment
        </button>
        <button id="health-btn" className="menu-btn" onClick={() => props.switchStateGenre(health)}>
          Health
        </button>
        <button id="local-btn" className="menu-btn" onClick={() => props.switchStateGenre(local)}>
          Local
        </button>
        <button id="science-btn" className="menu-btn" onClick={() => props.switchStateGenre(science)}>
          Science
        </button>
        <button id="technology-btn" className="menu-btn" onClick={() => props.switchStateGenre(technology)}>
          Technology
        </button>
      </div>
    </nav>
  )
}

export default Menu;
