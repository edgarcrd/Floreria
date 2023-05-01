import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class App extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <div className='brand'>The Rose Boston</div>
          <div className='header'>Log-In Cart</div>
          <div className='menu'>Ocassion About-Us Help</div>
          <div className='footer'>By Maria Angelina Bonilla</div>
          {/* <div className='col3'>Arturo</div> */}
        </div>
      </>
    );
  }
}
export default App;