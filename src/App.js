import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import Home from './views/Home';
import Navbar from './views/Navbar';
import About from './views/About';
import Shop from './views/Shop';
import Contact from './views/Contact';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])
  return (
    <div className="App">
      {
        loading ? <div className="loading">
        <HashLoader color={"#84DB25"} loading={loading} size={50} />
      </div>
        :
          <BrowserRouter>
          <Navbar/>
        
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About />}/>
              <Route path='/shop' element={<Shop />} />
              <Route path='/Contact' element={<Contact/>} />
            </Routes>
          </BrowserRouter>
      } 
     
    </div>
  );
}

export default App;
