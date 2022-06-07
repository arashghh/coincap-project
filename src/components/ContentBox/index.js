import React from "react";
import "./ContentBox.scss";

export default function ContentBox() {
  return (
    <div className='content'>
      <div className='content-box'>
        <div className='content-box-item'>
          <div className='data-box'>
            <div className='label'>MARKET CAP</div>
            <div className='value'>$1.69T</div>
          </div>
        </div>
        <div className='content-box-item'>
          <div className='data-box'>
            <div className='label'>EXCHANGE VOL</div>
            <div className='value'>$70.93B</div>
          </div>
        </div>
        <div className='content-box-item'>
          <div className='data-box'>
            <div className='label'>ASSETS</div>
            <div className='value'>2,295</div>
          </div>
        </div>
        <div className='content-box-item'>
          <div className='data-box'>
            <div className='label'>EXCHANGES</div>
            <div className='value'>73</div>
          </div>
        </div>
        <div className='content-box-item'>
          <div className='data-box'>
            <div className='label'>MARKETS</div>
            <div className='value'>15,117</div>
          </div>
        </div>
        <div className='content-box-item'>
          <div className='data-box'>
            <div className='label'>BTC DOM INDEX</div>
            <div className='value'>35.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255)
