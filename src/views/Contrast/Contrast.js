import React, { Component } from "react";
import { Divider, Button, List, Spin, message } from "antd";
import axios from "axios";
import "./Contrast.less";

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

class MapDetail extends Component {
  constructor(props) {
    super(props);
    this.createDot = this.createDot.bind(this);
    this.strokeDot = this.strokeDot.bind(this);
    this.getPath = this.getPath.bind(this);
    this.clearMap = this.clearMap.bind(this);
    this.setToFit = this.setToFit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setViewForData = this.setViewForData.bind(this);
    this.getIndicator = this.getIndicator.bind(this);
  }
  state = {
    original_map: null,
    trained_map: null,
    dpstar_map: null,
    stpData: [],
    starData: [],
    dataset: 'GeoLife',
    size: 50,
    indicator: "0p1",
    mass: [],
  };
  componentDidMount() {
    let p = new Promise((res,rej)=>{
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
        dataset: 'GeoLife',
        size: 50,
        indicator: "0p1",
      });
      res();
    })
    
    p.then(res=>{
      this.getPath();
    })
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

  // 根据数据集设置缩放等级和center
  setViewForData() {
    const { original_map, trained_map, dpstar_map } = this.state;
    if (this.state.dataset == 'GeoLife') {
      original_map.setCenter(options[0].center);
      trained_map.setCenter(options[0].center);
      dpstar_map.setCenter(options[0].center);
      original_map.setZoom(options[0].zoom);
      trained_map.setZoom(options[0].zoom);
      dpstar_map.setZoom(options[0].zoom);
    } else if (this.state.dataset == 'Brinkhoff') {
      original_map.setCenter(options[2].center);
      trained_map.setCenter(options[2].center);
      dpstar_map.setCenter(options[2].center);
      original_map.setZoom(options[2].zoom);
      trained_map.setZoom(options[2].zoom);
      dpstar_map.setZoom(options[2].zoom);
    } else {
      original_map.setCenter(options[1].center);
      trained_map.setCenter(options[1].center);
      dpstar_map.setCenter(options[1].center);
      original_map.setZoom(options[1].zoom);
      trained_map.setZoom(options[1].zoom);
      dpstar_map.setZoom(options[1].zoom);
    }
  }

  // 获取指标参数
  getIndicator() {
    if (this.state.indicator === "0p1") {
      return 0;
    }
    if (this.state.indicator === "0p5") {
      return 1;
    }
    if (this.state.indicator === "1p0") {
      return 2;
    }
    if (this.state.indicator === "2p0") {
      return 3;
    }
    return 0;
  }

  // 从服务器中获取路径
  getPath() {
    this.clearMap();
    this.setViewForData();
    /**
     * @params
     * dataset: 
     *          Geolife 0
     guangzhou30seconds 1
     guangzhou60seconds 2
     brinkhoff 3
     * indicator:
     0.1 0
     0.5 1
     1.0 2
     2.0 3
     * size: 50 100 300 500 1000 5000 10000
     * 
     */

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
      // let data = {
      //   dataset: parseInt(this.state.dataset),
      //   indicator: this.getIndicator(),
      //   size: parseInt(this.state.size),
      // };
      let url = `https://qg-recruit-video.oss-accelerate.aliyuncs.com/Comparison/${this.state.dataset}/${this.state.indicator}/${this.state.size}.js`;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            isRequesting: false,
          });
          setTimeout(loading1, 1000);
          setTimeout(loading2, 1000);
          if (res.status === 200) {
            let data = res.data;
            // 渲染散点图
            this.setState({
              stpData: data,
            });
            this.strokeDot(data);
            message.success({
              content: "Data Loaded",
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
          setTimeout(loading1, 1000);
          setTimeout(loading2, 1000);
          message.error({
            content: "Network Error!",
          });
        });
    }
  }

  // 创建散点图层
  createDot(map, data) {
    var styleObject = {
      url:
        "https://qg-recruit-video.oss-accelerate.aliyuncs.com/icon/point.png", // 图标地址
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
    const { original_map, trained_map, dpstar_map } = this.state;
    this.createDot(original_map, data.origin);
    this.createDot(trained_map, data.dpstp);
    this.createDot(dpstar_map, data.dpstar);
  }
  // 设置合适的视角
  setToFit() {
    const { original_map, trained_map, dpstar_map } = this.state;
    trained_map.setCenter(original_map.getCenter());
    trained_map.setZoom(original_map.getZoom());
    dpstar_map.setCenter(original_map.getCenter());
    dpstar_map.setZoom(original_map.getZoom());
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const tips = [
      '1.Click the "Set To Fitview" button to adjust other maps to the same zoom as the Original map',
      '2.Click the "Submit" button to update the map after selecting the options',
    ];
    let MyDivider = (props) => {
      if (this.state.indicator === "0p1") {
        return <Divider orientation="left">{props.model}(0.1)</Divider>;
      }
      if (this.state.indicator === "0p5") {
        return <Divider orientation="left">{props.model}(0.5)</Divider>;
      }
      if (this.state.indicator === "1p0") {
        return <Divider orientation="left">{props.model}(1.0)</Divider>;
      }
      if (this.state.indicator === "2p0") {
        return <Divider orientation="left">{props.model}(2.0)</Divider>;
      }
    };
    return (
      <div className="flex-around container">
        <div
          className="flex-start-col option"
          style={{ height: "100%", width: "20%" }}
        >
          <Divider orientation="left">Option</Divider>
          <div className="flex-between option-item" style={{ width: "80%" }}>
            <div>Dataset:</div>
            <select
              value={this.state.dataset}
              id="dataset"
              onChange={this.handleChange}
            >
              <option value="GeoLife">GeoLife</option>
              <option value="GuangZhou30seconds">GuangzhouTaxi_30</option>
              <option value="GuangZhou60seconds">GuangzhouTaxi_60</option>
              <option value="Brinkhoff">Brinkhoff</option>
            </select>
          </div>
          <div className="flex-between option-item" style={{ width: "80%" }}>
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
              <option value="0p1">0.1</option>
              <option value="0p5">0.5</option>
              <option value="1p0">1.0</option>
              <option value="2p0">2.0</option>
            </select>
          </div>
          <div className="flex-between" style={{ width: "80%" }}>
            <Button type="primary" onClick={this.setToFit}>
              Set To Fitview
            </Button>
            <Button type="primary" onClick={this.getPath}>
              Submit
            </Button>
          </div>
          <Divider orientation="left">Tips</Divider>
          <List
            dataSource={tips}
            renderItem={(item) => (
              <List.Item style={{ padding: "20px" }}>{item}</List.Item>
            )}
          ></List>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <Divider orientation="left">Original</Divider>
          <div id="original_map" className="detail-map"></div>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <MyDivider model="DP-STP" />
          <div id="trained_map" className="detail-map"></div>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <MyDivider model="DP-STAR" />
          <div id="dpstar_map" className="detail-map"></div>
        </div>
      </div>
    );
  }
}

export default MapDetail;
