import React, { Component } from "react";
import "./Ablation.less";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import LineChart from "../../components/LineChart_ab";
import Introduction from "../../components/Ablation_Intro"
import {
  LineChartOutlined,
} from "@ant-design/icons";


// 数据

import GeoLife from "../../assets/data/ablations/GeoLife";
import Brinkhoff from "../../assets/data/ablations/Brinkhoff";
import gz_30 from "../../assets/data/ablations/gz_30";
// import gz_60 from "../../assets/data/indicators/gz_60";


const { Sider, Content } = Layout;

/**
 * Ablation Analysis
 */
class Ablation extends Component {
  render() {
    return (
      <Router>
        <Layout className="icdm-statistic">
          <Sider className="sider">
            <Menu
              mode="vertical"
              defaultSelectedKeys={["line0"]}
              style={{ height: "100%", borderRight: 0 }}
              theme="light"
            >
                <Menu.Item key="line0" icon={<LineChartOutlined />}>
                  <Link to="/ablation/Introduction">Introduction</Link>
                </Menu.Item>
                <Menu.Item key="line1" icon={<LineChartOutlined />}>
                  <Link to="/ablation/Geolife">Geolife</Link>
                </Menu.Item>
                <Menu.Item key="line2" icon={<LineChartOutlined />}>
                  <Link to="/ablation/Brinkhoff">Brinkhoff</Link>
                </Menu.Item>
                <Menu.Item key="line3" icon={<LineChartOutlined />}>
                  {/* <Link to="/ablation/GuangZhouTaxi_30s">GZTaxi (~30 seconds)</Link> */}
                  <Link to="/ablation/GuangZhouTaxi_30s">GZTaxi</Link>
                </Menu.Item>
            </Menu>
          </Sider>
          <Content className="icdm-charts flex-center">
            <Route path="/ablation/Introduction" component={Introduction}/>
            <Route path="/ablation/GeoLife" render={()=>{
              
              return (
                <LineChart data={GeoLife} title="GeoLife" intro="Geolife is a real-world dataset which contains GPS vehicle trajectories of 182 users over 5 years published by Microsoft. We limit the location range to Beijing, China and filter outliers. The dataset contains 14,650 trajectories."></LineChart>
              )
            }}></Route>
            <Route path="/ablation/Brinkhoff" render={()=>{
              
              return (
                <LineChart data={Brinkhoff} title="Brinkhoff" intro="Brinkhoff is a simulated dataset generated by Brinkhoff's network generator. The Brinkhoff dataset we used contains 50,000 trajectories located in Oldenburg, Germany."></LineChart>
              )
            }}></Route>
            <Route path="/ablation/GuangZhouTaxi_30s" render={()=>{
              
              return (
                <LineChart data={gz_30} title="GZTaxi (~30 seconds)" intro="GZTaxi is a real-world dataset which contains 4 billion GPS trajectories of nearly 50,000 vehicles from Guangzhou, China in two months."></LineChart>
              )
            }}></Route>
            {/* <Route path="/ablation/GuangZhouTaxi_60s" render={()=>{
              
              return (
                <LineChart data={gz_60} title="GZTaxi (~60 seconds)" intro="GZTaxi is a real-world dataset which contains 4 billion GPS trajectories of nearly 50,000 vehicles from Guangzhou, China in two months."></LineChart>
              )
            }}></Route> */}
            {/* <Route path="/ablation/dotChart1" component={DotChart}></Route>
            <Route path="/ablation/barChart1" component={BarChart}></Route> */}
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default Ablation;
