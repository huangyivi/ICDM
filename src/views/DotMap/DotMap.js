import React, { Component } from "react";
import axios from "axios";

import "./DotMap.less";
import { Divider, Spin, Button, Menu, Dropdown } from "antd";
const AMap = window.AMap;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: window.dataset,
      size: window.size,
      hasData: false,
      map0: null,
      dp1_map: null,
      dp2_map: null,
      dp3_map: null,
      dp4_map: null,
      origin: [],
      dp1: [],
      dp2: [],
      dp3: [],
      dp4: [],
    };
    this.createDot = this.createDot.bind(this);
    this.strokeDot = this.strokeDot.bind(this);
    this.getPath = this.getPath.bind(this);
    this.clearMap = this.clearMap.bind(this);
    // this.switchPath = this.switchPath.bind(this);
    this.setToFit = this.setToFit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // 生成地图
  createMap(id) {
    return new AMap.Map(id, {
      zoom: 11,
      center: [116.72577489987015, 40.20045760054238],
      // dragEnable: false,
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
  // switchPath() {
  //   this.setState({
  //     hasData: false,
  //   });
  //   this.getPath();
  // }

  componentDidMount() {
    // 生成地图操作
    let p = new Promise((res, rej) => {
      this.setState({
        map0: this.createMap("originMap"),
        dp1_map: this.createMap("dp1"),
        dp2_map: this.createMap("dp2"),
        dp3_map: this.createMap("dp3"),
        dp4_map: this.createMap("dp4"),
      });
      res("ok");
    });
    p.then((data) => {
      this.getPath();
    });
  }

  // 从服务器中获取路径
  getPath() {
    this.clearMap();
    // 长度代表渲染总数
    let that = this;
    let promise = new Promise((res, rej) => {
        let resolve = res;
        axios.get("http://10.21.56.118:80/data/" + that.state.size).then((res) => {
          if (res.status === 200) {
            let data = res.data;
            // 渲染散点图
            this.strokeDot(data);
            window.mapData=data;
            resolve();
          }
        });
    });

    promise.then((data) => {
      this.setState({
        hasData: true,
      });
      // setTimeout(() => {
      //   this.setToFit();
      // }, 2000);
    });
  }

  // 创建散点图层
  createDot(map, data) {
    // let circleMarker = new AMap.CircleMarker({
    //   center: center,
    //   radius: 1, //3D视图下，CircleMarker半径不要超过64px
    //   fillColor: "blue",
    //   fillOpacity: 0.5,
    //   zIndex: 10
    // });
    // circleMarker.setMap(map);
    var styleObject = {
      url: "https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/icon/point.png", // 图标地址
      size: new AMap.Size(11, 11), // 图标大小
      anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
    };

    let mass = new AMap.MassMarks(null, {
      zooms: [0, 19], // 在指定地图缩放级别范围内展示海量点图层
      style: styleObject, // 设置样式对象
    });
    mass.setData(data);
    mass.setMap(map);
  }

  // 渲染散点图层
  strokeDot(data) {
    let { origin, dp1, dp2, dp3, dp4 } = data;

    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;

    let temp0 = origin.concat(this.state.origin);
    let temp1 = dp1.concat(this.state.dp1);
    let temp2 = dp2.concat(this.state.dp2);
    let temp3 = dp3.concat(this.state.dp3);
    let temp4 = dp4.concat(this.state.dp4);
    this.setState({
      origin: temp0,
      dp1: temp1,
      dp2: temp2,
      dp3: temp3,
      dp4: temp4
    });

    this.createDot(map0,this.state.origin);
    this.createDot(dp1_map,this.state.dp1);
    this.createDot(dp2_map,this.state.dp2);
    this.createDot(dp3_map,this.state.dp3);
    this.createDot(dp4_map,this.state.dp4);
  }
  // 设置合适的视角
  setToFit() {
    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;
    map0.setFitView();
    // map0.setCenter(map0.getCenter());
    // map0.setZoom(8);
    dp1_map.setCenter(map0.getCenter());
    dp1_map.setZoom(map0.getZoom());
    dp2_map.setCenter(map0.getCenter());
    dp2_map.setZoom(map0.getZoom());
    dp3_map.setCenter(map0.getCenter());
    dp3_map.setZoom(map0.getZoom());
    dp4_map.setCenter(map0.getCenter());
    dp4_map.setZoom(map0.getZoom());
  }

  handleChange(e){
    this.setState({
      [e.target.id] : e.target.value
    })

    window[e.target.id] = e.target.value;
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
          <Divider orientation="center">Option</Divider>
          <div
            className="option flex-around-col"
            style={{ width: "80%", height: "50%" }}
          >
            <div className="flex-between" style={{ width: "80%" }}>
              <div>Select Dataset:</div>
              <select value={window.dataset} id="dataset" onChange={this.handleChange}>
                <option value="GeoLife">GeoLife</option>
                <option value="Brinkoff">Brinkoff</option>
                <option value="GZTaxi">GuangzhouTaxi</option>
              </select>
            </div>
            <div className="flex-between" style={{ width: "80%" }}>
              <div>Select Data Size:</div>
              <select value={this.state.size} onChange={this.handleChange} id="size">
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="300">300</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
              </select>
            </div>
            <div className="flex-between" style={{ width: "80%" }}>
              <Button type="primary" size="large" onClick={this.setToFit}>Set To Fitview</Button>
              <Button type="primary" size="large" onClick={this.getPath}>Submit</Button>
            </div>
          </div>
          <Divider orientation="center">Origin</Divider>
          <div id="originMap" style={{ width: "400px", height: "50%" }}></div>
        </div>
        <div className="map-container flex-start-col analyzed-map">
          <Divider orientation="center">DP-STP(0.1)</Divider>
          <div id="dp1" style={{ width: "400px", height: "50%" }}></div>
          <Divider orientation="center">DP-STP(1.0)</Divider>
          <div id="dp3" style={{ width: "400px", height: "50%" }}></div>
        </div>
        <div className="map-container flex-start-col analyzed-map">
          <Divider orientation="center">DP-STP(0.5)</Divider>
          <div id="dp2" style={{ width: "400px", height: "50%" }}></div>
          <Divider orientation="center">DP-STP(2.0)</Divider>
          <div id="dp4" style={{ width: "400px", height: "50%" }}></div>
        </div>
        {renderLoading()}
      </div>
    );
  }
}

export default Map;
