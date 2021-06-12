import React, { Component } from "react";
import axios from "axios";

import "./DotMap.less";
import { Divider, Button, message,Popover } from "antd";
const AMap = window.AMap;

const options = [
  {
    center: [116.4065705680847, 39.93982986393404],
    zoom: 8,
  },
  {
    center: [113.48181156322363, 23.009539612697615],
    zoom: 8,
  },
  {
    center: [15.822676, 31.539922],
    zoom: 3,
  },
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // model: 0,
      model: "DPSTP",
      dataset: "GeoLife",
      size: "50",
      hasData: true,
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
      mass: [],
      isRequesting: false,
    };
    this.createDot = this.createDot.bind(this);
    this.strokeDot = this.strokeDot.bind(this);
    this.getPath = this.getPath.bind(this);
    this.clearMap = this.clearMap.bind(this);
    this.setToFit = this.setToFit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // 生成地图
  createMap(id) {
    if (id === "originMap") {
      return new AMap.Map(id, {
        zoom: 8,
        center: [116.72577489987015, 40.20045760054238],
        showLabel: false,
        mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
      });
    }
    return new AMap.Map(id, {
      zoom: 8,
      center: [116.72577489987015, 40.20045760054238],
      dragEnable: false,
      showLabel: false,
      mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
    });
  }
  // 清除地图
  clearMap() {
    for (let mass of this.state.mass) {
      mass.clear();
    }
    this.setState({
      mass: [],
    });
  }

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
    this.setViewForData();
    if (this.state.isRequesting) {
      message.warning("A request is running ! Please wait a moment");
    } else {
      //设置节流
      this.setState({
        isRequesting: true,
      });
      const loading1 = message.loading("Loading...", 0);
      const loading2 = message.loading(
        "Due to server restrictions, data requests may take some time",
        0
      );
      let url = `https://qg-recruit-video.oss-accelerate.aliyuncs.com/${this.state.model}/${this.state.dataset}/${this.state.size}.js`;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            isRequesting: false,
          });
          setTimeout(loading1, 0);
          setTimeout(loading2, 0);
          if (res.status === 200) {
            let data = res.data;
            // 渲染散点图
            this.strokeDot(data);
            window.mapData = data;
            message.success({
              content: "Data Loaded"
            });
          } else {
            message.error({
              content: "Network Error!",
            });
          }
        })
        .catch((err) => {
          this.setState({
            isRequesting: false,
          });
          setTimeout(loading1, 0);
          setTimeout(loading2, 0);
          message.error({
            content: "Network Error!",
          });
        });
    }

    /**
     * @params
     * dataset: 
     *          Geolife 0
                guangzhou30seconds 1
                guangzhou60seconds 2
                brinkhoff 3
     * algorithm:
                dpstp 0
                dpstar 1
     * size: 50 100 300 500 1000 5000 10000
     * 
     */

    // let data = {
    //   dataset: parseInt(this.state.dataset),
    //   algorithm: parseInt(this.state.model),
    //   size: parseInt(this.state.size),
    // };

    // axios
    //   .post("https://common.qgailab.com/data", data, {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       let data = res.data;
    //       // 渲染散点图
    //       this.strokeDot(data);
    //       window.mapData = data;
    //       resolve();
    //     }
    //   });
  }

  // 创建散点图层
  createDot(map, data) {
    var styleObject = {
      url:
        "https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/icon/point.png", // 图标地址
      size: new AMap.Size(5, 5), // 图标大小
      anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
    };

    let mass = new AMap.MassMarks(null, {
      zooms: [0, 19], // 在指定地图缩放级别范围内展示海量点图层
      style: styleObject, // 设置样式对象
      alwaysRender: false,
    });
    mass.setData(data);
    mass.setMap(map);
    let mass_arr = this.state.mass;
    mass_arr.push(mass);
    this.setState({
      mass: mass_arr,
    });
  }

  // 渲染散点图层
  strokeDot(data) {
    let { origin, dp1, dp2, dp3, dp4 } = data;
    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;

    this.createDot(map0, origin);
    this.createDot(dp1_map, dp1);
    this.createDot(dp2_map, dp2);
    this.createDot(dp3_map, dp3);
    this.createDot(dp4_map, dp4);
  }
  // 设置合适的视角
  setToFit() {
    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;
    map0.setFitView();
    dp1_map.setCenter(map0.getCenter());
    dp1_map.setZoom(map0.getZoom());
    dp2_map.setCenter(map0.getCenter());
    dp2_map.setZoom(map0.getZoom());
    dp3_map.setCenter(map0.getCenter());
    dp3_map.setZoom(map0.getZoom());
    dp4_map.setCenter(map0.getCenter());
    dp4_map.setZoom(map0.getZoom());
  }

  // 根据数据集设置缩放等级和center
  setViewForData() {
    const { map0, dp1_map, dp2_map, dp3_map, dp4_map } = this.state;
    if (this.state.dataset == "GeoLife") {
      map0.setCenter(options[0].center);
      dp1_map.setCenter(options[0].center);
      dp2_map.setCenter(options[0].center);
      dp3_map.setCenter(options[0].center);
      dp4_map.setCenter(options[0].center);
      map0.setZoom(options[0].zoom);
      dp1_map.setZoom(options[0].zoom);
      dp2_map.setZoom(options[0].zoom);
      dp3_map.setZoom(options[0].zoom);
      dp4_map.setZoom(options[0].zoom);
    } else if (this.state.dataset == "Brinkhoff") {
      map0.setCenter(options[2].center);
      dp1_map.setCenter(options[2].center);
      dp2_map.setCenter(options[2].center);
      dp3_map.setCenter(options[2].center);
      dp4_map.setCenter(options[2].center);
      map0.setZoom(options[2].zoom);
      dp1_map.setZoom(options[2].zoom);
      dp2_map.setZoom(options[2].zoom);
      dp3_map.setZoom(options[2].zoom);
      dp4_map.setZoom(options[2].zoom);
    } else {
      map0.setCenter(options[1].center);
      dp1_map.setCenter(options[1].center);
      dp2_map.setCenter(options[1].center);
      dp3_map.setCenter(options[1].center);
      dp4_map.setCenter(options[1].center);
      map0.setZoom(options[1].zoom);
      dp1_map.setZoom(options[1].zoom);
      dp2_map.setZoom(options[1].zoom);
      dp3_map.setZoom(options[1].zoom);
      dp4_map.setZoom(options[1].zoom);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const content = (
      <div>
        <p>Click this button to adjust other maps to the same zoom as the Original map</p>
      </div>
    )
    return (
      <div className="mapCmp flex-around-wrap">
        <div className="map-container flex-start-col">
          <Divider orientation="center">Option</Divider>
          <div className="option maps flex-around-col">
            <div className="flex-between" style={{ width: "80%" }}>
              <div>Model:</div>
              <select
                value={this.state.model}
                id="model"
                onChange={this.handleChange}
              >
                <option value="DPSTP">DP-STP</option>
                <option value="DPSTAR">DP-Star</option>
                {/* <option value="0">DP-STP</option>
                <option value="1">DP-STAR</option> */}
              </select>
            </div>
            <div className="flex-between" style={{ width: "80%" }}>
              <div>Dataset:</div>
              <select
                value={window.dataset}
                id="dataset"
                onChange={this.handleChange}
              >
                <option value="GeoLife">GeoLife</option>
                <option value="GuangZhou30seconds">GZTaxi(~30 seconds)</option>
                <option value="GuangZhou60seconds">GZTaxi(~60 seconds)</option>
                <option value="Brinkhoff">Brinkhoff</option>
              </select>
            </div>
            <div className="flex-between" style={{ width: "80%" }}>
              <div>Data Size:</div>
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
                <option value="3000">5000</option>
                <option value="10000">10000</option>
              </select>
            </div>
            <div className="flex-between" style={{ width: "80%" }}>
            <Popover content={content} title="Tips" placement="bottom">
              <Button type="primary" size="large" onClick={this.setToFit}>
                Set To Fitview
              </Button>
              </Popover>
              <Button type="primary" size="large" onClick={this.getPath}>
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="map-container flex-start-col">
          <Divider orientation="center">
            {this.state.model === "DPSTP" ? "DP-STP" : "DP-Star"}(ε=0.1)
          </Divider>
          <div id="dp1" className="maps"></div>
          {/* <div className="maps">
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/${this.state.model}/${this.state.size}/1.png`}
              alt=""
            />
          </div> */}
        </div>
        <div className="map-container flex-start-col">
          <Divider orientation="center">
            {this.state.model === "DPSTP" ? "DP-STP" : "DP-Star"}(ε=0.5)
          </Divider>
          <div id="dp2" className="maps"></div>
          {/* <div className="maps">
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/${this.state.model}/${this.state.size}/3.png`}
              alt=""
            />
          </div> */}
        </div>
        <div className="map-container flex-start-col">
          <Divider orientation="center">Original</Divider>
          <div id="originMap" className="maps"></div>

          {/* <div className="maps">
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/${this.state.model}/${this.state.size}/0.png`}
              alt=""
            />
          </div> */}
        </div>
        <div className="map-container flex-start-col">
          <Divider orientation="center">
            {this.state.model === "DPSTP" ? "DP-STP" : "DP-Star"}(ε=1.0)
          </Divider>
          <div id="dp3" className="maps"></div>
          {/* <div className="maps">
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/${this.state.model}/${this.state.size}/2.png`}
              alt=""
            />
          </div> */}
        </div>
        <div className="map-container flex-start-col">
          <Divider orientation="center">
            {this.state.model === "DPSTP" ? "DP-STP" : "DP-Star"}(ε=2.0)
          </Divider>
          <div id="dp4" className="maps"></div>
          {/* <div className="maps">
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://qg-recruit-video.oss-cn-guangzhou.aliyuncs.com/${this.state.model}/${this.state.size}/4.png`}
              alt=""
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Map;
