import React from 'react';

import Header from './header/Header';
import PictureCarousel from './pictureCarousel/pictureCarousel';
import './BlockBuster.scss';
import facebook from './assets/124010.png';
import twitter from './assets/twitter-logo-2-1.png';
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
      <footer>
        <div className="sponsers">
          <ul>
            <li>
              <img
                src="https://bendblockbuster.com/wp-content/uploads/2019/06/Chicago_Tribune_Logo.svg"
                alt="chicago tribune"
              />
            </li>
            <li>
              <img
                src="https://bendblockbuster.com/wp-content/uploads/2019/06/The_Washington_Post_logo.svg"
                alt="Washington Post"
              />
            </li>
            <li>
              <img
                src="https://bendblockbuster.com/wp-content/uploads/2019/05/CBS_News.svg"
                alt="CBS News"
              />
            </li>
            <li>
              <img
                src="https://bendblockbuster.com/wp-content/uploads/2019/05/ABC_News.svg"
                alt="ABS News"
              />
            </li>
            <li>
              <img
                src="https://bendblockbuster.com/wp-content/uploads/2019/05/NBC_News_2018.svg"
                alt="NBC News"
              />
            </li>
            <li>
              <img
                src="https://bendblockbuster.com/wp-content/uploads/2019/05/CNN.svg"
                alt="CNN News"
              />
            </li>
          </ul>
        </div>
        <div className="social">
          <p>© 2019 Blockbuster. All Rights Reserved.</p>
          <ul>
            <li>
              <img src={facebook} alt="facebook" className="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" className="twitter" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default BlockBuster;
