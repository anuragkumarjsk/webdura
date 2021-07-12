import './App.css';
import Carousal from './Components/Carousal';
import Navbar from './Components/Navbar';
import Requests from './Components/Requests';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
       <Carousal/>
       <Requests/>
      </header>
    </div>
  );
}

export default App;
