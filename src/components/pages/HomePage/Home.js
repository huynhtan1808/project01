import React from 'react';
import HeroSection from '../../HeroSection';
import Project from '../../Project';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Box from '../../Box';
import Page from '../../Page';

function Home() {
  return (
    <>
      <Box />
      <Page />
      <Project />
    </>
  );
}

export default Home;