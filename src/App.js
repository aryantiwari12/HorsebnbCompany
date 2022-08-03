import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
<<<<<<< HEAD

import CounterContextprovider from './components/context/CounterContext';
import Home from './components/Home/Home';
=======
import Footer from './components/Footer/Footer';
import CounterContextprovider from './components/context/CounterContext';
import Home from './components/Home/Home';
import ExplorehorseBnB from './components/Home/ExplorehorseBnB';
import Aboutus from './components/Home/Aboutus';
import Shorttermsstalls from './components/Home/Shorttermsstalls';
import Guestaccommodations from './components/Home/Guestaccommodations';
import Monthly from './components/Home/Monthly';
import Horseadventures from './components/Home/Horseadventures';
import Secondheader from './components/header/Secondheader';
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3


function App() {
  return (
<<<<<<< HEAD
    
      <div className="App">
        <Header />
        <Home/>
      </div>
      
=======

    <div className="App">
      {/* <Header /> */}
      <Secondheader/>
      <Home />
      <ExplorehorseBnB />
      <Aboutus />
      <Shorttermsstalls />
      <Guestaccommodations/>
      <Monthly/>
      <Horseadventures/>
      <Footer/>
    </div>

>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3

  )
}

export default App;
