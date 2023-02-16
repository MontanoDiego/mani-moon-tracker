import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <ul>
            <li><a href="#">Contact us!</a></li>
            <li><a href="#">About the developers!</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="row"> Copyright © 2023 - All rights reserved </div>
      </div>
    </footer>
  );
}
