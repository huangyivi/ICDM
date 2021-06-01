import React, { Component } from "react";
import { Chart } from "@antv/g2";
import { PageHeader, Spin } from "antd";

class BarChart extends Component {
  state = {
    hasData: false,
  };
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            hasData : true
        })
        const data = [
            { type: '未知', value: 654, percent: 0.02 },
            { type: '17', value: 654, percent: 0.02 },
            { type: '18', value: 4400, percent: 0.2 },
            { type: '25', value: 5300, percent: 0.24 },
            { type: '30', value: 6200, percent: 0.28 },
            { type: '40', value: 3300, percent: 0.14 },
            { type: '50', value: 1500, percent: 0.06 },
          ];
          
          const chart = new Chart({
            container: 'bar-chart',
            autoFit: true,
            height: 500,
            padding: [50, 20, 50, 20],
          });
          chart.data(data);
          chart.scale('value', {
            alias: '销售额(万)',
          });
          
          chart.axis('type', {
            tickLine: {
              alignTick: false,
            },
          });
          chart.axis('value', false);
          
          chart.tooltip({
            showMarkers: false,
          });
          chart.interval().position('type*value');
          chart.interaction('element-active');
          
          // 添加文本标注
          data.forEach((item) => {
            chart
              .annotation()
              .text({
                position: [item.type, item.value],
                content: item.value,
                style: {
                  textAlign: 'center',
                },
                offsetY: -30,
              })
              .text({
                position: [item.type, item.value],
                content: (item.percent * 100).toFixed(0) + '%',
                style: {
                  textAlign: 'center',
                },
                offsetY: -12,
              });
          });
          chart.render();
          
    }, 1000);
  }
  render() {
    if (this.state.hasData) {
      return (
        <div
          className="flex-around-col"
          style={{ width: "100%", height: "100%" }}
        >
          <PageHeader title="BarChart" style={{ height: "20px" }} />
          <div id="bar-chart" style={{ width: "80%", height: "80%" }}></div>
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

export default BarChart;
