import React from 'react';
import Nav from './Nav';

function Footer() {
  return (
    <footer>
      <Nav 
        ariaLabel="Footer Navigation" 
        className="footer-nav" 
        links={[
          { href: "#privacy", text: "Privacy" },
          { href: "#terms", text: "Terms" }
        ]}
      />
      <p>© 2024 Blog Site</p>
    </footer>
  );
}

export default Footer;
