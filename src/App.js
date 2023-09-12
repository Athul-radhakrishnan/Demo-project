
import './App.css';
import Chart from './Components/Chart/Chart';
import Dashboard from './Components/Dashboard/Dashboard';
import FirstBanner from './Components/FirstBanner/FirstBanner';
import Income from './Components/Income/Income';
import Payable from './Components/Payable/Payable';
import Profite from './Components/Profit/Profite';
import SecondBanner from './Components/SecondBanner/SecondBanner';



function App() {
  return (
    <div className="App">
      <FirstBanner />
      <SecondBanner />
      <Dashboard />
      <Profite />
      <Payable />
      <Income />
      <Chart />
    </div>
  );
}

export default App;
