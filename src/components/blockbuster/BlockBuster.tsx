import React from 'react';

import Header from './header/Header';
import PictureCarousel from './pictureCarousel/pictureCarousel';
import './BlockBuster.scss';
import NewReleases from './newReleases/NewReleases';
// import { descriptionArray } from './pictureCarousel/assets';

function BlockBuster(): JSX.Element {
  return (
    <div className="block-buster">
      <div className="top-container">
        <Header />
        <PictureCarousel />
        {/* <div className="description-container">
          <p className="top">{descriptionArray[descriptionIndex].top}</p>
          <p className="bottom">{descriptionArray[descriptionIndex].bottom}</p>
        </div> */}
      </div>
      <NewReleases />
    </div>
  );
}

export default BlockBuster;
