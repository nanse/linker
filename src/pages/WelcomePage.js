import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';
import WelcomeContainer from '../containers/welcome/WelcomeContainer';

const WelcomePage = () => {
  return (
    <UploadLayout isParallax={false}>
      <ParallaxProvider>
        <WelcomeContainer />
      </ParallaxProvider>
    </UploadLayout>
  );
};

export default WelcomePage;
