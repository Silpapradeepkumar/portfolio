import React from 'react'
import './Homepage.css'
import spk1 from './spk1.png';


export default function About() {
  return (
    <div>
      
      <div className="row maindiv">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about">
          
              <h1>About Me</h1>
              <p>Iam a skilled fullstack developer specialized in MERN. I would like to work in an organization that will give me a platform to utilize my technical skills and enrich my knowledge. Iam highly proficient in C,Java,Html,CSS and Javascript.</p>
            </div>
            
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div>
              <img src={spk1} className='im'></img>
            </div>
        </div>
      </div>
    </div>
  )
}
