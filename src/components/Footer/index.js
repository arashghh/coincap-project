import React from "react";
import { Link } from "react-router-dom";
import { TwitterOutlined, FacebookFilled } from "@ant-design/icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer-box'>
      <div className='footer-box-content'>
        <div className='column'>
          <h3 className='column-head'>COINCAP.IO</h3>
          <div>
            <ul className='column-list'>
              <li className='column-list-item'>
                <Link to='/'>Methodology</Link>
              </li>
              <li className='column-list-item'>
                <Link to='/'>Support</Link>
              </li>
              <li className='column-list-item'>
                <Link to='/'>Our API</Link>
              </li>
              <li className='column-list-item'>
                <Link to='/'>Rate Comparison</Link>
              </li>
              <li className='column-list-item'>
                <Link to='/'>Careers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='column'>
          <h3 className='column-head'>LEGALS</h3>
          <div>
            <ul className='column-list'>
              <li className='column-list-item'>
                <Link to='/'>Terms Of Service</Link>
              </li>
              <li className='column-list-item'>
                <Link to='/'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <br />
          <h3 className='column-head'>DISCLAIMER</h3>
          <p>
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </p>
        </div>
        <div className='column'>
          <h3 className='column-head'>FOLLOW US</h3>
          <div>
            <Link to='/' className='column-followus-logo'>
              <TwitterOutlined />
            </Link>
            <Link to='/' className='column-followus-logo'>
              <FacebookFilled />
            </Link>
          </div>
        </div>
        <div className='column'>
          <h3 className='column-head'>COINCAP APP AVAILABLE ON</h3>
          <img
            src='https://coincap.io/static/images/stores/google_play.svg'
            alt='link-to-GooglePlay'
            className='column-app-logo'
          />
          <img
            src='https://coincap.io/static/images/stores/apple_store.svg'
            alt='link-to-AppStore'
            className='column-app-logo'
          />
        </div>
      </div>
    </div>
  );
}
