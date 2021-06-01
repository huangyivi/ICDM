import React, { Component } from "react";
import axios from "axios";

import "./DotMap.less";
import { Divider, Spin, Button } from "antd";
const AMap = window.AMap;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      map0: null,
      dp1_map: null,
      dp2_map: null,
      dp3_map: null,
      dp4_map: null,
    };
    this.createDot = this.createDot.bind(this);
    this.strokeDot = this.strokeDot.bind(this);
    this.getPath = this.getPath.bind(this);
    this.clearMap = this.clearMap.bind(this);
    this.switchPath = this.switchPath.bind(this);
  }
  // 生成地图
  createMap(id) {
    return new AMap.Map(id, {
      zoom: 11,
      center: [116.72577489987015, 40.20045760054238],
      dragEnable: false,
      showLabel: false,
      mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
    });
  }
  // 清除地图
  clearMap() {
    this.state.map0.clearMap();
    this.state.dp1_map.clearMap();
    this.state.dp2_map.clearMap();
    this.state.dp3_map.clearMap();
    this.state.dp4_map.clearMap();
  }

  // 切换路径
  switchPath() {
    this.setState({
      hasData: false,
    });
    this.getPath();
  }

  componentDidMount() {
    // 生成地图操作
    let p = new Promise((res,rej)=>{
      this.setState({
        map0: this.createMap("originMap"),
        dp1_map: this.createMap("dp1"),
        dp2_map: this.createMap("dp2"),
        dp3_map: this.createMap("dp3"),
        dp4_map: this.createMap("dp4"),
      });
      res('ok');
    })
    p.then((data)=>{
      this.getPath();
    })
  }

  // 从服务器中获取路径
  getPath() {
    this.clearMap();
    // 长度代表渲染总数
    let promise = new Promise((res,rej)=>{
      for (let i = 0; i < 50; i++) {
        axios.get("http://10.21.56.118:8080/data").then((res) => {
          if (res.status === 200) {
            let data = res.data;
              // 渲染散点图
              this.strokeDot(data);
          }
        });
        if(i === 49) {
          res();
        }
      }
    })

    promise.then(data=>{
      this.setState({
        hasData: true
      })
      setTimeout(() => {
        this.setToFit()
      }, 2000);
    })
  }

  // 创建散点图层
  createDot(map, center) {
    let circleMarker = new AMap.CircleMarker({
      center: center,
      radius: 1, //3D视图下，CircleMarker半径不要超过64px
      fillColor: "blue",
      fillOpacity: 0.5,
      zIndex: 10
    });
    circleMarker.setMap(map);
  }

  // 渲染散点图层
  strokeDot(data) {

    let { origin, dp1, dp2, dp3, dp4 } = data;

    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;

    for (let i = 0; i < origin.length; i++) {
      this.createDot(map0, origin[i]);
    }
    for (let i = 0; i < dp1.length; i++) {
      this.createDot(dp1_map, dp1[i]);
    }
    for (let i = 0; i < dp2.length; i++) {
      this.createDot(dp2_map, dp2[i]);
    }
    for (let i = 0; i < dp3.length; i++) {
      this.createDot(dp3_map, dp3[i]);
    }
    for (let i = 0; i < dp4.length; i++) {
      this.createDot(dp4_map, dp4[i]);
    }
  }
  // 设置合适的视角
  setToFit() {
    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;
    map0.setFitView();
    map0.setCenter(map0.getCenter());
    map0.setZoom(8);
    dp1_map.setCenter(map0.getCenter());
    dp1_map.setZoom(8);
    dp2_map.setCenter(map0.getCenter());
    dp2_map.setZoom(8);
    dp3_map.setCenter(map0.getCenter());
    dp3_map.setZoom(8);
    dp4_map.setCenter(map0.getCenter());
    dp4_map.setZoom(8);
  }

  render() {
    let that = this;
    function renderLoading() {
      if (!that.state.hasData) {
        return (
          <div className="loading flex-center">
            <Spin />
          </div>
        );
      }
    }
    return (
      <div className="mapCmp flex-center">
        <div className="map-container flex-around-col origin-map">
          <Button type="primary" size="large" onClick={this.switchPath}>
            Switch Data Randomly
          </Button>

          <Divider orientation="center">Origin</Divider>
          <div id="originMap" style={{ width: "400px", height: "230px" }}></div>
        </div>
        <div className="map-container flex-start-col analyzed-map">
          <Divider orientation="center">QG-DP(0.1)</Divider>
          <div id="dp1" style={{ width: "400px", height: "230px" }}></div>
          <Divider orientation="center">QG-DP(0.5)</Divider>
          <div id="dp2" style={{ width: "400px", height: "230px" }}></div>
        </div>
        <div className="map-container flex-start-col analyzed-map">
          <Divider orientation="center">QG-DP(1.0)</Divider>
          <div id="dp3" style={{ width: "400px", height: "230px" }}></div>
          <Divider orientation="center">QG-DP(2.0)</Divider>
          <div id="dp4" style={{ width: "400px", height: "230px" }}></div>
        </div>
        {renderLoading()}
      </div>
    );
  }
}

export default Map;
