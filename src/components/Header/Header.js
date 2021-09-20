import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Header.css';

export default function Header() {
  return (
    <Navbar className="Header" fixed="top">
      <h1 className="Heading">Spacestagram</h1>
      <p className="SubHeading">Brought to you by NASA’s Astronomy Photo of the Day (APOD) API</p>
    </Navbar>
  )
}