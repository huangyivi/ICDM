import React, { Component } from "react";
import { Chart } from "@antv/g2";
import { PageHeader, Spin } from "antd";
import "./LineChart.less";

class LineChart extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hasData: false,
  };
  createLineChart(id,data,max) {
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
        DPQG: {
          min: 0,
          max: max
        },
        DPSTAR: {
          min: 0,
          max: max
        },
      });

      chart.axis("DPQG", false);

      chart.legend({
        custom: true,
        items: [
          {
            name: "DPSTAR",
            value: "DPSTAR",
            marker: {
              symbol: "line",
              style: { stroke: "#1890ff", lineWidth: 2 },
            },
          },
          {
            name: "DPQG",
            value: "DPQG",
            marker: {
              symbol: "line",
              style: { stroke: "#2fc25b", lineWidth: 2 },
            },
          },
        ],
      });

      chart.line().position("epsilon*DPSTAR").color("#1890ff");
      chart.line().position("epsilon*DPQG").color("#2fc25b");
      chart.removeInteraction("legend-filter"); // 自定义图例，移除默认的分类图例筛选交互
      chart.render();
    }, 1000);
  }

  componentDidMount() {
    this.createLineChart("RE",this.props.data.RE,0.12);
    this.createLineChart("FP",this.props.data.FP,0.2);
    this.createLineChart("KT",this.props.data.KT,0.7);
    this.createLineChart("TE",this.props.data.TE,0.2);
    this.createLineChart("DE",this.props.data.DE,0.5);
  }
  render() {
    if (this.state.hasData) {
      return (
        <div
          className="flex-start-wrap chart-container"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="chart-items">
            <PageHeader title="RE" style={{ height: "20px" }} />
            <div id="RE" style={{ width: "80%", height: "80%" }}></div>
          </div>
          <div className="chart-items">
            <PageHeader title="FP AvRe" style={{ height: "20px" }} />
            <div id="FP" style={{ width: "80%", height: "80%" }}></div>
          </div>
          <div className="chart-items">
            <PageHeader title="KT" style={{ height: "20px" }} />
            <div id="KT" style={{ width: "80%", height: "80%" }}></div>
          </div>
          <div className="chart-items">
            <PageHeader title="Trip Error" style={{ height: "20px" }} />
            <div id="TE" style={{ width: "80%", height: "80%" }}></div>
          </div>
          <div className="chart-items">
            <PageHeader title="Diameter Error" style={{ height: "20px" }} />
            <div id="DE" style={{ width: "80%", height: "80%" }}></div>
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
