import React from 'react';
import './App.css';
// import HigherOrderComponent from './Components/HigherOrderComponent';
import "./Components/Data.jsx"
import userData from './Components/Data.jsx';
import Prog1 from './Components/Prog1.jsx';
import Prog2 from './Components/Prog2.jsx';
import Prog3 from './Components/Prog3.jsx';
import Prog4 from './Components/Prog4.jsx';
import Prog5 from './Components/Prog5.jsx';

function App() {
  return (
    <div className="App">
      {/* <HigherOrderComponent/> */}
      <Prog1 value={userData}/>
      <Prog2 value={userData} />
      <Prog3 value={userData} />
      <Prog4 value={userData} />
      <Prog5 value={userData} />
    </div>
  );
}

export default App;