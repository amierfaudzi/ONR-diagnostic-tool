import './App.css';
import data from './data.json';
import { useState } from 'react';
import GaugeCard from './components/GaugeCard/GaugeCard';
import SideNav from './components/SideNav/SideNav';
import TopNav from './components/TopNav/TopNav';
import AreaChart from './components/AreaChart';

function App() {

  let [selected, isSelected] = useState(0);


  return (
    <div className="App">
      <SideNav/>

      <div className="main">
        <TopNav/>
        <h1 className="title">Performance Management</h1>
        {/* <h2 className="subtitle">Diagnostic Tool</h2>
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
          </div> */}
          <AreaChart/>
      </div>
    </div>
  );
}

export default App;
