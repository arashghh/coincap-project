import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import CoinContext from "./context/CoinContext";
import Head from "./components/Head";
import CoinTabel from "./components/CoinTabel";
import ExchangeTabel from "./components/ExchangeTabel";
import axios from "axios";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import CoinInfo from "./pages/CoinInfo";
import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  const [coinsData, setCoinsData] = useState();
  const [error, setError] = useState(null);

  const getCoinsData = async () => {
    await axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        setCoinsData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log("Error: ", error.message);
      });
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  /////////////////////////////////////////////////////

  const [current, setCurrent] = useState(3);

  const onChange = (current) => {
    setCurrent(current);
  };

  /////////////////////////////////////////////////////

  return (
    <div className='App'>
      <CoinContext.Provider value={coinsData}>
        <Router>
          <Layout>
            <Header>
              <Head />
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<CoinTabel />} />
                <Route path='/exchanges' element={<ExchangeTabel />} />
                <Route path='/search' element={<Search />} />
                <Route path='/assets' element={<CoinInfo />} />
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Router>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
