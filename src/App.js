
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import FirstBanner from './Components/FirstBanner/FirstBanner';
import Profite from './Components/Profit/Profite';
import SecondBanner from './Components/SecondBanner/SecondBanner';



function App() {
  return (
    <div className="App">
      <FirstBanner />
      <SecondBanner />
      <Dashboard />
      <Profite />
    </div>
  );
}

export default App;
