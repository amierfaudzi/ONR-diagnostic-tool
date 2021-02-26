import './App.css';
import MockData from './data.json';
import { useState, useEffect } from 'react';
import GaugeCard from './components/GaugeCard/GaugeCard';
import SideNav from './components/SideNav/SideNav';
import TopNav from './components/TopNav/TopNav';
import AreaChart from './components/AreaChart/AreaChart';
import ButtonTray from './components/ButtonTray/ButtonTray';

function App() {

  let [selected, isSelected] = useState(0);
  let [areaTitle, setAreaTitle] = useState("Quality Score");

  useEffect(() => {
    setAreaTitle(MockData.gaugeData[selected].name)
  }, [selected])

  return (
    <div className="App">
      <SideNav/>

      <div className="main">
        <TopNav/>
        <div className="title">Performance Management</div>
        <div className="subtitle">Diagnostic Tool</div>
        <div className="chart-header">
          <div className="legend">
            <h4>Filters</h4>
            <div className="legend__container">
              <div className="legend__row">
                <div className="legend__color legend__color--one"></div>
                <p>All CQA Results</p>
              </div>
              <div className="legend__row">
                <div className="legend__color legend__color--two"></div>
                <p>CQAs with Closed Loop</p>
              </div>
            </div>
          </div>
          <div className="chart-navigation">
            <p className="chart-navigation__title">{areaTitle} trend</p>
            <ButtonTray/>
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
            <AreaChart selectedData={MockData.areaData[`${areaTitle}`]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
