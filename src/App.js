import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { Menu, Layout } from "antd";
import Statistic from "./views/Statistic/Statistic";
import Map from "./views/Map/Map";
import DotMap from "./views/DotMap/DotMap";
import Home from "./views/Home/Home";
import Contrast from "./views/Contrast/Contrast";
import {
  LineChartOutlined,
  BoxPlotOutlined,
  HomeOutlined,
} from "@ant-design/icons";

// less样式
import "./App.less";
import { Footer } from "antd/lib/layout/layout";

const { Header, Content } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  constructor(props){
    super(props);
    window.dataset = "GeoLife";
    window.size = 50;
    window.indicator = 'dp1';
  }
  state = {
    current: "home",
  };
  componentDidMount() {
    this.setState({
      current: this.GetUrlRelativePath(),
    });
  }
  GetUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");

    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start + 3); //stop省略，截取从start开始到结尾的所有字符

    if (relUrl.indexOf("?") !== -1) {
      relUrl = relUrl.split("?")[0];
    }
    return relUrl;
  }

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
            <div className="icdm-logo flex-center">DP-STP</div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="dark"
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="statistic/Geolife" icon={<LineChartOutlined />}>
                <Link to="/statistic/Geolife">Statistic</Link>
              </Menu.Item>
              <Menu.Item key="dotMap" icon={<BoxPlotOutlined />}>
                <Link to="/dotMap">DotMap</Link>
              </Menu.Item>
              <Menu.Item key="contrast" icon={<BoxPlotOutlined />}>
                <Link to="/contrast">Contrast</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content className="view">
            <Route path="/" component={Home} exact></Route>
            <Route path="/statistic" component={Statistic}></Route>
            <Route path="/dotMap" component={DotMap}></Route>
            <Route path="/contrast" component={Contrast}></Route>
          </Content>

          <Footer className="icdm-footer flex-center">
            DP-STP Created By QGStudio
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
