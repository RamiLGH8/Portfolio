import './App.css';
import React from 'react';
import { Home } from './components/Home';
import NavigationBar from './components/Navigation-Bar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
