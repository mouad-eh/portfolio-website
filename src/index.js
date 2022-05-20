import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Writings from './Writings';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <About/>
  <Skills/>
  <Projects/>
  {/* <Writings/> */}
  <Footer/>
  </>
)
