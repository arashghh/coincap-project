import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import UserContext from "./context/UserContext";
import Head from "./components/Head";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Mario",
  });

  const [current, setCurrent] = useState(3);

  const onChange = (current) => {
    console.log(current);
    setCurrent(current);
  };

  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <Router>
          <Layout>
            <Header>
              <Head />
            </Header>
          </Layout>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

{
  /* <Content>
              <Routes>
                <Route path='/' />
                
                <Route path='/exchange' />
              </Routes>
            </Content>
            <Footer>Footer</Footer> */
}
