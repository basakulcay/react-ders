import React, { PureComponent } from 'react';
import './ust.css';
//import PropTypes from 'prop-types';

class Ust extends PureComponent {
  render() {
    return (
      <div className="ust">
        <div className="ders">
          <h3>React 1. Ders</h3>
          <ol>
            <li>Creating React App</li>
            <li>MVC : React vs Vue</li>
            <li>React: Components Props</li>
            <li>React: Props</li>
          </ol>
        </div>
        <div className="ders-2">
          <h3>Ogrenilecekler...</h3>
          <ol>
            <li>PureComponent</li>
            <li>Router</li>
            <li>State</li>
          </ol>
        </div>

       
      </div>
    );
  }
}

//Ust.propTypes = {};

export default Ust;
