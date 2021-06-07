import React, { Component } from "react";
import "./Statistic.less";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import LineChart from "../../components/LineChart/LineChart";
// import DotChart from "../../components/DotChart/DotChart";
// import BarChart from '../../components/BarChart/BarChart';
import {
  // BarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";




// 数据

import GeoLife from "../../assets/data/indicators/GeoLife";
import Brinkhoff from "../../assets/data/indicators/Brinkhoff";
import gz_30 from "../../assets/data/indicators/gz_30";
import gz_60 from "../../assets/data/indicators/gz_60";


const { Sider, Content } = Layout;
// const { SubMenu } = Menu;

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
              {/* <SubMenu
                key="line"
                icon={<LineChartOutlined />}
                title="LineChart"
              > */}
                <Menu.Item key="line1" icon={<LineChartOutlined />}>
                  <Link to="/statistic/Geolife">Geolife</Link>
                </Menu.Item>
                <Menu.Item key="line2" icon={<LineChartOutlined />}>
                  <Link to="/statistic/Brinkhoff">Brinkhoff</Link>
                </Menu.Item>
                <Menu.Item key="line3" icon={<LineChartOutlined />}>
                  <Link to="/statistic/GuangZhouTaxi_30s">GuangZhouTaxi_30s</Link>
                </Menu.Item>
                <Menu.Item key="line4" icon={<LineChartOutlined />}>
                  <Link to="/statistic/GuangZhouTaxi_60s">GuangZhouTaxi_60s</Link>
                </Menu.Item>
                {/* <Menu.Item key="line2">
                  <Link to="/statistic/Brinkhoff">Brinkhoff</Link>
                </Menu.Item>
                <Menu.Item key="line3">
                  <Link to="/statistic/GuangzhouTaxi">GuangzhouTaxi</Link>
                </Menu.Item> */}
              {/* </SubMenu> */}
              {/* <SubMenu key="bar" icon={<BarChartOutlined />} title="BarChart">
              <Menu.Item key="bar1">
                  <Link to="/statistic/barChart1">BarChart1</Link>
                </Menu.Item>
                <Menu.Item key="bar2">option2</Menu.Item>
                <Menu.Item key="bar3">option3</Menu.Item>
                <Menu.Item key="bar4">option4</Menu.Item>
              </SubMenu> */}
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
                <LineChart data={GeoLife} title="GeoLife"></LineChart>
              )
            }}></Route>
            <Route path="/statistic/Brinkhoff" render={()=>{
              
              return (
                <LineChart data={Brinkhoff} title="Brinkhoff"></LineChart>
              )
            }}></Route>
            <Route path="/statistic/GuangZhouTaxi_30s" render={()=>{
              
              return (
                <LineChart data={gz_30} title="GuangZhouTaxi_30s"></LineChart>
              )
            }}></Route>
            <Route path="/statistic/GuangZhouTaxi_60s" render={()=>{
              
              return (
                <LineChart data={gz_60} title="GuangZhouTaxi_60s"></LineChart>
              )
            }}></Route>
            {/* <Route path="/statistic/dotChart1" component={DotChart}></Route>
            <Route path="/statistic/barChart1" component={BarChart}></Route> */}
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default Statistic;
