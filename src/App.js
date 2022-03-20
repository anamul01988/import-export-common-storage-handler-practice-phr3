import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import Cosmetics1 from './components/cosmetics1/Cosmetics1';

function App() {
  return (
    <div className="App">
        <Cosmetics/>
        <Shoes/>
        <Cosmetics1/>
    </div>
  );
}

export default App;
