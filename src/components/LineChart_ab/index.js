import React, { Component } from "react";
import { Chart } from "@antv/g2";
import { PageHeader, Spin, Card } from "antd";
import "./index.less";

class LineChart extends Component {
  state = {
    hasData: false,
  };
  maxs = [];
  mins = [];
  createLineChart(id, data, min, max) {
    setTimeout(() => {
      this.setState({
        hasData: true,
      });
      const chart = new Chart({
        container: id,
        autoFit: true,
        // height: 500,
        padding: [30, 50, 70, 50],
      });
      chart.data(data);
      chart.scale({
        "Baseline (DP-Star)": {
          min: min,
          max: max,
        },
        "Baseline+MRAG": {
          min: min,
          max: max,
        },
        "Baseline+RWDP": {
          min: min,
          max: max,
        },
        "Baseline+STCM": {
          min: min,
          max: max,
        },
        "AWDP": {
          min: min,
          max: max,
        }
      });
      chart.scale("epsilon", {
        min: 0.1,
        type: "quantize",
        // tickCount: 4,
        // tickInterval: 0.1
        ticks: [0.1, 0.5, 1.0, 2.0],
      });

      // chart.axis("Baseline (DP-Star)", false);
      chart.axis('epsilon',{
        title: {
          text: "privacy budget",
          position: "center",
          style: {
            fontSize: 24
          }
        }
      })
      chart.legend({
        custom: true,
        items: [
          
          {
            name: "Baseline (DP-Star)",
            value: "Baseline (DP-Star)",
            marker: {
              symbol: "line",
              style: { stroke: "#2fc25b", lineWidth: 10 },
            },
          },
          {
            name: "Baseline+MRAG",
            value: "Baseline+MRAG",
            marker: {
              symbol: "line",
              style: { stroke: "#1890ff", lineWidth: 20 },
            },
          },
          {
            name: "Baseline+RWDP",
            value: "Baseline+RWDP",
            marker: {
              symbol: "line",
              style: { stroke: "#F9CE00", lineWidth: 20 },
            },
          },
          {
            name: "Baseline+STCM",
            value: "Baseline+STCM",
            marker: {
              symbol: "line",
              style: { stroke: "#C00000", lineWidth: 20 },
            },
          },
          {
            name: "AWDP",
            value: "AWDP",
            marker: {
              symbol: "line",
              style: { stroke: "#791E94", lineWidth: 20 },
            },
          },
        ],
        position: "top-right",
      });

      chart.line().position("epsilon*Baseline+MRAG").color("#1890ff");
      chart.line().position("epsilon*Baseline (DP-Star)").color("#2fc25b");
      chart.line().position("epsilon*Baseline+RWDP").color("#F9CE00");
      chart.line().position("epsilon*Baseline+STCM").color("#C00000");
      chart.line().position("epsilon*AWDP").color("#791E94");
      chart
        .point()
        .position("epsilon*Baseline+MRAG")
        .color("#1890ff")
        .shape("circle")
        .size(7);
      chart
        .point()
        .position("epsilon*Baseline (DP-Star)")
        .color("#2fc25b")
        .shape("diamond")
        .size(8);
      chart
        .point()
        .position("epsilon*Baseline+RWDP")
        .color("#F9CE00")
        .shape("circle")
        .size(7);
      chart
        .point()
        .position("epsilon*Baseline+STCM")
        .color("#C00000")
        .shape("diamond")
        .size(8);
      chart
        .point()
        .position("epsilon*AWDP")
        .color("#791E94")
        .shape("circle")
        .size(7);
      // chart.removeInteraction("legend-filter"); // 自定义图例，移除默认的分类图例筛选交互
      chart.render();
    }, 1000);
  }

  componentDidMount() {
    // 计算每个图表的值域
    let arr = [];
    for (let i of this.props.data.RE) {
      arr.push(i["Baseline+MRAG"]);
      arr.push(i["Baseline (DP-Star)"]);
      arr.push(i["Baseline+RWDP"]);
      arr.push(i["Baseline+STCM"]);
      arr.push(i["AWDP"]);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.FP) {
      arr.push(i["Baseline+MRAG"]);
      arr.push(i["Baseline (DP-Star)"]);
      arr.push(i["Baseline+RWDP"]);
      arr.push(i["Baseline+STCM"]);
      arr.push(i["AWDP"]);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.KT) {
      arr.push(i["Baseline+MRAG"]);
      arr.push(i["Baseline (DP-Star)"]);
      arr.push(i["Baseline+RWDP"]);
      arr.push(i["Baseline+STCM"]);
      arr.push(i["AWDP"]);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.TE) {
      arr.push(i["Baseline+MRAG"]);
      arr.push(i["Baseline (DP-Star)"]);
      arr.push(i["Baseline+RWDP"]);
      arr.push(i["Baseline+STCM"]);
      arr.push(i["AWDP"]);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.DE) {
      arr.push(i["Baseline+MRAG"]);
      arr.push(i["Baseline (DP-Star)"]);
      arr.push(i["Baseline+RWDP"]);
      arr.push(i["Baseline+STCM"]);
      arr.push(i["AWDP"]);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    // 渲染图标
    this.createLineChart(
      "RE",
      this.props.data.RE,
      this.mins[0] - 0.1,
      this.maxs[0] + 0.1
    );
    this.createLineChart(
      "FP",
      this.props.data.FP,
      this.mins[1] - 0.1,
      this.maxs[1] + 0.1
    );
    this.createLineChart(
      "KT",
      this.props.data.KT,
      this.mins[2] - 0.1,
      this.maxs[2] + 0.15
    );
    this.createLineChart(
      "TE",
      this.props.data.TE,
      this.mins[3] - 0.1,
      this.maxs[3] + 0.1
    );
    this.createLineChart(
      "DE",
      this.props.data.DE,
      this.mins[4] - 0.1,
      this.maxs[4] + 0.1
    );
  }
  render() {
    if (this.state.hasData) {
      return (
        <div
          className="flex-start-col container"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="title">Dataset: {this.props.title}</div>
          <div className="flex-start-wrap chart-container">
            <div className="chart-items2">
              <PageHeader title="RE" style={{ height: "20px" }} />
              <div id="RE" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items2">
              <PageHeader title="FPS" style={{ height: "20px" }} />
              <div id="FP" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items2">
              <PageHeader title="KT" style={{ height: "20px" }} />
              <div id="KT" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items2">
              <PageHeader title="DE" style={{ height: "20px" }} />
              <div id="DE" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items2">
              <PageHeader title="TE" style={{ height: "20px" }} />
              <div id="TE" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items2">
              <Card
                title="Dataset Introduction"
                style={{ width: "80%" }}
                hoverable
              >
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.intro}</p>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="flex-around-col"
          style={{ width: "100%", height: "100%" }}
        >
          <Spin />
        </div>
      );
    }
  }
}

export default LineChart;
