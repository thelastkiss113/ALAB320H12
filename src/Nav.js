import React from 'react';

function Nav({ ariaLabel, className, links }) {
  return (
    <nav aria-label={ariaLabel} role="navigation">
      <ul className={className}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
