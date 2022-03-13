import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div>
      <div className="logo-container">
        <Typography.Title level={2} style={{ margin: 0, textAlign: "center" }}>
          <Link to="/">CryptoDesk</Link>
        </Typography.Title>
      </div>

      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
