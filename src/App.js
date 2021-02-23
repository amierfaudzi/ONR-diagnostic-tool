import './App.css';
import { ProgressDonut } from './components/ProgressDonut';
import data from './data.json';
import { useState } from 'react';
import GaugeCard from './components/GaugeCard/GaugeCard';

function App() {

  console.log(data);
  let [selected, isSelected] = useState(0);


  return (
    <div className="App">
      <h1>This is the app</h1>
      <div className="donut-wrapper">
      {data.gaugeData.map((data, index) => {
        return (
          <GaugeCard 
            data={data}
            index={index} 
            isSelected={isSelected} 
            selected={selected}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
