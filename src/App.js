import React, {useState} from 'react';
import Veg from './Veg';
import './App.css';

function App() {

  const [fruit, setFruit] = useState('la fraise');
  const [veg, setVeg] = useState('la carotte');

  return (
    <div className="App">
      <h1>Mon fruit préféré est {fruit}</h1>
      <Veg veg={veg}/>
    </div>
  );
}

export default App;
