import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer.js';
import Introduction from './Introduction';

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <Introduction />
            <Footer />
        </div>
    );
  }
}

export default App;
