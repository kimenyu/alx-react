import React from 'react';
import {getFullYear, getFooterCopy} from '../utils.js';
import './Footer.css';

const Footer = () => {
    return ( 
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
        </div>
     );
}
 
export default Footer;