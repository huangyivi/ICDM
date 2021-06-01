import React, { Component } from "react";
import "./Statistic.less";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import LineChart from "../../components/LineChart/LineChart";
import DotChart from "../../components/DotChart/DotChart";
import BarChart from '../../components/BarChart/BarChart';
import {
  BarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";




// 数据

import GeoLife from "../../assets/data/indicators/GeoLife";


const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class Statistic extends Component {
  render() {
    return (
      <Router>
        <Layout className="icdm-statistic">
          <Sider className="sider">
            <Menu
              mode="vertical"
              defaultSelectedKeys={["line1"]}
              style={{ height: "100%", borderRight: 0 }}
              theme="light"
            >
              <SubMenu
                key="line"
                icon={<LineChartOutlined />}
                title="LineChart"
              >
                <Menu.Item key="line1">
                  <Link to="/statistic/Geolife">Geolife</Link>
                </Menu.Item>
                {/* <Menu.Item key="line2">
                  <Link to="/statistic/Brinkhoff">Brinkhoff</Link>
                </Menu.Item>
                <Menu.Item key="line3">
                  <Link to="/statistic/GuangzhouTaxi">GuangzhouTaxi</Link>
                </Menu.Item> */}
              </SubMenu>
              <SubMenu key="bar" icon={<BarChartOutlined />} title="BarChart">
              <Menu.Item key="bar1">
                  <Link to="/statistic/barChart1">BarChart1</Link>
                </Menu.Item>
                <Menu.Item key="bar2">option2</Menu.Item>
                <Menu.Item key="bar3">option3</Menu.Item>
                <Menu.Item key="bar4">option4</Menu.Item>
              </SubMenu>
              {/* <SubMenu key="dot" icon={<DotChartOutlined />} title="DotChart">
                <Menu.Item key="dot1">
                  <Link to="/statistic/dotChart1">DotChart1</Link>
                </Menu.Item>
                <Menu.Item key="dot2">option2</Menu.Item>
                <Menu.Item key="dot3">option3</Menu.Item>
                <Menu.Item key="dot4">option4</Menu.Item>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Content className="icdm-charts flex-center">
            <Route path="/statistic/GeoLife" render={()=>{
              
              return (
                <LineChart data={GeoLife}></LineChart>
              )
            }}></Route>
            <Route path="/statistic/Brinkhoff" component={LineChart}></Route>
            <Route path="/statistic/GuangzhouTaxi" component={LineChart}></Route>
            <Route path="/statistic/dotChart1" component={DotChart}></Route>
            <Route path="/statistic/barChart1" component={BarChart}></Route>
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default Statistic;
