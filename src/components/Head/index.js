import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import "./Head.scss";

export default function Head() {
  const [keyword, setKeyword] = useState("");
  const [searchBoxInput, setSearchBoxInput] = useState(true);

  const navigate = useNavigate();

  function searchSubmit(e) {
    e.preventDefault();
    navigate(`/search?keyword=${keyword}`);
    console.log("Search keyword: ", keyword);
    localStorage.setItem("searchKeyword", keyword);
    setSearchBoxInput(true);
    setKeyword("");
  }

  function searchOnChange(e) {
    setKeyword(e.target.value);
  }

  function searchBoxInputVisibility() {
    if (searchBoxInput) {
      setSearchBoxInput(false);
    } else {
      setSearchBoxInput(true);
    }
  }

  return (
    <div className='header'>
      {/* Menu with links */}
      <ul className='menu'>
        <li>
          <Link to='/'>Coins</Link>
        </li>
        <li>
          <Link to='/exchanges'>Exchanges</Link>
        </li>
        <li>
          <Link to='/swap'>Swap</Link>
        </li>
      </ul>

      {/* Header Logo */}
      <Link to='/' className='logo'>
        <img src='https://coincap.io/static/logos/black.svg' alt='logo' />
      </Link>

      {/* search box and setting and connect wallet button */}
      <div className='menu-options'>
        <div className='search-box'>
          <form action='#' className='search-box-form' onSubmit={searchSubmit}>
            <input
              type='text'
              className='search-box-form-input'
              name='search'
              id='searchInput'
              placeholder='Search...'
              value={keyword}
              onChange={searchOnChange}
              autoComplete={"off"}
              style={
                searchBoxInput
                  ? { display: "none" }
                  : { display: "block", border: "solid 2px black" }
              }
            />
            <span
              className='search-box-form-input-btn'
              onClick={searchBoxInputVisibility}
            >
              <SearchOutlined />
            </span>
          </form>
        </div>

        <Link to='/' className='header-item'>
          <SettingOutlined />
        </Link>
        <Button
          type='primary'
          shape='round'
          className='wallet-btn'
          size='large'
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}
