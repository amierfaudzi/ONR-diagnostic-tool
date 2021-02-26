import './App.css';
import MockData from './data.json';
import { useState, useEffect } from 'react';
import GaugeCard from './components/GaugeCard/GaugeCard';
import SideNav from './components/SideNav/SideNav';
import TopNav from './components/TopNav/TopNav';
import AreaChart from './components/AreaChart/AreaChart';

function App() {

  let [selected, isSelected] = useState(0);
  let [areaTitle, setAreaTitle] = useState("Quality Score");

  useEffect(() => {
    console.log("This has fire")
    setAreaTitle(MockData.gaugeData[selected].name)
  }, [selected])

  return (
    <div className="App">
      <SideNav/>

      <div className="main">
        <TopNav/>
        <h1 className="title">Performance Management</h1>
        <h2 className="subtitle">Diagnostic Tool</h2>
        <div className="chart-wrapper">
          <div className="donut-wrapper">
            {MockData.gaugeData.map((data, index) => {
              return (
                <GaugeCard 
                  data={data}
                  index={index} 
                  isSelected={isSelected} 
                  selected={selected}/>
              )
            })}
          </div>
          <div>
            <AreaChart selectedData={MockData.areaData[`${areaTitle}`]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
