import React, { Component } from 'react';
import './App.css';
//import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Services />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;


