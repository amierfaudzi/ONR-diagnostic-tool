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
        <div className="title">Performance Management</div>
        <div className="subtitle">Diagnostic Tool</div>
        <div className="legend">
          <h4>Filters</h4>
          <div>
            <h5>All CQA Results</h5>
            <h5>CQAs with Closed Loop</h5>
          </div>
        </div>
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
            <AreaChart selectedData={MockData.areaData[`${areaTitle}`]} areaTitle={areaTitle}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
