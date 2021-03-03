import React from 'react';
import ImageGallery from 'react-image-gallery';
import { imageArray } from './assets';
import './PictureCarousel.scss';

function PictureCarousel(): JSX.Element {
  return (
    <div className="picture-carousel">
      <ImageGallery
        items={imageArray}
        disableThumbnailScroll
        disableSwipe
        showNav={false}
        autoPlay
        slideInterval={6000}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        onImageError={() => console.log('error')}
      />
    </div>
  );
}

export default PictureCarousel;
