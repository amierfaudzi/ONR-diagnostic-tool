import './App.css';
import { ProgressDonut } from './components/ProgressDonut';
import data from './data.json';
import { useState } from 'react';

function App() {

  console.log(data);
  let [selected, isSelected] = useState(1);


  return (
    <div className="App">
      <h1>This is the app</h1>
      {data.gaugeData.map((data, index) => {
        return (
          <div onClick={()=>isSelected(index)}>
            <h3>{data.name}</h3>
            <ProgressDonut 
              width={10}
              progress={data.score/100}
              radius={70}
              color={(index==selected)?'red' : 'steelblue'}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
