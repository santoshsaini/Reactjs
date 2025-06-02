import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './bootstrap.min.css'

import { Fragment } from "react";
import { Counter } from './components/hooks/useState/counter'
// import { ToggleSwitch } from './components/ToggleSwitch'
// import { Todo } from './components/Todo/Todo'
// import { Keys } from './projects/keys'
// import ShortCircuitExample from './components/Todo/ShortCircuit'

// import {NetflixSeriex} from './components/NetflixSeriex';
// import { EventHandling } from './components/EventHandling'
// import { EventProps } from './components/EventProps'
// import { EventPropagation } from './components/EventPropagation'
// import { State } from './components/hooks/State'
// import { DriveState } from './components/hooks/DericeState'
// import { LiftingState } from './components/LiftStateUp'
 
// function Welcome() {
//   return (
//     <>
//       <img src='images/hotel.jpg' width={500}></img>
//       <h1>Welcome to React!</h1>
//       <p>We are excited to have you here. Let's build something amazing!</p>
//     </>
//   );
// }

// export default Welcome;

export const App = () => {
  return(
    <div className='container'>
      {/* <NetflixSeriex /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      {/* <DriveState /> */}
      {/* <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo /> */}
      {/* <Keys /> */}
      {/* <ShortCircuitExample /> */}
      <Counter />
    </div>
  );
}

// console.log(React.createElement("h1", null, "Hello, This is tesing"));

export default App;