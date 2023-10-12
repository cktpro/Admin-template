import React, { Component } from "react";
import Chart from "react-apexcharts";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.donut={
      options: {
        labels: ['Đơn đã tạo', 'Đơn đã hoàn thành', 'Đơn đang giao','Đơn bị hủy / từ chối']
      },
      series: [20, 30, 60, 10,],
    }
    
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8","Tháng 9"]
        }
      },
      series: [
        {
          name: "Số đơn hàng",
          data: [30, 40, 45, 50, 49, 60, 70, 125,250]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="600"
            />
            {/* <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="600"
  /> */}

          </div>
          <div className="donut">
        <Chart options={this.donut.options} series={this.donut.series} labels={["a","b","c","D"]} type="donut" width="500" />
      </div>
        </div>
      </div>
    );
  }
}

export default Cards;