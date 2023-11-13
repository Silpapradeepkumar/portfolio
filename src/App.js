import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Front from './Front';
import ScrollToTop from './ScrollToTop';
import Education from './education/Education';


function App() {
  return (
    <div className="container bgimg">
      <div>
        {/* <Front/> */}
        <Front/>
        <ScrollToTop />
        
        <Outlet/>
      </div>
    </div>
    
  );
}

export default App;
