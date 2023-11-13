import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './education/Education'
import Experience from './experience/Experience'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
 import Front from './Front';
 import About from './About/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}> </Route>
      <Route path='front' element={<Front/>}/>
       <Route path='education' element={<Education/>}/>
      <Route path='experience' element={<Experience/>}/>
       <Route path='skills' element={<Skills/>}/>
       <Route path='contact' element={<Contact/>}/>
      <Route path='projects' element={<Projects/>}/> 
      <Route path='About' element={<About/>}/>
     
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
