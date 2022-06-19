import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import CoinContext from "./context/CoinContext";
import Head from "./components/Head";
import ContentBox from "./components/ContentBox";
import CoinTabel from "./components/CoinTabel";
import ExchangeTabel from "./components/ExchangeTabel";
import axios from "axios";
import Footer from "./components/Footer";

const { Header, Sider, Content } = Layout;

function App() {
  const [coinsData, setCoinsData] = useState();

  useEffect(() => {
    axios.get("https://api.coincap.io/v2/assets").then((response) => {
      setCoinsData(response);
    });
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
              <ContentBox />
              <Routes>
                <Route path='/' element={<CoinTabel />} />
                <Route path='/exchanges' element={<ExchangeTabel />} />
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
