import React from 'react';
import ImageGallery from 'react-image-gallery';
import { newReleaseTitles } from './assets';
import './NewReleases.scss';

function NewReleases(): JSX.Element {
  return (
    <div className="new-releases">
      <h2>New Releases</h2>
      <div className="release-wrapper">
        <ImageGallery
          items={newReleaseTitles}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          disableSwipe={false}
        />
      </div>
    </div>
  );
}

export default NewReleases;
