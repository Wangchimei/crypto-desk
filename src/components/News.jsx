import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loading from "./Loading";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = `http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg`;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const count = simplified ? 6 : 12;

  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    category: newsCategory,
    count,
  });
  const { data } = useGetCryptosQuery();

  if (isFetching) return <Loading />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <div className="search-crypto">
            <Select
              showSearch
              className="select-news"
              placeholder="Select a specific  crypto..."
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              style={{ width: "100%" }}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </div>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={24} md={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <Link target="_blank" to={news.url} rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news.name}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    alt="news"
                    src={
                      news.provider?.[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Text className="provider-name">
                    {news.provider?.[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
