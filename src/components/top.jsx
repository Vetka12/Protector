import './styles/top.css';
import React from "react";
import logo from '../images/5.png';
import search from '../images/lupa12.png';
import inf from '../images/I.png';
import MyInput from './myinput.jsx';

const Top = () => {
    return (
      <div className='hat'>
        <div className='top-top'>
          <div className='top'>
            <div className='logo'>
              <div className='logo-img'>
              <img src={logo}></img>
              </div>
              Protector
            </div>
          </div>
        </div>
        <div className='mid-top'>
          <div className='mid'>
            <div className='main'>
              Головна сторінка
            </div>
            <div className='sec'>
              <div className='sec-img'>
              <img src={inf}></img>
              </div>
              Про безпеку
            </div>
          </div>
        </div>
        
      </div>
  );
}
export default Top;