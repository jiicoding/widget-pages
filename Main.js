import React from 'react';
import { Route } from 'react-router-dom';

import About from './About'
import Home from './Home'
import Slider from './Slider'

const Main = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/slider" component={Slider} />
    </>
  )
}

export default Main;