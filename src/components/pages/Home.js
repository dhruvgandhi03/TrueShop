import React from 'react'
import Navigation from "./navigation"
import Blocks from './blocks'

import Slider from './slider'
import Showcase from './showcase'


function Home() {
  return (
    <div>
      <Navigation/>
      <Slider/>
      <Showcase/>
      <Blocks/>
    </div>
  )
}

export default Home
