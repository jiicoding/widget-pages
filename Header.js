import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div class="header">
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/slider'>Slider</Link>
    </nav>
  </div>
)

export default Header;