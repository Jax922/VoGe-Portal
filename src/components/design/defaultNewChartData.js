

const defaultBarChartData = {
  "customOption": {
    "backgroundColor": "#eeeeee",
    "mode": "immediate",
    "yAxis": true,
    "xAxis": true,
    "theme": "light"
  },
  "title": {
    "show": true,
    "text": "Bar Chart Title",
    "textStyle": {
      "fontSize": 24,
      "color": "rgba(51,51,51,0.5)"
    },
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "none"
    }
  },
  "toolbox": {},
  "xAxis": {
    "type": "category",
    "nameTextStyle": {
      "fontSize": 20,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder"
    },
    "data": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "axisLine": {
      "lineStyle": {
        "width": 3,
        "color": "rgba(51,51,51,0.5)",
        "type": "solid"
      },
      "show": true
    },
    "axisLabel": {
      "fontSize": 16,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder",
      "show": true
    },
    "name": "X Axis",
    "nameLocation": "end"
  },
  "yAxis": {
    "splitLine": {
      "show": false
    },
    "axisLabel": {
      "fontSize": 16,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder",
      "show": true
    },
    "nameTextStyle": {
      "fontSize": 20,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder",
      "padding": [
        30,
        30
      ]
    },
    "axisLine": {
      "show": true,
      "lineStyle": {
        "width": 3,
        "color": "rgba(51,51,51,0.5)",
        "type": "solid"
      }
    },
    "type": "value",
    "name": "Y axis name",
    "nameLocation": "center"
  },
  "series": [
    {
      "name": "Email",
      "type": "bar",
      "stack": "Total",
      "label": {
        "show": "on",
        "position": "top",
        "fontSize": "24",
        "fontWeight": "bold",
        "color": "#333333"
      },
      "smooth": true,
      "areaStyle": {},
      "itemStyle": {
        "opacity": 0.5,
        "color": "#005eaa"
      },
      "emphasis": {
        "focus": "none",
        "itemStyle": {
          "borderColor": "#eeeeee",
          "borderWidth": 4,
          "borderType": "solid",
          "color": "#005eaa",
          "opacity": 0.97
        }
      },
      "data": [
        120,
        132,
        101,
        134,
        90,
        230,
        200
      ]
    }
  ]
}


const defaultLineChartData = {
  "customOption": {
    "backgroundColor": "#eeeeee",
    "mode": "immediate",
    "yAxis": true,
    "xAxis": true,
    "theme": "light"
  },
  "title": {
    "show": false,
    "textStyle": {
      "color": "rgba(51,51,51,0.5)"
    }
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "none"
    }
  },
  "toolbox": {},
  "xAxis": {
    "type": "category",
    "nameTextStyle": {
      "fontSize": 20,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder"
    },
    "data": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "axisLine": {
      "lineStyle": {
        "width": 3,
        "color": "rgba(51,51,51,0.5)",
        "type": "solid"
      },
      "show": true
    },
    "axisLabel": {
      "fontSize": 16,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder",
      "show": true
    },
    "name": "Time"
  },
  "yAxis": {
    "splitLine": {
      "show": false
    },
    "nameTextStyle": {
      "fontSize": 20,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder",
      "padding": [
        20,
        30
      ]
    },
    "axisLabel": {
      "fontSize": 16,
      "color": "rgba(51,51,51,0.5)",
      "fontWeight": "bolder",
      "show": true
    },
    "axisLine": {
      "show": true,
      "lineStyle": {
        "width": 3,
        "color": "rgba(51,51,51,0.5)",
        "type": "solid"
      }
    },
    "type": "value",
    "name": "Y-Axis Name",
    "nameLocation": "end"
  },
  "series": [
    {
      "name": "Email",
      "type": "line",
      "stack": "Total",
      "smooth": true,
      "label": {
        "show": false,
        "position": "top",
        "fontSize": "24",
        "fontWeight": "bold",
        "color": "#333333"
      },
      "areaStyle": {},
      "itemStyle": {
        "color": "#005eaa",
        "opacity": 0.5
      },
      "lineStyle": {
        "width": 3
      },
      "emphasis": {
        "focus": "none",
        "itemStyle": {
          "borderColor": "#eeeeee",
          "borderWidth": 4,
          "borderType": "solid",
          "color": "#005eaa",
          "opacity": 0.97
        }
      },
      "data": [
        "120",
        "132",
        "101",
        "134",
        "90",
        "230",
        "200"
      ]
    },
    {
      "name": "Search Engine",
      "type": "line",
      "stack": "Total",
      "smooth": true,
      "label": {
        "show": false,
        "position": "top",
        "fontSize": "24",
        "fontWeight": "bold",
        "color": "#333333"
      },
      "areaStyle": {},
      "itemStyle": {
        "color": "#c12e34",
        "opacity": 0.5
      },
      "lineStyle": {
        "width": 3
      },
      "emphasis": {
        "focus": "none",
        "itemStyle": {
          "borderColor": "#eeeeee",
          "borderWidth": 4,
          "borderType": "solid",
          "color": "#c12e34",
          "opacity": 0.97
        }
      },
      "data": [
        "200",
        "300",
        "400",
        "300",
        "400",
        "600",
        "700"
      ]
    }
  ]
}

export default {
    defaultBarChartData,
    defaultLineChartData,
}