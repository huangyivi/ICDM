import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider, Button } from "antd";
import axios from "axios";
import "./Contrast.less";
import {
  RollbackOutlined
} from "@ant-design/icons";

const AMap = window.AMap;

class MapDetail extends Component {
  constructor(props) {
    super(props);
    this.createDot = this.createDot.bind(this);
    this.strokeDot = this.strokeDot.bind(this);
    this.getPath = this.getPath.bind(this);
    this.clearMap = this.clearMap.bind(this);
    this.setToFit = this.setToFit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    if (!window.mapData) {
      window.mapData = {
        origin: [],
        dp1: [],
        dp2: [],
        dp3: [],
        dp4: [],
      };
    }
    this.strokeDot();
  }
  state = {
    original_map: null,
    trained_map: null,
    dpstar_map: null,
    mapData: [],
    dataset: "GeoLife",
    size: 50,
    indicator: "dp1",
  };
  componentDidMount() {
    this.setState({
      original_map: new AMap.Map("original_map", {
        zoom: 8,
        center: [116.72577489987015, 40.20045760054238],
        showLabel: false,
        mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
      }),
      trained_map: new AMap.Map("trained_map", {
        zoom: 8,
        center: [116.72577489987015, 40.20045760054238],
        showLabel: false,
        mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
      }),
      dpstar_map: new AMap.Map("dpstar_map", {
        zoom: 8,
        center: [116.72577489987015, 40.20045760054238],
        showLabel: false,
        mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
      }),
      dataset: window.dataset,
      size: window.size,
      indicator: window.indicator,
    });
    // this.strokeDot();
  }
  // 清除地图
  clearMap() {
    this.state.original_map.clearMap();
    this.state.trained_map.clearMap();
  }

  // 从服务器中获取路径
  getPath() {
    this.clearMap();
    let that = this;
    // 长度代表渲染总数
    let promise = new Promise((res, rej) => {
      let resolve = res;
      axios.get("http://10.21.56.118:80/data").then((res) => {
        if (res.status === 200) {
          let data = res.data;
          // 渲染散点图
          window.mapData = data;
          this.strokeDot();
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
    var styleObject = {
      url:
        "https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/icon/point.png", // 图标地址
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
  strokeDot() {
    const { original_map, trained_map,dpstar_map } = this.state;

    this.createDot(original_map, window.mapData.origin);
    this.createDot(trained_map, window.mapData[window.indicator]);
    this.createDot(dpstar_map, window.mapData[window.indicator]);
  }
  // 设置合适的视角
  setToFit() {
    const { original_map, trained_map,dpstar_map } = this.state;
    // original_map.setFitView();
    // original_map.setCenter(original_map.getCenter());
    // original_map.setZoom(8);
    trained_map.setCenter(original_map.getCenter());
    trained_map.setZoom(original_map.getZoom());
    dpstar_map.setZoom(original_map.getZoom());
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
    window[e.target.id] = e.target.value;
  }

  switchMap() {
    const { trained_map } = this.state;
    this.createDot(trained_map, this.state.dp1);
  }

  render() {
    let MyDivider = (props) => {
      if (this.state.indicator === "dp1") {
        return <Divider orientation="left">{props.model}(0.1)</Divider>;
      }
      if (this.state.indicator === "dp2") {
        return <Divider orientation="left">{props.model}(0.5)</Divider>;
      }
      if (this.state.indicator === "dp3") {
        return <Divider orientation="left">{props.model}(1.0)</Divider>;
      }
      if (this.state.indicator === "dp4") {
        return <Divider orientation="left">{props.model}(2.0)</Divider>;
      }
    };
    return (
      <div className="flex-around container">
        <div
          className="flex-around-col option"
          style={{ height: "100%", width: "20%" }}
        >
          <Link to="/DotMap" style={{width:'100%'}}>
          <Button type="primary" block icon={<RollbackOutlined />}>
            Return to last page
          </Button>
          </Link>
          <Divider orientation="left">Option</Divider>
          <div className="flex-between option-item" style={{ width: "80%" }}>
              <div>Select Dataset:</div>
              <select
                value={this.state.dataset}
                id="dataset"
                onChange={this.handleChange}
              >
                <option value="GeoLife">GeoLife</option>
                <option value="Brinkhoff">Brinkhoff</option>
                <option value="GZTaxi">GuangzhouTaxi</option>
              </select>
            </div>
            <div className="flex-between option-item" style={{ width: "80%" }}>
              <div>Select Data Size:</div>
              <select
                value={this.state.size}
                onChange={this.handleChange}
                id="size"
              >
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="300">300</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
              </select>
            </div>
          <div className="flex-between option-item">
            <div>Indicator:</div>
            <select
              value={this.state.indicator}
              onChange={this.handleChange}
              id="indicator"
            >
              <option value="dp1">0.1</option>
              <option value="dp2">0.5</option>
              <option value="dp3">1.0</option>
              <option value="dp4">2.0</option>
            </select>
          </div>
          <div className="flex-between" style={{ width: "80%" }}>
              <Button type="primary" size="large" onClick={this.setToFit}>
                Set To Fitview
              </Button>
              <Button type="primary" size="large" onClick={this.strokeDot}>
                Submit
              </Button>
            </div>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <Divider orientation="left">Origin</Divider>
          <div id="original_map" className="detail-map"></div>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <MyDivider model="DP-STP"/>
          <div id="trained_map" className="detail-map"></div>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <MyDivider model="DP-STAR"/>
          <div id="dpstar_map" className="detail-map"></div>
        </div>
      </div>
    );
  }
}

export default MapDetail;
