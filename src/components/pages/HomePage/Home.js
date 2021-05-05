import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Box from '../../Box';
import Page from '../../Page';

function Home() {
  return (
    <>
      <Box />
      <Page />
      <Pricing />
    </>
  );
}

export default Home;