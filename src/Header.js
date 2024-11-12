import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav 
        ariaLabel="Main Navigation" 
        className="main-nav" 
        links={[
          { href: "#women", text: "Women's" },
          { href: "#men", text: "Men's" },
          { href: "#street", text: "On The Street" },
          { href: "#catwalk", text: "The Catwalk" },
          { href: "#adwatch", text: "AdWatch" },
          { href: "#about", text: "About" },
        ]}
      />
    </header>
  );
}

export default Header;
