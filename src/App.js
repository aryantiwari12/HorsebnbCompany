import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

import CounterContextprovider from './components/context/CounterContext';
import Home from './components/Home/Home';


function App() {
  return (
    
      <div className="App">
        <Header />
        <Home/>
      </div>
      

  )
}

export default App;
