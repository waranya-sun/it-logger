import React from 'react';

const Preloader = () => {
  return (
    <div class='preloader-wrapper small active' style={loadingStyle}>
      <div class='spinner-layer spinner-green-only'>
        <div class='circle-clipper left'>
          <div class='circle'></div>
        </div>
        <div class='gap-patch'>
          <div class='circle'></div>
        </div>
        <div class='circle-clipper right'>
          <div class='circle'></div>
        </div>
      </div>
    </div>
  );
};

const loadingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default Preloader;
