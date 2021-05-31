import React, { Component } from "react";
import "./Map.less";
import { Divider, Spin, Button } from "antd";


const AMap = window.AMap;


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map0: null,
      dp1: null,
      dp2: null,
      dp3: null,
      dp4: null,
    };
  }
  state = {
    hasData: false,
  };

  // 生成地图
  createMap(id) {
    return new AMap.Map(id, {
      zoom: 11,
      center: [113.280637, 23.125178],
      // dragEnable: false,
      showLabel: false,
      mapStyle: "amap://styles/a63016a6478fb6d0589f71aa183b8e69",
    });
  }

  // 生成散点图层
  createLayer(map) {
    // var layer = new Loca.ScatterPointLayer({
    //   map: map,
    // });
    // // 传入原始数据
    // layer.setData(citys, {
    //   lnglat: "lnglat", // 指定坐标数据的来源，数据格式: 经度在前，维度在后，数组格式。
    // });

    // // 配置样式
    // layer.setOptions({
    //   unit: "px",
    //   style: {
    //     radius: 1.2, // 圆形半径，单位像素
    //     color: "#14B4C9", // 填充颜色
    //     borderWidth: 0.5, // 边框宽度
    //     borderColor: "#14B4C9", // 边框颜色
    //   },
    // });

    // layer.render();

    var path = [
      [Math.random()*10+115.7, Math.random()*10+39.4],
      [Math.random()*10+115.7, Math.random()*10+39.4],
      [Math.random()*10+115.7, Math.random()*10+39.4],
      [Math.random()*10+115.7, Math.random()*10+39.4],
    ];

    let colors = ['red','orange','yellow','green','blue','purple'];

    var polyline = new AMap.Polyline({
      path: path,
      isOutline: true,
      outlineColor: "#ffeeff",
      borderWeight: 3,
      strokeColor: colors[Math.floor(Math.random()*10-4)],
      strokeOpacity: 1,
      strokeWeight: 2,
      // 折线样式还支持 'dashed'
      strokeStyle: "solid",
      // strokeStyle是dashed时有效
      strokeDasharray: [10, 5],
      lineJoin: "round",
      lineCap: "round",
      zIndex: 50,
    });

    polyline.setMap(map);
    map.setFitView([ polyline ])
  }

  componentDidMount() {
    // 生成操作
    setTimeout(() => {
      this.setState({
        hasData: true,
      });
      this.map0 = this.createMap("originMap");
      this.map1 = this.createMap("dp1");
      this.map2 = this.createMap("dp2");
      this.map3 = this.createMap("dp3");
      this.map4 = this.createMap("dp4");

      for(let i=0;i<100;i++) {
        this.createLayer(this.map0);
      }
    }, 1000);
  }
  render() {
    if (this.state.hasData) {
      return (
        <div className="mapCmp flex-center">
          <div className="map-container flex-around-col origin-map">
            <Button type="primary" size="large">
              Switching Data Randomly
            </Button>

            <Divider orientation="center">Origin</Divider>
            <div
              id="originMap"
              style={{ width: "400px", height: "300px" }}
            ></div>
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
        </div>
      );
    } else {
      return (
        <div className="mapCmp flex-center">
          <Spin />
        </div>
      );
    }
  }
}

export default Map;
