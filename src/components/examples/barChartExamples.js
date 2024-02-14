const lifeSpan = {
    "customOption": {
      "backgroundColor": "#eeeeee",
      "mode": "immediate",
      "yAxis": false,
      "xAxis": true,
      "height": "600px"
    },
    "title": {
      "show": true,
      "text": "Life Expectancy by Gender",
      "textStyle": {
        "fontSize": "40",
        "fontWeight": "lighter",
        "color": "#09819f"
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
        "fontSize": 20
      },
      "data": [
        "Man",
        "Women"
      ],
      "axisLine": {
        "lineStyle": {
          "width": "0",
          "color": "#37c7c9",
          "type": "solid"
        },
        "show": true
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "auto",
        "fontWeight": "bolder",
        "show": true
      },
      "name": "",
      "nameLocation": "end"
    },
    "yAxis": {
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "auto",
        "fontWeight": "bolder",
        "show": false
      },
      "axisLine": {
        "show": false,
        "lineStyle": {
          "width": 3,
          "color": "#37c7c9",
          "type": "solid"
        }
      },
      "type": "value",
      "name": "",
      "nameLocation": "end"
    },
    "series": [
      {
        "name": "Email",
        "type": "bar",
        "stack": "Total",
        "colorBy": "data",
        "label": {
          "show": true,
          "fontSize": 48
        },
        "smooth": true,
        "areaStyle": {},
        "itemStyle": {
          "color": "auto",
          "opacity": 0.5
        },
        "emphasis": {
          "disabled": true,
          "focus": "none",
          "itemStyle": {
            "borderColor": "#FFBD33",
            "borderWidth": 4,
            "borderType": "solid",
            "color": "#CCCCFF",
            "opacity": 0.97
          }
        },
        "markPoint": {
          "symbolOffset": "[0, '-50%']",
          "symbolSize": 70,
          "itemStyle": {
            "color": "none"
          },
          "label": {
            "formatter": "\n",
            "fontSize": 20,
            "fontWeight": "lighter"
          },
          "data": [
            {
              "type": "max",
              "name": "1975",
              "symbol": "pin",
              "label": {
                "show": true,
                "width": 50,
                "height": 50,
                "backgroundColor": {
                  "image": "http://localhost:3000/img/women.svg"
                }
              }
            },
            {
              "type": "min",
              "name": "2022",
              "symbol": "pin",
              "label": {
                "show": true,
                "width": 50,
                "height": 50,
                "backgroundColor": {
                  "image": "http://localhost:3000/img/man.svg"
                }
              }
            }
          ]
        },
        "data": [
          {
            "value": 77.67,
            "itemStyle": {
              "color": "blue"
            }
          },
          {
            "value": 84.25,
            "itemStyle": {
              "color": "red"
            }
          }
        ]
      }
    ]
  }

  export default [
    {data: lifeSpan, name: "The life expectancy for males in China is 77.67 years, whereas for females, it is significantly higher at 84.25 years, highlighting a notable disparity in longevity between the genders. This gap in life expectancy underscores various contributing factors, such as biological differences, lifestyle choices, and healthcare access. Women generally have lower mortality rates due to their healthier lifestyles and improved healthcare access. To promote a more equitable and healthier society, efforts to reduce this gender-based discrepancy in life expectancy should be prioritized, ensuring that both males and females have the opportunity to live longer, healthier lives."}
]
