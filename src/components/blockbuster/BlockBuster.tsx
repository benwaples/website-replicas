/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Header from './header/Header';
import PictureCarousel from './pictureCarousel/pictureCarousel';

function BlockBuster(): JSX.Element {
  return (
    <>
      <Header />
      <PictureCarousel />
    </>
  );
}

export default BlockBuster;
