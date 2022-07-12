import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import CoinContext from "../../context/CoinContext";
import { Button } from "antd";
import "./Search.scss";

export default function Search() {
  const { search } = useLocation();
  const [keyword, setKeyword] = useState("");
  // const [searchResult, setSearchResult] = useState();
  const coinsData = useContext(CoinContext);

  useEffect(() => {
    const searchKeyword = localStorage.getItem("searchKeyword");
    setKeyword(searchKeyword);
  }, [search]);

  const resultSearch = coinsData.data.data.filter((item) => {
    if (item.id === keyword) {
      return item;
    } else if (item.symbol === keyword.toUpperCase()) {
      return item;
    }
  });

  console.log("keyword: ", resultSearch);

  return (
    <div>
      <div className='search-container'>
        <div className='search-coin'>
          <div className='search-flag'>
            <h2>{resultSearch[0]?.rank}</h2>
            <h5>Rank</h5>
          </div>
          <div className='search-coin-name'>
            <div>
              <h1>
                {resultSearch[0]?.name} ({resultSearch[0]?.symbol})
              </h1>
            </div>
            <div>
              <h2>${parseFloat(resultSearch[0]?.priceUsd).toFixed(2)}</h2>
            </div>
          </div>
        </div>
        <div className='search-coin-detail'>
          <div>
            <h3>Market Cap</h3>
            <h4>
              $
              {(parseFloat(resultSearch[0]?.marketCapUsd) / 1000000000).toFixed(
                2
              )}
              b
            </h4>
            <Button
              type='primary'
              shape='round'
              className='search-page-btn'
              size='large'
            >
              Website
            </Button>
          </div>
          <div>
            <h3>Volume (24Hr)</h3>
            <h4>
              $
              {(
                parseFloat(resultSearch[0]?.volumeUsd24Hr) / 1000000000
              ).toFixed(2)}
              b
            </h4>
            <Button
              type='primary'
              shape='round'
              className='search-page-btn'
              size='large'
            >
              Explorer
            </Button>
          </div>
          <div>
            <h3>Supply</h3>
            <h4>
              {(parseFloat(resultSearch[0]?.supply) / 1000000).toFixed(2)}m{" "}
              {resultSearch[0]?.symbol}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

// {resultSearch[0]?.id}
