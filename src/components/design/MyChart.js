
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';
// import ReactEcharts from "echarts-for-react"

// export default function MyChart ({ data /* see data tab */ }) {
//   return <ReactEcharts option={data} />;
// }
let sizeFunction = function (x) {
  var y = Math.sqrt(x / 5e8) + 0.1;
  return y * 80;
};

// const sizeFunction = function (x) {
//   const dataValue = x;
//   const minValue = 10;
//   const maxValue = 100;
//   const normalized = (dataValue - minValue) / (maxValue - minValue);
//   return normalized * (maxSize - minSize) + minSize;
// };

function calculateBubbleSize(minValue, maxValue, minSize, maxSize) {

  return function (x) {
    const normalized = (x - minValue) / (maxValue - minValue);
    return normalized * (maxSize - minSize) + minSize;
  }

}


class MyChart2 extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      theme: 'light' || props.data.customOption.theme,
      data: props.data,
      container: props.container || 'main-chart',
    };

  

  }

  componentDidMount() {
    const { data, container } = this.state;
    let chartDom = document.getElementById(container);
    let myChart = echarts.init(chartDom);
    if (data && data.options) {
      // if (data.customOption.maxValue) {
      //   sizeFunction = calculateBubbleSize(data.customOption.minValue, data.customOption.maxValue, data.customOption.minSize, data.customOption.maxSize);
      // } else {
      //   sizeFunction = function (x) {
      //     var y = Math.sqrt(x / 5e8) + 0.1;
      //     return y * 80;
      //   };
      // }
      for (let i = 0; i < data.options.length; i++) {
        for (let j = 0; j < data.options[i].series.length; j++) {
          if (data.options[i].series[j].symbolSize) {
            data.options[i].series[j].symbolSize = function (val) {
              return sizeFunction(val[2]);
            }
          }
        }
      }
    }

    if (data && data.baseOption) {
      
      // if (data.customOption.maxValue) {
      //   sizeFunction = calculateBubbleSize(data.customOption.minValue, data.customOption.maxValue, data.customOption.minSize, data.customOption.maxSize);
      // } else {
      //   sizeFunction = function (x) {
      //     var y = Math.sqrt(x / 5e8) + 0.1;
      //     return y * 80;
      //   };
      // }

      for (let j = 0; j < data.baseOption.series.length; j++) {
        if (data.baseOption.series[j].symbolSize) {
          data.baseOption.series[j].symbolSize = function (val) {
            return sizeFunction(val[2]);
          }
        }
      }
    }


    myChart.setOption(data);


  }

  


  

  render() {
    return (
      <div id={this.state.container} style={{width: '100%', height: '70vh', background: this.state.data.customOption.theme == 'dark' ? '#333' : '#fff'}} >

      </div>
    );
  }
}


    
export default MyChart2;