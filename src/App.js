import logo from './logo.svg';
import './App.css';
import Emotions from './components/Emotions';
import Checkbox from './components/Checkbox';
import ColorPicker from './components/Colorpicker';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">
     <h1>React app</h1>
     <FetchData/>
     {/* <ColorPicker/> */}
     {/* <Checkbox/> */}
     {/* <Emotions/> */}
    </div>
  );
}

export default App;
