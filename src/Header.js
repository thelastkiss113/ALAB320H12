import React from 'react';
import Nav from './Nav';

/**
 * Header component that displays the main title and navigation links.
 * 
 */
function Header() {
  // Array of navigation links with href and text properties
  const links = [
    { href: '#women', text: 'Women\'s' },
    { href: '#men', text: 'Men\'s' },
    { href: '#street', text: 'On The Street' },
    { href: '#catwalk', text: 'The Catwalk' },
    { href: '#adwatch', text: 'AdWatch' },
    { href: '#about', text: 'About' },
  ];

  return (
    <header>
      {/* Main title of the page */}
      <h1>Sartre's List</h1>
      {/* Subtitle of the page */}
      <h2>Better-Dressed People</h2>
      {/* Navigation component with aria-label, className, and links props */}
      <Nav
        ariaLabel="Main Navigation"
        className="main-nav"
        links={links}
      />
    </header>
  );
}


export default Header;
