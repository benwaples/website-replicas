import React from 'react';

function Header(): JSX.Element {
  return (
    <header className="bb-header">
      <img
        src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
        alt="blockbuster logo"
      />
      <ul>
        <li>
          <a href="google.com">HOME</a>
        </li>
        <li>
          <a href="google.com">NEW RELEASES</a>
        </li>
        <li>
          <a href="google.com">SHOP</a>
        </li>
        <li>
          <a href="google.com">ABOUT</a>
        </li>
        <li>
          <a href="google.com">CONTACT</a>
        </li>
        <li>
          <a href="google.com">BLOG</a>
        </li>
        <li className="shopping-cart">
          <a href="google.com">
            <img
              alt="shopping cart"
              src="https://www.pinclipart.com/picdir/big/83-831322_shopping-cart-logo-png-white-clipart.png"
            />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
