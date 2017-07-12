import React, { Component } from 'react';
import {load} from './myJQueryFile.js';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {

  componentDidMount() {
    load();
  }

  render() {
    return (
      <div>
        <div className='wrapper'>
            <div className='branch2'></div>
            <div className='branch3'></div>
            <div className='branch4'></div>
            <div className='bunny'></div> 
            <div className='rose1'></div>
        </div>
        <div className='mainPic'>
            <div className='overlayMainPic'>
              <h2>Welcome</h2>
            </div>
        </div>
        <div className='bar'>

        </div>
        <div className='secondPic'>

        </div>
        <div className='thirdPic'>

        </div>
        <div className='bar'>

        </div>
        <div className='forthPic'>

        </div>
        <div className='bar'>

        </div>
      </div>
    )
  }
}

export default App;
