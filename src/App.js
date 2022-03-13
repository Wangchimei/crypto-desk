import { Layout, Typography, Space } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Home,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const { Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Navbar />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies />}
                  />
                  <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </Layout>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Typography.Title level={5} style={{ textAlign: "center" }}>
              CryptoDesk
              <br /> All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
