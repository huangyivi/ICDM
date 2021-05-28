import React, { Component } from "react";
import "./Map.less";
import { Divider } from "antd";
const AMap = window.AMap;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map0: null,
      map1: null,
      map2: null
    };
  }
  componentDidMount() {
    this.map0 = new AMap.Map("originMap", {
      zoom: 11,
      center: [113.280637, 23.125178],
      mapStyle: 'amap://styles/a63016a6478fb6d0589f71aa183b8e69'
    });
    this.map0 = new AMap.Map("dpstarMap", {
      zoom: 11,
      center: [113.280637, 23.125178],
      mapStyle: 'amap://styles/a63016a6478fb6d0589f71aa183b8e69'

    });
    this.map0 = new AMap.Map("qgMap", {
      zoom: 11,
      center: [113.280637, 23.125178],
      mapStyle: 'amap://styles/a63016a6478fb6d0589f71aa183b8e69'
    });
    // 使用插件
    let that = this;
    AMap.plugin(["AMap.ToolBar","AMap.DistrictSearch"], function () {
      let districtSearch = new AMap.DistrictSearch({
        level : 'city',
        subdistrict: 0
      })

      districtSearch.search('广州',function(status,res) {
        console.log(res);
      })
    });
  }
  render() {
    return (
      <div className="mapCmp flex-center">
        <div className="map-container flex-start-col origin-map">
          <Divider orientation="left">Origin</Divider>
          <div id="originMap" style={{ width: "500px", height: "400px" }}></div>
        </div>
        <div className="map-container flex-start-col analyzed-map">
          <Divider orientation="left">DP-star</Divider>
          <div id="dpstarMap" style={{ width: "500px", height: "400px" }}></div>
          <Divider orientation="left">DP-QG</Divider>
          <div id="qgMap" style={{ width: "500px", height: "400px" }}></div>
        </div>
      </div>
    );
  }
}

export default Map;
