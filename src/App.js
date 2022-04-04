import logo from './logo.svg';
import './App.css';
import FilterComponent from './components/FilterComponent';
import BusTypeComponent from './components/BusTypeComponent';

function App() {
  return (
    <div className="App">
      <FilterComponent />
      <div style={{display: 'flex';}}>
          <BusTypeComponent />
      </div>
      
    </div>
  );
}

export default App;
