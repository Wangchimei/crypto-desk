import { Typography, Row, Col, Statistic } from "antd";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row style={{ textAlign: "center" }} align="center">
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic title="Total Cryptocurrencies" value={""} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic title="Total Exchanges" value={""} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic title="Total Market Cap" value={""} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic title="Total 24h Volume" value={""} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic title="Total Market" value={""} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default Home;
