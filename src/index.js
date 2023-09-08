import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
       <Route path='education' element={<Education/>}/>
      <Route path='experience' element={<Experience/>}/>
       <Route path='skills' element={<Skills/>}/>
       <Route path='contact' element={<Contact/>}/>
      <Route path='projects' element={<Projects/>}/>
    
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
