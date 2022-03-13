import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loading from "./Loading";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();
  debugger;
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loading />;

  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row style={{ textAlign: "center" }} align="center">
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
          />
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
