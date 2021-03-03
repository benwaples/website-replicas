import React from 'react';
// import ImageGallery from 'react-image-gallery';
// import { newReleaseTitles } from './assets';
import './NewReleases.scss';

function NewReleases(): JSX.Element {
  return (
    <div className="new-releases">
      <h1>New Releases</h1>
      {/* <ImageGallery
        items={newReleaseTitles}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
      /> */}
    </div>
  );
}

export default NewReleases;
