import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Homepage from './Homepage';
import Front from './Front';
import Home from './Homepage';
import About from './About';


function App() {
  return (
    
    <div className="container bgimg">
      
      <div>
        {/* <Front/> */}
 <Home/>
 <Outlet/>
    
   </div>
    
   
    </div>
    
  );
}

export default App;
