import React, { useContext } from "react";
import { Table } from "antd";
import CoinContext from "../../context/CoinContext";
<<<<<<< HEAD
import "../../Table.scss";
=======
>>>>>>> cc526fab053c56f02a14080684d2f7fb91c6b80d

export default function CoinTabel() {
  let coinsData = useContext(CoinContext);

  if (coinsData !== undefined) {
    coinsData = coinsData.data.data;
  }

  //--------------------------------------------------//
<<<<<<< HEAD
  // data that we call in table

=======

  // data that we call in table
>>>>>>> cc526fab053c56f02a14080684d2f7fb91c6b80d
  const data = coinsData?.map(myfunction);

  function myfunction(coin) {
    const finalObject = {
      key: coin.rank, // Coin's rank

      name: coin.name, // Coin's name

      symbol: coin.symbol, // Coin's symbol

      price: `$${parseFloat(coin.priceUsd).toFixed(2)}`, // Coin's price

      marketcap: `$${(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(2)}b`, // Coin's marketcap

      vwap: `$${parseFloat(coin.vwap24Hr).toFixed(2)}`, // Coin's vwap in last 24h

      supply: `${(parseFloat(coin.supply) / 1000000).toFixed(2)}m`, // Coin's supply

      volume: `$${(parseFloat(coin.volumeUsd24Hr) / 1000000000).toFixed(2)}b`,
      // Coin's volume in last 24h

      change: `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`, // Coin's change in last 24h

      symbolUrl: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
      // Coin's symbol url address

      changeCondition:
        parseFloat(coin.changePercent24Hr) > 0 ? "gColor" : "rColor",
<<<<<<< HEAD
      // if coin's change be positive, it will be gColor(means green color) and ...
=======
>>>>>>> cc526fab053c56f02a14080684d2f7fb91c6b80d
    };

    return finalObject;
  }

  //--------------------------------------------------//
<<<<<<< HEAD
  // column's data
  // like the title and width and ...

  const columns = [
    {
      title: "Rank", // what will be appear in table
      dataIndex: "key", // use to get 'key' from data array
      width: 30, // width of the column
      align: "center", // align of the data in column
      sorter: {
        compare: (a, b) => a.key - b.key,
        multiple: 1,
      }, // use to sort column's data
=======

  // columns data like the title and width and etc
  const columns = [
    {
      title: "Rank",
      dataIndex: "key",
      width: 30,
      align: "center",
      sorter: {
        compare: (a, b) => a.key - b.key,
        multiple: 1,
      },
>>>>>>> cc526fab053c56f02a14080684d2f7fb91c6b80d
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 300,
      align: "left",
      symbolUrl: "symbolUrl",
      render: (text, data) => (
        <div className='coin-name-box'>
          <img src={data.symbolUrl} alt={data.symbolUrl} />
          <div className='coin-name'>
            <h2>{data.name}</h2>
            <h3>{data.symbol}</h3>
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 6,
      },
      width: 110,
      align: "center",
    },
    {
      title: "Market Cap",
      dataIndex: "marketcap",
      sorter: {
        compare: (a, b) => a.marketcap - b.marketcap,
        multiple: 5,
      },
      width: 110,
      align: "center",
    },
    {
      title: "VWAP (24Hr)",
      dataIndex: "vwap",
      sorter: {
        compare: (a, b) => a.vwap - b.vwap,
        multiple: 4,
      },
      width: 110,
      align: "center",
    },
    {
      title: "Supply",
      dataIndex: "supply",
      sorter: {
        compare: (a, b) => a.supply - b.supply,
        multiple: 3,
      },
      width: 110,
      align: "center",
    },
    {
      title: "Volume (24Hr)",
      dataIndex: "volume",
      sorter: {
        compare: (a, b) => a.volume - b.volume,
        multiple: 2,
      },
      width: 110,
      align: "center",
    },
    {
      title: "Change (24Hr)",
      dataIndex: "change",
      sorter: {
        compare: (a, b) => a.change - b.change,
        multiple: 1,
      },
      width: 110,
      align: "right",
    },
  ];

  //--------------------------------------------------//

  const onChange = (pagination, filters, sorter, extra) => {
<<<<<<< HEAD
    console.log("params:", pagination, filters, sorter, extra);
  };

  //--------------------------------------------------//

=======
    console.log("params", pagination, filters, sorter, extra);
  };

>>>>>>> cc526fab053c56f02a14080684d2f7fb91c6b80d
  return (
    <div className='tables'>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
}
