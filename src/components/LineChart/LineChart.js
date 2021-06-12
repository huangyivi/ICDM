import React, { Component } from "react";
import { Chart } from "@antv/g2";
import { PageHeader, Spin, Card } from "antd";
import "./LineChart.less";

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
        height: 500,
        padding: [30, 20, 70, 30],
      });
      chart.data(data);
      chart.scale({
        DPSTP: {
          min: min,
          max: max,
        },
        DPSTAR: {
          min: min,
          max: max,
        },
      });
      chart.scale("epsilon", {
        min: 0.1,
        type: "quantize",
        // tickCount: 4,
        // tickInterval: 0.1
        ticks: [0.1, 0.5, 1.0, 2.0],
      });

      chart.axis("DPSTP", false);
      chart.legend({
        custom: true,
        items: [
          {
            name: "DP-Star",
            value: "DPSTAR",
            marker: {
              symbol: "line",
              style: { stroke: "#1890ff", lineWidth: 20 },
            },
          },
          {
            name: "DP-STP",
            value: "DPSTP",
            marker: {
              symbol: "line",
              style: { stroke: "#2fc25b", lineWidth: 20 },
            },
          },
        ],
        layout: "vertical",
        position: "top-right",
      });

      chart.line().position("epsilon*DPSTAR").color("#1890ff");
      chart.line().position("epsilon*DPSTP").color("#2fc25b");
      chart
        .point()
        .position("epsilon*DPSTAR")
        .color("#1890ff")
        .shape("circle")
        .size(7);
      chart
        .point()
        .position("epsilon*DPSTP")
        .color("#2fc25b")
        .shape("diamond")
        .size(8);
      // chart.removeInteraction("legend-filter"); // 自定义图例，移除默认的分类图例筛选交互
      chart.render();
    }, 1000);
  }

  componentDidMount() {
    // 计算每个图表的值域
    let arr = [];
    for (let i of this.props.data.RE) {
      arr.push(i.DPSTAR);
      arr.push(i.DPSTP);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.FP) {
      arr.push(i.DPSTAR);
      arr.push(i.DPSTP);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.KT) {
      arr.push(i.DPSTAR);
      arr.push(i.DPSTP);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.TE) {
      arr.push(i.DPSTAR);
      arr.push(i.DPSTP);
    }
    this.maxs.push(arr.sort((a, b) => a - b)[arr.length - 1]);
    this.mins.push(arr.sort((a, b) => a - b)[0]);
    arr = [];
    for (let i of this.props.data.DE) {
      arr.push(i.DPSTAR);
      arr.push(i.DPSTP);
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
            <div className="chart-items">
              <PageHeader title="RE" style={{ height: "20px" }} />
              <div id="RE" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items">
              <PageHeader title="FPS" style={{ height: "20px" }} />
              <div id="FP" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items">
              <PageHeader title="KT" style={{ height: "20px" }} />
              <div id="KT" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items">
              <PageHeader title="DE" style={{ height: "20px" }} />
              <div id="DE" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items">
              <PageHeader title="TE" style={{ height: "20px" }} />
              <div id="TE" style={{ width: "80%", height: "80%" }}></div>
            </div>
            <div className="chart-items">
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
