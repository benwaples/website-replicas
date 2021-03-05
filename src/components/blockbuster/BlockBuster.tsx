import React from 'react';

import Header from './header/Header';
import PictureCarousel from './pictureCarousel/pictureCarousel';
import './BlockBuster.scss';
import NewReleases from './newReleases/NewReleases';
import FeaturedProducts from './featuredProducts/FeaturedProducts';
// import { descriptionArray } from './pictureCarousel/assets';

function BlockBuster(): JSX.Element {
  return (
    <>
      {/* <div className="top-container"> */}
      <Header />
      <PictureCarousel />
      {/* <div className="description-container">
          <p className="top">{descriptionArray[descriptionIndex].top}</p>
          <p className="bottom">{descriptionArray[descriptionIndex].bottom}</p>
        </div> */}
      {/* </div> */}
      <NewReleases />
      <div className="divider">
        <div className="text-box">
          <h4>
            In the age of Netflix and other digital streaming platforms, Harding
            credits her store&apos;s success to both local support and
            Bend&apos;s budding tourism industry
          </h4>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}

export default BlockBuster;
