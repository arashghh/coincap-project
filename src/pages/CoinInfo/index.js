import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CoinContext from "../../context/CoinContext";
import "./CoinInfo.scss";

export default function CoinInfo() {
  const coinsData = useContext(CoinContext);
  const [selectedCoin, setSelectedCoin] = useState();

  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { search } = useLocation();

  useEffect(() => {
    setSelectedCoin(search.substring(1).toLowerCase());
  }, []);

  const findedCoin = coinsData.filter((item) => {
    if (item.symbol === selectedCoin?.toUpperCase()) {
      return item;
    }
  });

  const coinImageUrl = `https://assets.coincap.io/assets/icons/${selectedCoin}@2x.png`;

  return (
    <div>
      <div className='cInfo-container'>
        <div className='cInfo-detail'>
          <img src={coinImageUrl} alt={selectedCoin} className='cInfo-img' />
          <div>
            <h1>
              {findedCoin[0]?.name} ({selectedCoin?.toUpperCase()})
            </h1>
            <h4>
              {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
            </h4>
          </div>
        </div>
        <div>
          <h2>
            Supply: ${(parseFloat(findedCoin[0]?.supply) / 1000000).toFixed(2)}m{" "}
            {findedCoin[0]?.symbol}
          </h2>
          <h2>
            Market Cap: $
            {(parseFloat(findedCoin[0]?.marketCapUsd) / 1000000000).toFixed(2)}b
          </h2>
        </div>
        <div>
          <h2>
            Volume(24Hr): $
            {(parseFloat(findedCoin[0]?.volumeUsd24Hr) / 1000000000).toFixed(2)}
            b
          </h2>
          <h2>
            Change(24Hr): $
            {parseFloat(findedCoin[0]?.changePercent24Hr).toFixed(2)}%
          </h2>
        </div>
      </div>
    </div>
  );
}
