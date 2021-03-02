/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './BlockBuster.scss';

function BlockBuster(): JSX.Element {
  return (
    <header className="bb-header">
      <h1>BLOCKBUSTER</h1>
      <nav>
        <a href="google.com">HOME</a>
        <a href="google.com">NEW RELEASES</a>
        <a href="google.com">SHOP</a>
        <a href="google.com">ABOUT</a>
        <a href="google.com">CONTACT</a>
        <a href="google.com">BLOG</a>
        <a href="google.com">
          <img alt="shopping cart" />
        </a>
      </nav>
    </header>
  );
}

export default BlockBuster;
