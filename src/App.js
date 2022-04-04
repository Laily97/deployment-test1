import logo from './logo.svg';
import './App.css';
import FilterComponent from './components/FilterComponent';
import BusTypeComponent from './components/BusTypeComponent';

import BusStops from "./data/BusStops";

function App() {

  const filterOnlyBusStopCode = () => {
    // let tempArr = [];
    // const bus of BusStops.value;
    // for (const bus of BusStops.value) {
    //   if (bus.Ownership === "Private") {
    //     tempArr.push(bus);
    //   }
    // }
    return BusStops.value;
  }

  return (
    <div className="App">
      <FilterComponent listBusStopCode={filterOnlyBusStopCode()}/>
      <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
          <BusTypeComponent />
      </div>
      
    </div>
  );
}

export default App;
