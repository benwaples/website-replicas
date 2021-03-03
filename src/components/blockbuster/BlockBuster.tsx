/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Header from './header/Header';
import PictureCarousel from './pictureCarousel/pictureCarousel';
import './BlockBuster.scss';
import NewReleases from './newReleases/NewReleases';

function BlockBuster(): JSX.Element {
  return (
    <div className="block-buster">
      <div className="top-container">
        <Header />
        <PictureCarousel />
      </div>
      <NewReleases />
    </div>
  );
}

export default BlockBuster;
