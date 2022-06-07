import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import "./Head.css";

export default function Head() {
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
        <Link to='/' className='header-item'>
          <SearchOutlined />
        </Link>
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
