import React from 'react';
import './Header.css';

export default function Header() {
  return <header className='header-container'>
    <img className='logo' src={process.env.PUBLIC_URL + './assets/maniLogo.png'} />
    <a className='auth' href='#'>Sign Up</a>
  </header>;
}