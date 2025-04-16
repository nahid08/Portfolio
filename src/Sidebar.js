import React from 'react';
import './Sidebar.css'; // We'll create this CSS file
import myself from './assets/images/myself.jpg';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    // The 'open' class is added dynamically based on the state managed in App.js
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <img src={myself} class="image-style"></img>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience ">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#awards">Awards</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;