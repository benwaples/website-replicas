/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Header from './header/Header';
import PictureCarousel from './pictureCarousel/pictureCarousel';
import './BlockBuster.scss';

function BlockBuster(): JSX.Element {
  return (
    <>
      <div className="top-container">
        <Header />
        <PictureCarousel />
      </div>
    </>
  );
}

export default BlockBuster;
