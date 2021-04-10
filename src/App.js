import logo from './logo.svg';
import './App.css';
import Brain from './Intro_Brain.svg'
import Img from './Background.svg'

function App() {
  return (
    <div className="App">
      <div className="animation">
      <img className="brain" src={Brain} />
      <img className="Img" src={Img} />
      </div>
    </div>
  );
}

export default App;
