import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { Menu, Layout } from "antd";
import Statistic from "./views/Statistic/Statistic";
import Map from "./views/Map/Map";
import Home from './views/Home/Home';
import {
  LineChartOutlined,
  BoxPlotOutlined
} from "@ant-design/icons";

// less样式
import "./App.less";
import { Footer } from "antd/lib/layout/layout";

const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    current: "home",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    const { current } = this.state;
    return (
      <Router>
        <Layout className="layout">
          <Header className="icdm-header flex-start">
            <div className="icdm-logo flex-center">QG-DP</div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="dark"
            >
              <Menu.Item key="home" icon={<LineChartOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="statistic" icon={<LineChartOutlined />}>
                <Link to="/statistic/Geolife">Statistic</Link>
              </Menu.Item>
              <Menu.Item key="map" icon={<BoxPlotOutlined />}>
                <Link to="/map">Map</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content className="view">
            <Route path="/" component={Home} exact></Route>
            <Route path="/statistic" component={Statistic}></Route>
            <Route path="/map" component={Map}></Route>
          </Content>

          <Footer className="icdm-footer flex-center">QG-DP Created By QGStudio</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
