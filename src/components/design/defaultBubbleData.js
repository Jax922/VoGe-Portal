const bubbleOption = {
    "customOption": {
      "backgroundColor": "#eeeeee",
      "timelineNodeIdx": 0,
      "NLUMode": "hybrid",
      "mode": "progressive",
      "yAxis": true,
      "xAxis": true,
      "theme": "light",
      "height": "600px",
      "splitData": [
        {
          "name": "China",
          "type": "scatter",
          "dataColorname": "sky blue",
          "index": "2015",
          "itemStyle": {
            "opacity": 0.6
          },
          "emphasis": {
            "focus": "none",
            "itemStyle": {
              "borderColor": "#eeeeee",
              "borderWidth": 4,
              "borderType": "solid",
              "opacity": 0.97
            },
            "label": {
              "show": true,
              "formatter": "{@[3]}",
              "color": "#fff"
            }
          },
          "data": [
            [
              30301,
              80.8,
              21705000,
              "Beijing",
              2015
            ],
            [
              29100,
              81.7,
              24152000,
              "Shanghai",
              2015
            ],
            [
              22886,
              77.4,
              79200000,
              "Jiangsu",
              2015
            ],
            [
              20220,
              77.3,
              15168100,
              "Tianjin",
              2015
            ],
            [
              19530,
              77.7,
              56137000,
              "Zhejiang",
              2015
            ],
            [
              17194,
              76.4,
              104303000,
              "Guangdong",
              2015
            ],
            [
              6915,
              72.4,
              25575300,
              "Gansu",
              2015
            ],
            [
              7608,
              68.3,
              34750000,
              "GuiZhou",
              2015
            ],
            [
              8234,
              69,
              46026600,
              "Guangxi",
              2015
            ],
            [
              8561,
              69.2,
              45966000,
              "Yunnan",
              2015
            ],
            [
              8732,
              72.1,
              38312200,
              "Heilongjiang",
              2015
            ],
            [
              8954,
              73.4,
              35933000,
              "Shanxi",
              2015
            ],
            [
              14980,
              76.6,
              95793000,
              "Shandong",
              2015
            ],
            [
              13987,
              75.8,
              30165500,
              "Chongqing",
              2015
            ],
            [
              11502,
              75.8,
              71193400,
              "Hunan",
              2015
            ]
          ],
          "symbolSize": "sizeFunction"
        }
      ]
    },
    "baseOption": {
      "color": [
        "#5470c6", "#91cc75", "#fac858", "#ee6666",  "#9a60b4", "#ea7ccc", "#BC8F8F", "#FF8C00", "#808080"
      ],
      "legend": {
        "right": 80,
        "top": 50
      },
      "timeline": {
        "loop": false,
        "axisType": "category",
        "orient": "vertical",
        "autoPlay": false,
        "inverse": true,
        "playInterval": 1000,
        "left": null,
        "right": 0,
        "top": 20,
        "bottom": 20,
        "width": 55,
        "height": null,
        "symbol": "none",
        "checkpointStyle": {
          "borderWidth": 2
        },
        "controlStyle": {
          "showNextBtn": false,
          "showPrevBtn": false
        },
        "data": [
          1900,
          1910,
          1920,
          1930,
          1940,
          1950,
          1951,
          1952,
          1953,
          1954,
          1955,
          1956,
          1957,
          1958,
          1959,
          1960,
          1961,
          1962,
          1963,
          1964,
          1965,
          1966,
          1967,
          1968,
          1969,
          1970,
          1971,
          1972,
          1973,
          1974,
          1975,
          1976,
          1977,
          1978,
          1979,
          1980,
          1981,
          1982,
          1983,
          1984,
          1985,
          1986,
          1987,
          1988,
          1989,
          1990,
          1991,
          1992,
          1993,
          1994,
          1995,
          1996,
          1997,
          1998,
          1999,
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015
        ]
      },
      "title": [
        {
          "text": 1900,
          "textAlign": "center",
          "left": "25%",
          "top": "15%",
          "textStyle": {
            "fontSize": 100,
            "color": "rgba(51,51,51,0.5)",
            "fontWeight": "bolder"
          }
        },
        {
          "text": "Life Expectancy vs. GDP per Capita Worldwide",
          "left": "center",
          "top": 10,
          "textStyle": {
            "fontWeight": "bolder",
            "fontSize": 20,
            "color": "rgba(51,51,51,0.5)"
          },
          "show": true
        }
      ],
      "tooltip": {
        "padding": 5,
        "borderWidth": 1,
        "formatter": "{a} : {b0}: {c0}"
      },
      "grid": {
        "top": 100,
        "containLabel": true,
        "left": 80,
        "right": "110"
      },
      "xAxis": {
        "type": "log",
        "name": "Per Capita Income($)",
        "max": 100000,
        "min": 300,
        "nameGap": 25,
        "nameLocation": "middle",
        "nameTextStyle": {
          "fontSize": 20,
          "color": "rgba(51,51,51,0.5)",
          "fontWeight": "bolder"
        },
        "splitLine": {
          "show": false
        },
        "axisLabel": {
          "formatter": "{value}",
          "fontSize": 16,
          "color": "rgba(51,51,51,0.5)",
          "fontWeight": "bolder",
          "show": true
        },
        "axisLine": {
          "lineStyle": {
            "width": 3,
            "color": "rgba(51,51,51,0.5)",
            "type": "solid"
          },
          "show": true
        }
      },
      "yAxis": {
        "type": "value",
        "name": "Life Expectancy",
        "max": 100,
        "splitLine": {
          "show": false
        },
        "axisLabel": {
          "formatter": "{value}",
          "fontSize": 16,
          "color": "rgba(51,51,51,0.5)",
          "fontWeight": "bolder",
          "show": true
        },
        "nameTextStyle": {
          "fontSize": 20,
          "color": "rgba(51,51,51,0.5)",
          "fontWeight": "bolder",
            "padding": [20, 30]
        },
        "axisLine": {
          "show": true,
          "lineStyle": {
            "width": 3,
            "color": "rgba(51,51,51,0.5)",
            "type": "solid"
          }
        },
        "nameLocation": "middle"
      },
      "series": [
        {
          "type": "scatter",
          "itemStyle": {
            "opacity": 0.6
          },
          "emphasis": {
            "focus": "none",
            "itemStyle": {
              "borderColor": "#eeeeee",
              "borderWidth": 4,
              "borderType": "solid",
              "opacity": 0.97
            },
            "label": {
              "show": true,
              "formatter": "{@[3]}",
              "color": "#fff"
            }
          },
          "data": [
            {
              "name": "Asia",
              "dataColorname": "blue",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  985,
                  32,
                  321675013,
                  "China",
                  1800
                ],
                [
                  1430,
                  29.5734572,
                  31088398,
                  "Russia",
                  1800
                ],
                [
                  1052,
                  25.4424,
                  168574895,
                  "India",
                  1800
                ],
                [
                  1050,
                  36.4,
                  30294378,
                  "Japan",
                  1800
                ],
                [
                  579,
                  26,
                  4345000,
                  "North Korea",
                  1800
                ],
                [
                  576,
                  25.8,
                  9395000,
                  "South Korea",
                  1800
                ],
                [
                  1221,
                  35,
                  9773456,
                  "Turkey",
                  1800
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "North America",
              "dataColorname": "green",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  2128,
                  39.41,
                  6801854,
                  "United States",
                  1800
                ],
                [
                  1314,
                  39,
                  645526,
                  "Canada",
                  1800
                ],
                [
                  864,
                  32.2,
                  345043,
                  "Cuba",
                  1800
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Europe",
              "dataColorname": "yellow",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  3431,
                  38.6497603,
                  12327466,
                  "United Kingdom",
                  1800
                ],
                [
                  1803,
                  33.96717024,
                  29355111,
                  "France",
                  1800
                ],
                [
                  1639,
                  38.37,
                  22886919,
                  "Germany",
                  1800
                ],
                [
                  1244,
                  36.5731262,
                  977662,
                  "Finland",
                  1800
                ],
                [
                  926,
                  42.84559912,
                  61428,
                  "Iceland",
                  1800
                ],
                [
                  1278,
                  37.91620899,
                  868570,
                  "Norway",
                  1800
                ],
                [
                  1213,
                  35.9,
                  9508747,
                  "Poland",
                  1800
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Oceania",
              "dataColorname": "red",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  815,
                  34.05,
                  351014,
                  "Australia",
                  1800
                ],
                [
                  658,
                  34.05,
                  100000,
                  "New Zealand",
                  1800
                ]
              ],
              "symbolSize": "sizeFunction"
            }
          ],
          "symbolSize": "sizeFunction"
        },
        {
          "type": "scatter",
          "itemStyle": {
            "opacity": 0.8
          },
          "emphasis": {
            "focus": "none",
            "itemStyle": {
              "borderColor": "#eeeeee",
              "borderWidth": 4,
              "borderType": "solid",
              "opacity": 0.97
            },
            "label": {
              "show": true,
              "formatter": "{@[3]}",
              "color": "#fff"
            }
          },
          "data": [
            {
              "name": "Asia",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  985,
                  32,
                  350542958,
                  "China",
                  1810
                ],
                [
                  1447,
                  29.5734572,
                  31088398,
                  "Russia",
                  1810
                ],
                [
                  1051,
                  25.4424,
                  171940819,
                  "India",
                  1810
                ],
                [
                  1064,
                  36.40397538,
                  30645903,
                  "Japan",
                  1810
                ],
                [
                  573,
                  26,
                  4345000,
                  "North Korea",
                  1810
                ],
                [
                  570,
                  25.8,
                  9395000,
                  "South Korea",
                  1810
                ],
                [
                  1223,
                  35,
                  9923007,
                  "Turkey",
                  1810
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "North America",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  2283,
                  39.41,
                  8294928,
                  "United States",
                  1810
                ],
                [
                  1400,
                  39.01496774,
                  727603,
                  "Canada",
                  1810
                ],
                [
                  970,
                  33.64,
                  470176,
                  "Cuba",
                  1810
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Europe",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  3575,
                  38.34738144,
                  14106058,
                  "United Kingdom",
                  1810
                ],
                [
                  1839,
                  37.4,
                  30293172,
                  "France",
                  1810
                ],
                [
                  1759,
                  38.37,
                  23882461,
                  "Germany",
                  1810
                ],
                [
                  1267,
                  36.9473378,
                  1070625,
                  "Finland",
                  1810
                ],
                [
                  928,
                  43.13915533,
                  61428,
                  "Iceland",
                  1810
                ],
                [
                  1299,
                  36.47500606,
                  918398,
                  "Norway",
                  1810
                ],
                [
                  1260,
                  35.9,
                  9960687,
                  "Poland",
                  1810
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Oceania",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  834,
                  34.05,
                  342440,
                  "Australia",
                  1810
                ],
                [
                  659,
                  34.05,
                  100000,
                  "New Zealand",
                  1810
                ]
              ],
              "symbolSize": "sizeFunction"
            }
          ],
          "symbolSize": "sizeFunction"
        },
        {
          "type": "scatter",
          "itemStyle": {
            "opacity": 0.8
          },
          "emphasis": {
            "focus": "none",
            "itemStyle": {
              "borderColor": "#eeeeee",
              "borderWidth": 4,
              "borderType": "solid",
              "opacity": 0.97
            },
            "label": {
              "show": true,
              "formatter": "{@[3]}",
              "color": "#fff"
            }
          },
          "data": [
            {
              "name": "Asia",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  985,
                  32,
                  380055273,
                  "China",
                  1820
                ],
                [
                  1464,
                  29.5734572,
                  31861526,
                  "Russia",
                  1820
                ],
                [
                  1050,
                  25.4424,
                  176225709,
                  "India",
                  1820
                ],
                [
                  1079,
                  36.40795077,
                  30993147,
                  "Japan",
                  1820
                ],
                [
                  567,
                  26,
                  4353556,
                  "North Korea",
                  1820
                ],
                [
                  564,
                  25.8,
                  9408016,
                  "South Korea",
                  1820
                ],
                [
                  1225,
                  35,
                  10118315,
                  "Turkey",
                  1820
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "North America",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  2242,
                  39.41,
                  10361646,
                  "United States",
                  1820
                ],
                [
                  1491,
                  39.02993548,
                  879432,
                  "Canada",
                  1820
                ],
                [
                  1090,
                  35.04,
                  607664,
                  "Cuba",
                  1820
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Europe",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  3403,
                  41.31247671,
                  16221883,
                  "United Kingdom",
                  1820
                ],
                [
                  1876,
                  39.21,
                  31549988,
                  "France",
                  1820
                ],
                [
                  1887,
                  38.37,
                  25507768,
                  "Germany",
                  1820
                ],
                [
                  1290,
                  37.29122269,
                  1190807,
                  "Finland",
                  1820
                ],
                [
                  929,
                  36.56365268,
                  62498,
                  "Iceland",
                  1820
                ],
                [
                  1320,
                  46.96239815,
                  995904,
                  "Norway",
                  1820
                ],
                [
                  1309,
                  35.9,
                  10508375,
                  "Poland",
                  1820
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Oceania",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  853,
                  34.05,
                  334002,
                  "Australia",
                  1820
                ],
                [
                  660,
                  34.05,
                  100000,
                  "New Zealand",
                  1820
                ]
              ],
              "symbolSize": "sizeFunction"
            }
          ],
          "symbolSize": "sizeFunction"
        },
        {
          "type": "scatter",
          "itemStyle": {
            "opacity": 0.8
          },
          "emphasis": {
            "focus": "none",
            "itemStyle": {
              "borderColor": "#eeeeee",
              "borderWidth": 4,
              "borderType": "solid",
              "opacity": 0.97
            },
            "label": {
              "show": true,
              "formatter": "{@[3]}",
              "color": "#fff"
            }
          },
          "data": [
            {
              "name": "Asia",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  986,
                  32,
                  402373519,
                  "China",
                  1830
                ],
                [
                  1562,
                  29.5734572,
                  34134430,
                  "Russia",
                  1830
                ],
                [
                  1052,
                  25.4424,
                  182214537,
                  "India",
                  1830
                ],
                [
                  1094,
                  36.41192615,
                  31330455,
                  "Japan",
                  1830
                ],
                [
                  561,
                  26,
                  4377749,
                  "North Korea",
                  1830
                ],
                [
                  559,
                  25.8,
                  9444785,
                  "South Korea",
                  1830
                ],
                [
                  1292,
                  35,
                  10398375,
                  "Turkey",
                  1830
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "North America",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  2552,
                  39.41,
                  13480460,
                  "United States",
                  1830
                ],
                [
                  1651,
                  39.04490323,
                  1202146,
                  "Canada",
                  1830
                ],
                [
                  1224,
                  35.74,
                  772812,
                  "Cuba",
                  1830
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Europe",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  3661,
                  43.01830917,
                  18533999,
                  "United Kingdom",
                  1830
                ],
                [
                  1799,
                  39.56,
                  33174810,
                  "France",
                  1830
                ],
                [
                  2024,
                  38.37,
                  28016571,
                  "Germany",
                  1830
                ],
                [
                  1360,
                  36.29644969,
                  1327905,
                  "Finland",
                  1830
                ],
                [
                  1036,
                  40.5022162,
                  65604,
                  "Iceland",
                  1830
                ],
                [
                  1403,
                  45.75400094,
                  1115667,
                  "Norway",
                  1830
                ],
                [
                  1360,
                  35.9,
                  11232857,
                  "Poland",
                  1830
                ]
              ],
              "symbolSize": "sizeFunction"
            },
            {
              "name": "Oceania",
              "type": "scatter",
              "itemStyle": {
                "opacity": 0.8
              },
              "data": [
                [
                  1399,
                  34.05,
                  348143,
                  "Australia",
                  1830
                ],
                [
                  661,
                  34.05,
                  91723,
                  "New Zealand",
                  1830
                ]
              ],
              "symbolSize": "sizeFunction"
            }
          ],
          "symbolSize": "sizeFunction"
        }
      ],
      "animationDurationUpdate": 1000,
      "animationEasingUpdate": "quinticInOut"
    },
    "options": [
      {
        "title": {
          "show": true,
          "text": "1900"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                894,
                32,
                395184556,
                "China",
                1900
              ],
              [
                3087,
                30.74960789,
                64836675,
                "Russia",
                1900
              ],
              [
                1194,
                18.35,
                243073946,
                "India",
                1900
              ],
              [
                1840,
                38.6,
                44040263,
                "Japan",
                1900
              ],
              [
                523,
                26,
                5124044,
                "North Korea",
                1900
              ],
              [
                520,
                25.8,
                9926633,
                "South Korea",
                1900
              ],
              [
                1985,
                35,
                13946634,
                "Turkey",
                1900
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                6819,
                48.92818182,
                77415610,
                "United States",
                1900
              ],
              [
                4858,
                48.288448,
                5530806,
                "Canada",
                1900
              ],
              [
                2756,
                33.11248,
                1762227,
                "Cuba",
                1900
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8013,
                46.32,
                37995759,
                "United Kingdom",
                1900
              ],
              [
                4314,
                45.08,
                40628638,
                "France",
                1900
              ],
              [
                4596,
                43.915,
                55293434,
                "Germany",
                1900
              ],
              [
                2789,
                41.8,
                2633389,
                "Finland",
                1900
              ],
              [
                2352,
                46.64,
                102913,
                "Iceland",
                1900
              ],
              [
                3643,
                53.47,
                2214923,
                "Norway",
                1900
              ],
              [
                2583,
                40.4326087,
                24700965,
                "Poland",
                1900
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                6688,
                49.92647059,
                3743708,
                "Australia",
                1900
              ],
              [
                7181,
                47.43846154,
                815519,
                "New Zealand",
                1900
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1910"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                991,
                32,
                417830774,
                "China",
                1910
              ],
              [
                3487,
                31.40217766,
                71044207,
                "Russia",
                1910
              ],
              [
                1391,
                23.18032,
                253761202,
                "India",
                1910
              ],
              [
                1998,
                39.9736,
                49314848,
                "Japan",
                1910
              ],
              [
                544,
                24.097344,
                5293486,
                "North Korea",
                1910
              ],
              [
                538,
                24.097344,
                10193929,
                "South Korea",
                1910
              ],
              [
                2144,
                35,
                14746479,
                "Turkey",
                1910
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8287,
                51.8,
                93559186,
                "United States",
                1910
              ],
              [
                6794,
                52.123024,
                7181200,
                "Canada",
                1910
              ],
              [
                3095,
                35.21936,
                2268558,
                "Cuba",
                1910
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8305,
                53.99,
                41804912,
                "United Kingdom",
                1910
              ],
              [
                4542,
                51.37,
                41294572,
                "France",
                1910
              ],
              [
                5162,
                48.40833333,
                64064129,
                "Germany",
                1910
              ],
              [
                3192,
                48.53,
                2930441,
                "Finland",
                1910
              ],
              [
                3012,
                52.67,
                109714,
                "Iceland",
                1910
              ],
              [
                4332,
                57.99,
                2383631,
                "Norway",
                1910
              ],
              [
                2846,
                43.45434783,
                26493422,
                "Poland",
                1910
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8695,
                55.21862745,
                4408209,
                "Australia",
                1910
              ],
              [
                8896,
                51.90128205,
                1044340,
                "New Zealand",
                1910
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1920"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1012,
                32,
                462750597,
                "China",
                1920
              ],
              [
                1489,
                20.5,
                77871987,
                "Russia",
                1920
              ],
              [
                1197,
                24.71866667,
                267795301,
                "India",
                1920
              ],
              [
                2496,
                42.04432,
                55545937,
                "Japan",
                1920
              ],
              [
                779,
                27.99984,
                6117873,
                "North Korea",
                1920
              ],
              [
                756,
                27.99984,
                11839704,
                "South Korea",
                1920
              ],
              [
                1525,
                29,
                14200404,
                "Turkey",
                1920
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                9181,
                55.4,
                108441644,
                "United States",
                1920
              ],
              [
                6430,
                56.569064,
                8764205,
                "Canada",
                1920
              ],
              [
                4042,
                37.38208,
                3067116,
                "Cuba",
                1920
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8316,
                56.6,
                43825720,
                "United Kingdom",
                1920
              ],
              [
                4550,
                51.6,
                39069937,
                "France",
                1920
              ],
              [
                4482,
                53.5,
                62277173,
                "Germany",
                1920
              ],
              [
                3097,
                47.55,
                3140763,
                "Finland",
                1920
              ],
              [
                2514,
                54.58,
                117013,
                "Iceland",
                1920
              ],
              [
                5483,
                58.89,
                2634635,
                "Norway",
                1920
              ],
              [
                3276,
                46.47608696,
                24166006,
                "Poland",
                1920
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                7867,
                60.51078431,
                5345428,
                "Australia",
                1920
              ],
              [
                9453,
                56.36410256,
                1236395,
                "New Zealand",
                1920
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1930"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1055,
                33.26984,
                481222579,
                "China",
                1930
              ],
              [
                3779,
                36.428,
                85369549,
                "Russia",
                1930
              ],
              [
                1244,
                28.8016,
                285470839,
                "India",
                1930
              ],
              [
                2592,
                46.65403,
                63863524,
                "Japan",
                1930
              ],
              [
                829,
                33.867168,
                7366694,
                "North Korea",
                1930
              ],
              [
                784,
                35.244168,
                13929869,
                "South Korea",
                1930
              ],
              [
                2323,
                35.7818,
                14930772,
                "Turkey",
                1930
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                10139,
                59.556,
                125055606,
                "United States",
                1930
              ],
              [
                7976,
                58.94,
                10450983,
                "Canada",
                1930
              ],
              [
                5027,
                42.03308,
                3918827,
                "Cuba",
                1930
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8722,
                60.85,
                45957969,
                "United Kingdom",
                1930
              ],
              [
                6835,
                56.938,
                41662571,
                "France",
                1930
              ],
              [
                6791,
                59.4991686,
                66439556,
                "Germany",
                1930
              ],
              [
                4489,
                54.438,
                3450505,
                "Finland",
                1930
              ],
              [
                4444,
                60.228,
                124871,
                "Iceland",
                1930
              ],
              [
                7369,
                64.074,
                2807922,
                "Norway",
                1930
              ],
              [
                3591,
                49.52382609,
                28169922,
                "Poland",
                1930
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                7714,
                64.998,
                6473803,
                "Australia",
                1930
              ],
              [
                8359,
                60.86092308,
                1491937,
                "New Zealand",
                1930
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1940"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                841,
                33.30311174,
                509858820,
                "China",
                1940
              ],
              [
                5632,
                41.056,
                93588981,
                "Russia",
                1940
              ],
              [
                1081,
                32.13056,
                324372335,
                "India",
                1940
              ],
              [
                3888,
                49.052,
                72709185,
                "Japan",
                1940
              ],
              [
                1418,
                41.22756,
                8870433,
                "North Korea",
                1940
              ],
              [
                1322,
                43.98156,
                15684579,
                "South Korea",
                1940
              ],
              [
                3163,
                34.5396,
                17777172,
                "Turkey",
                1940
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11320,
                63.192,
                134354133,
                "United States",
                1940
              ],
              [
                8871,
                63.99,
                11655920,
                "Canada",
                1940
              ],
              [
                4631,
                48.5472,
                4672303,
                "Cuba",
                1940
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                10935,
                60.89,
                48235963,
                "United Kingdom",
                1940
              ],
              [
                4821,
                49.586,
                40927546,
                "France",
                1940
              ],
              [
                9711,
                60.73821096,
                71244059,
                "Germany",
                1940
              ],
              [
                5439,
                46.586,
                3696232,
                "Finland",
                1940
              ],
              [
                5373,
                65.786,
                133257,
                "Iceland",
                1940
              ],
              [
                8349,
                65.818,
                2971546,
                "Norway",
                1940
              ],
              [
                3696,
                44.752,
                30041062,
                "Poland",
                1940
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                10057,
                66.336,
                7052012,
                "Australia",
                1940
              ],
              [
                10673,
                65.35774359,
                1629869,
                "New Zealand",
                1940
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1950"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                535,
                39.9994,
                544112923,
                "China",
                1950
              ],
              [
                7514,
                57.084,
                102798657,
                "Russia",
                1950
              ],
              [
                908,
                34.6284,
                376325205,
                "India",
                1950
              ],
              [
                2549,
                59.378,
                82199470,
                "Japan",
                1950
              ],
              [
                868,
                32.2464,
                10549469,
                "North Korea",
                1950
              ],
              [
                807,
                43.3774,
                19211386,
                "South Korea",
                1950
              ],
              [
                3103,
                42.5164,
                21238496,
                "Turkey",
                1950
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                15319,
                67.988,
                157813040,
                "United States",
                1950
              ],
              [
                12022,
                68.25,
                13736997,
                "Canada",
                1950
              ],
              [
                8630,
                59.8384,
                5919997,
                "Cuba",
                1950
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11135,
                68.58,
                50616012,
                "United Kingdom",
                1950
              ],
              [
                7914,
                66.594,
                41879607,
                "France",
                1950
              ],
              [
                7251,
                67.0215058,
                69786246,
                "Germany",
                1950
              ],
              [
                7198,
                64.144,
                4008299,
                "Finland",
                1950
              ],
              [
                8670,
                71.004,
                142656,
                "Iceland",
                1950
              ],
              [
                11452,
                71.492,
                3265278,
                "Norway",
                1950
              ],
              [
                4670,
                59.123,
                24824013,
                "Poland",
                1950
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12073,
                69.134,
                8177344,
                "Australia",
                1950
              ],
              [
                14391,
                69.392,
                1908001,
                "New Zealand",
                1950
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1951"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                582,
                40.936264,
                558820362,
                "China",
                1951
              ],
              [
                7424,
                57.5768,
                104306354,
                "Russia",
                1951
              ],
              [
                908,
                34.95868,
                382231042,
                "India",
                1951
              ],
              [
                2728,
                61.0706,
                83794452,
                "Japan",
                1951
              ],
              [
                729,
                23.12128,
                10248496,
                "North Korea",
                1951
              ],
              [
                753,
                40.88998,
                19304737,
                "South Korea",
                1951
              ],
              [
                3701,
                42.78358,
                21806355,
                "Turkey",
                1951
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16198,
                68.0836,
                159880756,
                "United States",
                1951
              ],
              [
                12419,
                68.519,
                14099994,
                "Canada",
                1951
              ],
              [
                9245,
                60.18618,
                6051290,
                "Cuba",
                1951
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11416,
                68.176,
                50620538,
                "United Kingdom",
                1951
              ],
              [
                8301,
                66.3308,
                42071027,
                "France",
                1951
              ],
              [
                7884,
                67.18742266,
                70111671,
                "Germany",
                1951
              ],
              [
                7738,
                65.5708,
                4049689,
                "Finland",
                1951
              ],
              [
                8350,
                71.0438,
                144928,
                "Iceland",
                1951
              ],
              [
                11986,
                72.4284,
                3300422,
                "Norway",
                1951
              ],
              [
                4801,
                59.7336,
                25264029,
                "Poland",
                1951
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12229,
                68.8378,
                8417640,
                "Australia",
                1951
              ],
              [
                13032,
                69.2654,
                1947802,
                "New Zealand",
                1951
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1952"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                631,
                41.873128,
                570764965,
                "China",
                1952
              ],
              [
                7775,
                57.9696,
                105969442,
                "Russia",
                1952
              ],
              [
                912,
                35.62796,
                388515758,
                "India",
                1952
              ],
              [
                3015,
                63.1132,
                85174909,
                "Japan",
                1952
              ],
              [
                784,
                20.99616,
                10049026,
                "North Korea",
                1952
              ],
              [
                809,
                40.40256,
                19566860,
                "South Korea",
                1952
              ],
              [
                3963,
                43.25976,
                22393931,
                "Turkey",
                1952
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16508,
                68.2992,
                162280405,
                "United States",
                1952
              ],
              [
                12911,
                68.718,
                14481497,
                "Canada",
                1952
              ],
              [
                9446,
                60.82796,
                6180031,
                "Cuba",
                1952
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11367,
                69.472,
                50683596,
                "United Kingdom",
                1952
              ],
              [
                8446,
                67.6276,
                42365756,
                "France",
                1952
              ],
              [
                8561,
                67.51033952,
                70421462,
                "Germany",
                1952
              ],
              [
                7914,
                66.4476,
                4095130,
                "Finland",
                1952
              ],
              [
                8120,
                72.4836,
                147681,
                "Iceland",
                1952
              ],
              [
                12316,
                72.5548,
                3333895,
                "Norway",
                1952
              ],
              [
                4832,
                60.9112,
                25738253,
                "Poland",
                1952
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12084,
                69.2416,
                8627052,
                "Australia",
                1952
              ],
              [
                13281,
                69.4988,
                1992619,
                "New Zealand",
                1952
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1953"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                692,
                42.809992,
                580886559,
                "China",
                1953
              ],
              [
                7981,
                58.7624,
                107729541,
                "Russia",
                1953
              ],
              [
                947,
                36.30024,
                395137696,
                "India",
                1953
              ],
              [
                3168,
                63.4558,
                86378004,
                "Japan",
                1953
              ],
              [
                1018,
                27.87104,
                9957244,
                "North Korea",
                1953
              ],
              [
                1051,
                45.41514,
                19979069,
                "South Korea",
                1953
              ],
              [
                4361,
                43.77694,
                22999018,
                "Turkey",
                1953
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16974,
                68.6448,
                164941716,
                "United States",
                1953
              ],
              [
                13158,
                69.097,
                14882050,
                "Canada",
                1953
              ],
              [
                8192,
                61.46974,
                6304524,
                "Cuba",
                1953
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11751,
                69.738,
                50792671,
                "United Kingdom",
                1953
              ],
              [
                8622,
                67.5644,
                42724452,
                "France",
                1953
              ],
              [
                9252,
                67.82125638,
                70720721,
                "Germany",
                1953
              ],
              [
                7877,
                66.5044,
                4142353,
                "Finland",
                1953
              ],
              [
                9169,
                72.3034,
                150779,
                "Iceland",
                1953
              ],
              [
                12707,
                73.0312,
                3366281,
                "Norway",
                1953
              ],
              [
                5027,
                62.0038,
                26236679,
                "Poland",
                1953
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12228,
                69.8254,
                8821938,
                "Australia",
                1953
              ],
              [
                13388,
                70.3522,
                2040015,
                "New Zealand",
                1953
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1954"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                694,
                44.663056,
                589955812,
                "China",
                1954
              ],
              [
                8234,
                60.7552,
                109537868,
                "Russia",
                1954
              ],
              [
                962,
                36.97552,
                402065915,
                "India",
                1954
              ],
              [
                3280,
                64.6984,
                87438747,
                "Japan",
                1954
              ],
              [
                1080,
                38.68292,
                9972437,
                "North Korea",
                1954
              ],
              [
                1070,
                48.42772,
                20520601,
                "South Korea",
                1954
              ],
              [
                3892,
                44.33512,
                23619469,
                "Turkey",
                1954
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16558,
                69.4304,
                167800046,
                "United States",
                1954
              ],
              [
                12687,
                69.956,
                15300472,
                "Canada",
                1954
              ],
              [
                8492,
                62.11152,
                6424173,
                "Cuba",
                1954
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12173,
                70.104,
                50938227,
                "United Kingdom",
                1954
              ],
              [
                9006,
                68.4412,
                43118110,
                "France",
                1954
              ],
              [
                9926,
                68.12117324,
                71015688,
                "Germany",
                1954
              ],
              [
                8470,
                67.4612,
                4189559,
                "Finland",
                1954
              ],
              [
                9821,
                73.3532,
                154110,
                "Iceland",
                1954
              ],
              [
                13247,
                73.1076,
                3398028,
                "Norway",
                1954
              ],
              [
                5224,
                63.0134,
                26750026,
                "Poland",
                1954
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12694,
                69.9792,
                9014508,
                "Australia",
                1954
              ],
              [
                14907,
                70.4656,
                2088194,
                "New Zealand",
                1954
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1955"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                706,
                46.1666,
                598574241,
                "China",
                1955
              ],
              [
                8787,
                63.148,
                111355224,
                "Russia",
                1955
              ],
              [
                963,
                37.6538,
                409280196,
                "India",
                1955
              ],
              [
                3464,
                65.861,
                88389994,
                "Japan",
                1955
              ],
              [
                1146,
                42.6208,
                10086993,
                "North Korea",
                1955
              ],
              [
                1139,
                49.9673,
                21168611,
                "South Korea",
                1955
              ],
              [
                4156,
                44.9343,
                24253200,
                "Turkey",
                1955
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17409,
                69.476,
                170796378,
                "United States",
                1955
              ],
              [
                13513,
                70.015,
                15733858,
                "Canada",
                1955
              ],
              [
                8757,
                62.7523,
                6539470,
                "Cuba",
                1955
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12531,
                70.07,
                51113711,
                "United Kingdom",
                1955
              ],
              [
                9453,
                68.708,
                43528065,
                "France",
                1955
              ],
              [
                10998,
                68.4080901,
                71313740,
                "Germany",
                1955
              ],
              [
                8802,
                67.258,
                4235423,
                "Finland",
                1955
              ],
              [
                10548,
                73.293,
                157584,
                "Iceland",
                1955
              ],
              [
                13438,
                73.314,
                3429431,
                "Norway",
                1955
              ],
              [
                5386,
                63.939,
                27269745,
                "Poland",
                1955
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13082,
                70.303,
                9212824,
                "Australia",
                1955
              ],
              [
                14883,
                70.599,
                2136000,
                "New Zealand",
                1955
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1956"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                736,
                48.536704,
                607167524,
                "China",
                1956
              ],
              [
                9465,
                64.6408,
                113152347,
                "Russia",
                1956
              ],
              [
                993,
                38.33608,
                416771502,
                "India",
                1956
              ],
              [
                3646,
                65.7236,
                89262489,
                "Japan",
                1956
              ],
              [
                1208,
                43.99568,
                10285936,
                "North Korea",
                1956
              ],
              [
                1130,
                50.64688,
                21897911,
                "South Korea",
                1956
              ],
              [
                4122,
                45.57448,
                24898170,
                "Turkey",
                1956
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17428,
                69.5516,
                173877321,
                "United States",
                1956
              ],
              [
                14253,
                70.004,
                16177451,
                "Canada",
                1956
              ],
              [
                9424,
                63.39308,
                6652086,
                "Cuba",
                1956
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12572,
                70.336,
                51315724,
                "United Kingdom",
                1956
              ],
              [
                9907,
                68.7448,
                43946534,
                "France",
                1956
              ],
              [
                11751,
                68.70345102,
                71623569,
                "Germany",
                1956
              ],
              [
                8971,
                67.8748,
                4279108,
                "Finland",
                1956
              ],
              [
                10575,
                72.9728,
                161136,
                "Iceland",
                1956
              ],
              [
                14054,
                73.3604,
                3460640,
                "Norway",
                1956
              ],
              [
                5530,
                64.7816,
                27787997,
                "Poland",
                1956
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13217,
                70.1868,
                9420602,
                "Australia",
                1956
              ],
              [
                15358,
                70.8624,
                2182943,
                "New Zealand",
                1956
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1957"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                780,
                48.587368,
                615992182,
                "China",
                1957
              ],
              [
                9496,
                63.7336,
                114909562,
                "Russia",
                1957
              ],
              [
                959,
                39.02236,
                424541513,
                "India",
                1957
              ],
              [
                3843,
                65.5962,
                90084818,
                "Japan",
                1957
              ],
              [
                1322,
                44.87056,
                10547389,
                "North Korea",
                1957
              ],
              [
                1226,
                51.33946,
                22681233,
                "South Korea",
                1957
              ],
              [
                4943,
                46.25466,
                25552398,
                "Turkey",
                1957
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17430,
                69.3272,
                176995108,
                "United States",
                1957
              ],
              [
                14177,
                69.923,
                16624767,
                "Canada",
                1957
              ],
              [
                10636,
                64.03586,
                6764787,
                "Cuba",
                1957
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12702,
                70.452,
                51543847,
                "United Kingdom",
                1957
              ],
              [
                10442,
                69.1816,
                44376073,
                "France",
                1957
              ],
              [
                12385,
                68.62532856,
                71955005,
                "Germany",
                1957
              ],
              [
                9302,
                67.3716,
                4320250,
                "Finland",
                1957
              ],
              [
                10295,
                73.4626,
                164721,
                "Iceland",
                1957
              ],
              [
                14379,
                73.3068,
                3491657,
                "Norway",
                1957
              ],
              [
                5730,
                65.5442,
                28297669,
                "Poland",
                1957
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13191,
                70.4706,
                9637408,
                "Australia",
                1957
              ],
              [
                15441,
                70.3858,
                2229176,
                "New Zealand",
                1957
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1958"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                889,
                48.143792,
                625155626,
                "China",
                1958
              ],
              [
                10037,
                66.6264,
                116615781,
                "Russia",
                1958
              ],
              [
                1005,
                39.71364,
                432601236,
                "India",
                1958
              ],
              [
                3996,
                67.2188,
                90883290,
                "Japan",
                1958
              ],
              [
                1498,
                45.33644,
                10843979,
                "North Korea",
                1958
              ],
              [
                1233,
                52.04404,
                23490027,
                "South Korea",
                1958
              ],
              [
                5252,
                46.97084,
                26214022,
                "Turkey",
                1958
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16961,
                69.5928,
                180107612,
                "United States",
                1958
              ],
              [
                14056,
                70.582,
                17067983,
                "Canada",
                1958
              ],
              [
                10501,
                64.67964,
                6881209,
                "Cuba",
                1958
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12672,
                70.628,
                51800117,
                "United Kingdom",
                1958
              ],
              [
                10681,
                70.4184,
                44827950,
                "France",
                1958
              ],
              [
                12884,
                69.36929231,
                72318498,
                "Germany",
                1958
              ],
              [
                9276,
                68.5084,
                4358901,
                "Finland",
                1958
              ],
              [
                10896,
                73.4224,
                168318,
                "Iceland",
                1958
              ],
              [
                14285,
                73.2932,
                3522361,
                "Norway",
                1958
              ],
              [
                5923,
                66.0188,
                28792427,
                "Poland",
                1958
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13545,
                71.0244,
                9859257,
                "Australia",
                1958
              ],
              [
                15688,
                71.0192,
                2275392,
                "New Zealand",
                1958
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1959"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                958,
                36.336856,
                634649557,
                "China",
                1959
              ],
              [
                9755,
                67.3692,
                118266807,
                "Russia",
                1959
              ],
              [
                1002,
                40.41292,
                440968677,
                "India",
                1959
              ],
              [
                4288,
                67.6114,
                91681713,
                "Japan",
                1959
              ],
              [
                1452,
                45.93132,
                11145152,
                "North Korea",
                1959
              ],
              [
                1212,
                52.76062,
                24295786,
                "South Korea",
                1959
              ],
              [
                4869,
                47.72102,
                26881379,
                "Turkey",
                1959
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17909,
                69.8084,
                183178348,
                "United States",
                1959
              ],
              [
                14289,
                70.621,
                17498573,
                "Canada",
                1959
              ],
              [
                9234,
                65.32842,
                7005486,
                "Cuba",
                1959
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13122,
                70.724,
                52088147,
                "United Kingdom",
                1959
              ],
              [
                10911,
                70.4552,
                45319442,
                "France",
                1959
              ],
              [
                13759,
                69.48021979,
                72724260,
                "Germany",
                1959
              ],
              [
                9751,
                68.6852,
                4395427,
                "Finland",
                1959
              ],
              [
                10865,
                72.6522,
                171919,
                "Iceland",
                1959
              ],
              [
                14797,
                73.4196,
                3552545,
                "Norway",
                1959
              ],
              [
                6009,
                65.6314,
                29266789,
                "Poland",
                1959
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                14076,
                70.5982,
                10079604,
                "Australia",
                1959
              ],
              [
                16454,
                70.9326,
                2322669,
                "New Zealand",
                1959
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1960"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                889,
                29.51112,
                644450173,
                "China",
                1960
              ],
              [
                10496,
                68.382,
                119860289,
                "Russia",
                1960
              ],
              [
                1048,
                41.1222,
                449661874,
                "India",
                1960
              ],
              [
                4756,
                67.904,
                92500754,
                "Japan",
                1960
              ],
              [
                1544,
                46.2922,
                11424179,
                "North Korea",
                1960
              ],
              [
                1178,
                53.4912,
                25074028,
                "South Korea",
                1960
              ],
              [
                4735,
                48.4992,
                27553280,
                "Turkey",
                1960
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18059,
                69.734,
                186176524,
                "United States",
                1960
              ],
              [
                14414,
                71,
                17909232,
                "Canada",
                1960
              ],
              [
                9213,
                65.9852,
                7141129,
                "Cuba",
                1960
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13697,
                70.94,
                52410496,
                "United Kingdom",
                1960
              ],
              [
                11642,
                70.672,
                45865699,
                "France",
                1960
              ],
              [
                14808,
                69.40190727,
                73179665,
                "Germany",
                1960
              ],
              [
                10560,
                68.882,
                4430228,
                "Finland",
                1960
              ],
              [
                10993,
                74.082,
                175520,
                "Iceland",
                1960
              ],
              [
                15542,
                73.436,
                3582016,
                "Norway",
                1960
              ],
              [
                6248,
                67.964,
                29716363,
                "Poland",
                1960
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                14346,
                71.042,
                10292328,
                "Australia",
                1960
              ],
              [
                16179,
                71.396,
                2371999,
                "New Zealand",
                1960
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1961"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                558,
                31.930824,
                654625069,
                "China",
                1961
              ],
              [
                10908,
                68.6248,
                121390327,
                "Russia",
                1961
              ],
              [
                1051,
                41.84348,
                458691457,
                "India",
                1961
              ],
              [
                5276,
                68.5566,
                93357259,
                "Japan",
                1961
              ],
              [
                1624,
                46.54408,
                11665593,
                "North Korea",
                1961
              ],
              [
                1201,
                54.23578,
                25808542,
                "South Korea",
                1961
              ],
              [
                4691,
                49.30038,
                28229291,
                "Turkey",
                1961
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18170,
                70.1396,
                189077076,
                "United States",
                1961
              ],
              [
                14545,
                71.229,
                18295922,
                "Canada",
                1961
              ],
              [
                9248,
                66.64998,
                7289828,
                "Cuba",
                1961
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13887,
                70.686,
                52765864,
                "United Kingdom",
                1961
              ],
              [
                12168,
                71.2588,
                46471083,
                "France",
                1961
              ],
              [
                15317,
                69.99702797,
                73686490,
                "Germany",
                1961
              ],
              [
                11286,
                68.9088,
                4463432,
                "Finland",
                1961
              ],
              [
                10801,
                73.4618,
                179106,
                "Iceland",
                1961
              ],
              [
                16425,
                73.4424,
                3610710,
                "Norway",
                1961
              ],
              [
                6669,
                68.0866,
                30138099,
                "Poland",
                1961
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                14126,
                71.3158,
                10494911,
                "Australia",
                1961
              ],
              [
                16664,
                71.1194,
                2423769,
                "New Zealand",
                1961
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1962"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                567,
                42.274688,
                665426760,
                "China",
                1962
              ],
              [
                11027,
                68.2776,
                122842753,
                "Russia",
                1962
              ],
              [
                1046,
                42.57776,
                468054145,
                "India",
                1962
              ],
              [
                5686,
                68.8392,
                94263646,
                "Japan",
                1962
              ],
              [
                1592,
                46.82096,
                11871720,
                "North Korea",
                1962
              ],
              [
                1182,
                54.99436,
                26495107,
                "South Korea",
                1962
              ],
              [
                4849,
                50.11556,
                28909985,
                "Turkey",
                1962
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18966,
                70.0252,
                191860710,
                "United States",
                1962
              ],
              [
                15276,
                71.258,
                18659663,
                "Canada",
                1962
              ],
              [
                9273,
                67.32476,
                7450404,
                "Cuba",
                1962
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13897,
                70.752,
                53146634,
                "United Kingdom",
                1962
              ],
              [
                12767,
                70.7956,
                47121575,
                "France",
                1962
              ],
              [
                15872,
                70.16889372,
                74238494,
                "Germany",
                1962
              ],
              [
                11560,
                68.6156,
                4494623,
                "Finland",
                1962
              ],
              [
                11489,
                73.6716,
                182640,
                "Iceland",
                1962
              ],
              [
                16793,
                73.3188,
                3638791,
                "Norway",
                1962
              ],
              [
                6511,
                67.7492,
                30530513,
                "Poland",
                1962
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                14742,
                71.0896,
                10691220,
                "Australia",
                1962
              ],
              [
                16646,
                71.3828,
                2477328,
                "New Zealand",
                1962
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1963"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                635,
                49.619432,
                677332765,
                "China",
                1963
              ],
              [
                10620,
                68.7404,
                124193114,
                "Russia",
                1963
              ],
              [
                1071,
                43.32404,
                477729958,
                "India",
                1963
              ],
              [
                6106,
                69.9218,
                95227653,
                "Japan",
                1963
              ],
              [
                1577,
                47.22984,
                12065470,
                "North Korea",
                1963
              ],
              [
                1305,
                55.76694,
                27143075,
                "South Korea",
                1963
              ],
              [
                5188,
                50.93674,
                29597047,
                "Turkey",
                1963
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                19497,
                69.8508,
                194513911,
                "United States",
                1963
              ],
              [
                15752,
                71.267,
                19007305,
                "Canada",
                1963
              ],
              [
                9244,
                68.00654,
                7618359,
                "Cuba",
                1963
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                14393,
                70.658,
                53537821,
                "United Kingdom",
                1963
              ],
              [
                13235,
                70.6524,
                47781535,
                "France",
                1963
              ],
              [
                16221,
                70.26131586,
                74820389,
                "Germany",
                1963
              ],
              [
                11858,
                69.0224,
                4522727,
                "Finland",
                1963
              ],
              [
                12447,
                72.9714,
                186056,
                "Iceland",
                1963
              ],
              [
                17347,
                72.9552,
                3666690,
                "Norway",
                1963
              ],
              [
                6836,
                68.6818,
                30893775,
                "Poland",
                1963
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                15357,
                71.1534,
                10892700,
                "Australia",
                1963
              ],
              [
                17340,
                71.4562,
                2530791,
                "New Zealand",
                1963
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1964"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                713,
                50.988016,
                690932043,
                "China",
                1964
              ],
              [
                11836,
                69.5332,
                125412397,
                "Russia",
                1964
              ],
              [
                1125,
                44.07932,
                487690114,
                "India",
                1964
              ],
              [
                6741,
                70.3944,
                96253064,
                "Japan",
                1964
              ],
              [
                1592,
                47.82972,
                12282421,
                "North Korea",
                1964
              ],
              [
                1380,
                56.55352,
                27770874,
                "South Korea",
                1964
              ],
              [
                5296,
                51.75292,
                30292969,
                "Turkey",
                1964
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20338,
                70.1364,
                197028908,
                "United States",
                1964
              ],
              [
                16464,
                71.646,
                19349346,
                "Canada",
                1964
              ],
              [
                9179,
                68.69332,
                7787149,
                "Cuba",
                1964
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                15067,
                71.444,
                53920055,
                "United Kingdom",
                1964
              ],
              [
                13969,
                71.6192,
                48402900,
                "France",
                1964
              ],
              [
                17100,
                70.82344196,
                75410766,
                "Germany",
                1964
              ],
              [
                12389,
                69.2292,
                4546343,
                "Finland",
                1964
              ],
              [
                13450,
                73.5612,
                189276,
                "Iceland",
                1964
              ],
              [
                18118,
                73.4516,
                3694987,
                "Norway",
                1964
              ],
              [
                7078,
                68.9144,
                31229448,
                "Poland",
                1964
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16098,
                70.8172,
                11114995,
                "Australia",
                1964
              ],
              [
                17837,
                71.4996,
                2581578,
                "New Zealand",
                1964
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1965"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                772,
                53.26108,
                706590947,
                "China",
                1965
              ],
              [
                12363,
                69.116,
                126483874,
                "Russia",
                1965
              ],
              [
                1053,
                44.8386,
                497920270,
                "India",
                1965
              ],
              [
                7048,
                70.447,
                97341852,
                "Japan",
                1965
              ],
              [
                1630,
                48.6336,
                12547524,
                "North Korea",
                1965
              ],
              [
                1416,
                57.3651,
                28392722,
                "South Korea",
                1965
              ],
              [
                5309,
                52.5551,
                31000167,
                "Turkey",
                1965
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                21361,
                70.212,
                199403532,
                "United States",
                1965
              ],
              [
                17243,
                71.745,
                19693538,
                "Canada",
                1965
              ],
              [
                9116,
                69.3761,
                7951928,
                "Cuba",
                1965
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                15292,
                71.43,
                54278349,
                "United Kingdom",
                1965
              ],
              [
                14514,
                71.456,
                48952283,
                "France",
                1965
              ],
              [
                17838,
                70.81075623,
                75990737,
                "Germany",
                1965
              ],
              [
                13006,
                68.986,
                4564690,
                "Finland",
                1965
              ],
              [
                14173,
                73.831,
                192251,
                "Iceland",
                1965
              ],
              [
                18980,
                73.568,
                3724065,
                "Norway",
                1965
              ],
              [
                7409,
                69.617,
                31539695,
                "Poland",
                1965
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16601,
                71.151,
                11368011,
                "Australia",
                1965
              ],
              [
                18632,
                71.433,
                2628003,
                "New Zealand",
                1965
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1966"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                826,
                54.364464,
                724490033,
                "China",
                1966
              ],
              [
                12823,
                69.1788,
                127396324,
                "Russia",
                1966
              ],
              [
                1037,
                45.59388,
                508402908,
                "India",
                1966
              ],
              [
                7724,
                71.2596,
                98494630,
                "Japan",
                1966
              ],
              [
                1616,
                49.60048,
                12864683,
                "North Korea",
                1966
              ],
              [
                1563,
                58.21268,
                29006181,
                "South Korea",
                1966
              ],
              [
                5906,
                53.33228,
                31718266,
                "Turkey",
                1966
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                22495,
                70.2276,
                201629471,
                "United States",
                1966
              ],
              [
                18022,
                71.874,
                20041006,
                "Canada",
                1966
              ],
              [
                9436,
                70.04688,
                8110428,
                "Cuba",
                1966
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                15494,
                71.346,
                54606608,
                "United Kingdom",
                1966
              ],
              [
                15158,
                71.8728,
                49411342,
                "France",
                1966
              ],
              [
                18262,
                70.92828395,
                76558016,
                "Germany",
                1966
              ],
              [
                13269,
                69.5028,
                4577033,
                "Finland",
                1966
              ],
              [
                15166,
                73.2208,
                194935,
                "Iceland",
                1966
              ],
              [
                19588,
                73.8444,
                3754010,
                "Norway",
                1966
              ],
              [
                7818,
                70.0296,
                31824145,
                "Poland",
                1966
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16756,
                70.9948,
                11657281,
                "Australia",
                1966
              ],
              [
                19467,
                71.2964,
                2668590,
                "New Zealand",
                1966
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1967"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                719,
                55.889368,
                744365635,
                "China",
                1967
              ],
              [
                13256,
                68.9616,
                128165823,
                "Russia",
                1967
              ],
              [
                1096,
                46.33916,
                519162069,
                "India",
                1967
              ],
              [
                8454,
                71.5522,
                99711082,
                "Japan",
                1967
              ],
              [
                1646,
                50.62536,
                13221826,
                "North Korea",
                1967
              ],
              [
                1621,
                59.09526,
                29606633,
                "South Korea",
                1967
              ],
              [
                6020,
                54.08346,
                32448404,
                "Turkey",
                1967
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                22803,
                70.5532,
                203713082,
                "United States",
                1967
              ],
              [
                18240,
                72.083,
                20389445,
                "Canada",
                1967
              ],
              [
                10372,
                70.69866,
                8263547,
                "Cuba",
                1967
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                15777,
                71.972,
                54904680,
                "United Kingdom",
                1967
              ],
              [
                15759,
                71.8696,
                49791771,
                "France",
                1967
              ],
              [
                18311,
                71.15404398,
                77106876,
                "Germany",
                1967
              ],
              [
                13477,
                69.6796,
                4584264,
                "Finland",
                1967
              ],
              [
                14734,
                73.7206,
                197356,
                "Iceland",
                1967
              ],
              [
                20686,
                73.9108,
                3784579,
                "Norway",
                1967
              ],
              [
                8044,
                69.7322,
                32085011,
                "Poland",
                1967
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17570,
                71.2786,
                11975795,
                "Australia",
                1967
              ],
              [
                18309,
                71.6798,
                2704205,
                "New Zealand",
                1967
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1968"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                669,
                56.860432,
                765570668,
                "China",
                1968
              ],
              [
                13902,
                68.9144,
                128837792,
                "Russia",
                1968
              ],
              [
                1095,
                47.07144,
                530274729,
                "India",
                1968
              ],
              [
                9439,
                71.8748,
                100988866,
                "Japan",
                1968
              ],
              [
                1673,
                51.61924,
                13608611,
                "North Korea",
                1968
              ],
              [
                1774,
                60.00184,
                30204127,
                "South Korea",
                1968
              ],
              [
                6295,
                54.80964,
                33196289,
                "Turkey",
                1968
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23647,
                70.2088,
                205687611,
                "United States",
                1968
              ],
              [
                18900,
                72.242,
                20739031,
                "Canada",
                1968
              ],
              [
                9626,
                71.32644,
                8413329,
                "Cuba",
                1968
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16357,
                71.598,
                55171084,
                "United Kingdom",
                1968
              ],
              [
                16321,
                71.8664,
                50126895,
                "France",
                1968
              ],
              [
                19254,
                70.80345367,
                77611000,
                "Germany",
                1968
              ],
              [
                13726,
                69.6364,
                4589226,
                "Finland",
                1968
              ],
              [
                13752,
                73.9304,
                199634,
                "Iceland",
                1968
              ],
              [
                21022,
                73.7872,
                3815399,
                "Norway",
                1968
              ],
              [
                8473,
                70.3748,
                32330582,
                "Poland",
                1968
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18261,
                70.9124,
                12305530,
                "Australia",
                1968
              ],
              [
                18082,
                71.3432,
                2738283,
                "New Zealand",
                1968
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1969"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                732,
                58.367416,
                787191243,
                "China",
                1969
              ],
              [
                13972,
                68.3872,
                129475269,
                "Russia",
                1969
              ],
              [
                1141,
                47.78972,
                541844848,
                "India",
                1969
              ],
              [
                10548,
                72.1074,
                102323674,
                "Japan",
                1969
              ],
              [
                1643,
                52.55012,
                14009168,
                "North Korea",
                1969
              ],
              [
                1998,
                60.91542,
                30811523,
                "South Korea",
                1969
              ],
              [
                6470,
                55.51382,
                33969201,
                "Turkey",
                1969
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                24147,
                70.4444,
                207599308,
                "United States",
                1969
              ],
              [
                19614,
                72.401,
                21089228,
                "Canada",
                1969
              ],
              [
                9377,
                71.92622,
                8563191,
                "Cuba",
                1969
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16616,
                71.554,
                55406435,
                "United Kingdom",
                1969
              ],
              [
                17339,
                71.6032,
                50466183,
                "France",
                1969
              ],
              [
                20409,
                70.65682236,
                78038271,
                "Germany",
                1969
              ],
              [
                15058,
                69.5132,
                4595807,
                "Finland",
                1969
              ],
              [
                13983,
                73.7002,
                201941,
                "Iceland",
                1969
              ],
              [
                21845,
                73.4936,
                3845932,
                "Norway",
                1969
              ],
              [
                8331,
                69.8674,
                32571673,
                "Poland",
                1969
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18949,
                71.3262,
                12621240,
                "Australia",
                1969
              ],
              [
                19745,
                71.7166,
                2775684,
                "New Zealand",
                1969
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1970"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                848,
                60,
                808510713,
                "China",
                1970
              ],
              [
                14915,
                68.5,
                130126383,
                "Russia",
                1970
              ],
              [
                1170,
                48.5,
                553943226,
                "India",
                1970
              ],
              [
                14203,
                72.2,
                103707537,
                "Japan",
                1970
              ],
              [
                1697,
                53.4,
                14410400,
                "North Korea",
                1970
              ],
              [
                2142,
                61.8,
                31437141,
                "South Korea",
                1970
              ],
              [
                6740,
                56.2,
                34772031,
                "Turkey",
                1970
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23908,
                70.7,
                209485807,
                "United States",
                1970
              ],
              [
                19842,
                72.6,
                21439200,
                "Canada",
                1970
              ],
              [
                8918,
                72.5,
                8715123,
                "Cuba",
                1970
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                16933,
                71.8,
                55611401,
                "United Kingdom",
                1970
              ],
              [
                18185,
                72.5,
                50843830,
                "France",
                1970
              ],
              [
                21218,
                70.9,
                78366605,
                "Germany",
                1970
              ],
              [
                16245,
                70.2,
                4606740,
                "Finland",
                1970
              ],
              [
                14937,
                73.8,
                204392,
                "Iceland",
                1970
              ],
              [
                22186,
                73.9,
                3875719,
                "Norway",
                1970
              ],
              [
                8705,
                70,
                32816751,
                "Poland",
                1970
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                19719,
                71,
                12904760,
                "Australia",
                1970
              ],
              [
                19200,
                71.5,
                2819548,
                "New Zealand",
                1970
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1971"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                876,
                60.6,
                829367784,
                "China",
                1971
              ],
              [
                15170,
                68.6,
                130808492,
                "Russia",
                1971
              ],
              [
                1154,
                48.9,
                566605402,
                "India",
                1971
              ],
              [
                14673,
                72.8,
                105142875,
                "Japan",
                1971
              ],
              [
                1699,
                54.6,
                14812363,
                "North Korea",
                1971
              ],
              [
                2427,
                62.3,
                32087884,
                "South Korea",
                1971
              ],
              [
                6765,
                56.9,
                35608079,
                "Turkey",
                1971
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                24350,
                71,
                211357912,
                "United States",
                1971
              ],
              [
                20688,
                72.9,
                21790338,
                "Canada",
                1971
              ],
              [
                9471,
                73.2,
                8869961,
                "Cuba",
                1971
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17207,
                72,
                55785325,
                "United Kingdom",
                1971
              ],
              [
                18891,
                72.6,
                51273975,
                "France",
                1971
              ],
              [
                21695,
                71,
                78584779,
                "Germany",
                1971
              ],
              [
                16564,
                70.5,
                4623389,
                "Finland",
                1971
              ],
              [
                16687,
                73.8,
                207050,
                "Iceland",
                1971
              ],
              [
                23239,
                74.1,
                3904750,
                "Norway",
                1971
              ],
              [
                9256,
                70.2,
                33068997,
                "Poland",
                1971
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20176,
                71.3,
                13150591,
                "Australia",
                1971
              ],
              [
                19871,
                71.6,
                2871810,
                "New Zealand",
                1971
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1972"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                843,
                61.1,
                849787991,
                "China",
                1972
              ],
              [
                15113,
                68.7,
                131517584,
                "Russia",
                1972
              ],
              [
                1125,
                49.3,
                579800632,
                "India",
                1972
              ],
              [
                15694,
                73.2,
                106616535,
                "Japan",
                1972
              ],
              [
                1730,
                55.7,
                15214615,
                "North Korea",
                1972
              ],
              [
                2760,
                62.8,
                32759447,
                "South Korea",
                1972
              ],
              [
                7186,
                57.7,
                36475356,
                "Turkey",
                1972
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                25374,
                71.3,
                213219515,
                "United States",
                1972
              ],
              [
                21532,
                72.9,
                22141998,
                "Canada",
                1972
              ],
              [
                9745,
                73.9,
                9025299,
                "Cuba",
                1972
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                17793,
                72,
                55927492,
                "United Kingdom",
                1972
              ],
              [
                19570,
                72.8,
                51741044,
                "France",
                1972
              ],
              [
                22497,
                71.2,
                78700104,
                "Germany",
                1972
              ],
              [
                17722,
                70.9,
                4644847,
                "Finland",
                1972
              ],
              [
                17413,
                73.9,
                209868,
                "Iceland",
                1972
              ],
              [
                24308,
                74.3,
                3932945,
                "Norway",
                1972
              ],
              [
                9854,
                70.6,
                33328713,
                "Poland",
                1972
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20385,
                71.7,
                13364238,
                "Australia",
                1972
              ],
              [
                20349,
                71.8,
                2930469,
                "New Zealand",
                1972
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1973"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                894,
                61.7,
                869474823,
                "China",
                1973
              ],
              [
                16236,
                68.7,
                132254362,
                "Russia",
                1973
              ],
              [
                1151,
                49.9,
                593451889,
                "India",
                1973
              ],
              [
                16731,
                73.5,
                108085729,
                "Japan",
                1973
              ],
              [
                1751,
                56.8,
                15603001,
                "North Korea",
                1973
              ],
              [
                3326,
                63.3,
                33435268,
                "South Korea",
                1973
              ],
              [
                7442,
                58.3,
                37366922,
                "Turkey",
                1973
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26567,
                71.6,
                215092900,
                "United States",
                1973
              ],
              [
                22797,
                73.1,
                22488744,
                "Canada",
                1973
              ],
              [
                10439,
                74.1,
                9176051,
                "Cuba",
                1973
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                19043,
                72,
                56039166,
                "United Kingdom",
                1973
              ],
              [
                20486,
                73.1,
                52214014,
                "France",
                1973
              ],
              [
                23461,
                71.5,
                78732884,
                "Germany",
                1973
              ],
              [
                18804,
                71.3,
                4668813,
                "Finland",
                1973
              ],
              [
                18360,
                74.1,
                212731,
                "Iceland",
                1973
              ],
              [
                25278,
                74.5,
                3959705,
                "Norway",
                1973
              ],
              [
                10504,
                70.9,
                33597810,
                "Poland",
                1973
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                21185,
                72,
                13552190,
                "Australia",
                1973
              ],
              [
                21342,
                71.8,
                2989985,
                "New Zealand",
                1973
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1974"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                888,
                62.1,
                888132761,
                "China",
                1974
              ],
              [
                16594,
                68.6,
                133012558,
                "Russia",
                1974
              ],
              [
                1139,
                50.4,
                607446519,
                "India",
                1974
              ],
              [
                16320,
                73.9,
                109495053,
                "Japan",
                1974
              ],
              [
                1782,
                57.9,
                15960127,
                "North Korea",
                1974
              ],
              [
                3673,
                63.9,
                34091816,
                "South Korea",
                1974
              ],
              [
                7991,
                58.9,
                38272701,
                "Turkey",
                1974
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26258,
                72.1,
                217001865,
                "United States",
                1974
              ],
              [
                23405,
                73.2,
                22823272,
                "Canada",
                1974
              ],
              [
                10805,
                74.3,
                9315371,
                "Cuba",
                1974
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18801,
                72.3,
                56122405,
                "United Kingdom",
                1974
              ],
              [
                20997,
                73.3,
                52647616,
                "France",
                1974
              ],
              [
                23662,
                71.8,
                78713928,
                "Germany",
                1974
              ],
              [
                19273,
                71.4,
                4691818,
                "Finland",
                1974
              ],
              [
                19123,
                74.3,
                215465,
                "Iceland",
                1974
              ],
              [
                26252,
                74.7,
                3984291,
                "Norway",
                1974
              ],
              [
                11020,
                71.2,
                33877397,
                "Poland",
                1974
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                21383,
                72.1,
                13725400,
                "Australia",
                1974
              ],
              [
                22131,
                72,
                3042573,
                "New Zealand",
                1974
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1975"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                920,
                62.6,
                905580445,
                "China",
                1975
              ],
              [
                16530,
                68.2,
                133788113,
                "Russia",
                1975
              ],
              [
                1212,
                50.9,
                621703641,
                "India",
                1975
              ],
              [
                16632,
                74.4,
                110804519,
                "Japan",
                1975
              ],
              [
                1844,
                58.9,
                16274740,
                "North Korea",
                1975
              ],
              [
                4108,
                64.4,
                34713078,
                "South Korea",
                1975
              ],
              [
                8381,
                59.5,
                39185637,
                "Turkey",
                1975
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                25934,
                72.6,
                218963561,
                "United States",
                1975
              ],
              [
                23593,
                73.6,
                23140609,
                "Canada",
                1975
              ],
              [
                11176,
                74.6,
                9438445,
                "Cuba",
                1975
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                18699,
                72.6,
                56179925,
                "United Kingdom",
                1975
              ],
              [
                20851,
                73.2,
                53010727,
                "France",
                1975
              ],
              [
                23630,
                71.9,
                78667327,
                "Germany",
                1975
              ],
              [
                19409,
                71.6,
                4711459,
                "Finland",
                1975
              ],
              [
                19023,
                74.7,
                217958,
                "Iceland",
                1975
              ],
              [
                27553,
                74.8,
                4006221,
                "Norway",
                1975
              ],
              [
                11430,
                70.9,
                34168112,
                "Poland",
                1975
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                21708,
                72.5,
                13892674,
                "Australia",
                1975
              ],
              [
                21467,
                72.1,
                3082883,
                "New Zealand",
                1975
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1976"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                891,
                62.4,
                921688199,
                "China",
                1976
              ],
              [
                17192,
                68,
                134583945,
                "Russia",
                1976
              ],
              [
                1201,
                51.4,
                636182810,
                "India",
                1976
              ],
              [
                17117,
                74.9,
                111992858,
                "Japan",
                1976
              ],
              [
                1851,
                59.8,
                16539029,
                "North Korea",
                1976
              ],
              [
                4614,
                64.9,
                35290737,
                "South Korea",
                1976
              ],
              [
                9142,
                60,
                40100696,
                "Turkey",
                1976
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                27041,
                72.9,
                220993166,
                "United States",
                1976
              ],
              [
                24563,
                73.9,
                23439940,
                "Canada",
                1976
              ],
              [
                11334,
                74.6,
                9544268,
                "Cuba",
                1976
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                19207,
                72.9,
                56212943,
                "United Kingdom",
                1976
              ],
              [
                21661,
                73.4,
                53293030,
                "France",
                1976
              ],
              [
                24904,
                72.3,
                78604473,
                "Germany",
                1976
              ],
              [
                19268,
                72,
                4726803,
                "Finland",
                1976
              ],
              [
                19978,
                75.2,
                220162,
                "Iceland",
                1976
              ],
              [
                29117,
                75,
                4025297,
                "Norway",
                1976
              ],
              [
                11605,
                70.8,
                34468877,
                "Poland",
                1976
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                22372,
                73,
                14054956,
                "Australia",
                1976
              ],
              [
                21749,
                72.3,
                3108745,
                "New Zealand",
                1976
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1977"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                904,
                63.3,
                936554514,
                "China",
                1977
              ],
              [
                17487,
                67.8,
                135406786,
                "Russia",
                1977
              ],
              [
                1266,
                52,
                650907559,
                "India",
                1977
              ],
              [
                17705,
                75.3,
                113067848,
                "Japan",
                1977
              ],
              [
                1884,
                60.7,
                16758826,
                "North Korea",
                1977
              ],
              [
                4964,
                65.4,
                35832213,
                "South Korea",
                1977
              ],
              [
                8863,
                60.9,
                41020211,
                "Turkey",
                1977
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                27990,
                73.2,
                223090871,
                "United States",
                1977
              ],
              [
                25095,
                74.2,
                23723801,
                "Canada",
                1977
              ],
              [
                11712,
                74.4,
                9634677,
                "Cuba",
                1977
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                19684,
                73.1,
                56224944,
                "United Kingdom",
                1977
              ],
              [
                22270,
                73.8,
                53509578,
                "France",
                1977
              ],
              [
                25678,
                72.6,
                78524727,
                "Germany",
                1977
              ],
              [
                19261,
                72.4,
                4738949,
                "Finland",
                1977
              ],
              [
                21583,
                75.6,
                222142,
                "Iceland",
                1977
              ],
              [
                30319,
                75.2,
                4041789,
                "Norway",
                1977
              ],
              [
                11713,
                70.6,
                34779313,
                "Poland",
                1977
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                22373,
                73.4,
                14211657,
                "Australia",
                1977
              ],
              [
                20623,
                72.4,
                3122551,
                "New Zealand",
                1977
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1978"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1016,
                63.7,
                950537317,
                "China",
                1978
              ],
              [
                17818,
                67.7,
                136259517,
                "Russia",
                1978
              ],
              [
                1305,
                52.6,
                665936435,
                "India",
                1978
              ],
              [
                18484,
                75.7,
                114054587,
                "Japan",
                1978
              ],
              [
                1809,
                61.5,
                16953621,
                "North Korea",
                1978
              ],
              [
                5373,
                66,
                36356187,
                "South Korea",
                1978
              ],
              [
                8400,
                61.4,
                41953105,
                "Turkey",
                1978
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                29281,
                73.5,
                225239456,
                "United States",
                1978
              ],
              [
                25853,
                74.4,
                23994948,
                "Canada",
                1978
              ],
              [
                12312,
                74.5,
                9711393,
                "Cuba",
                1978
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20337,
                73,
                56223974,
                "United Kingdom",
                1978
              ],
              [
                22928,
                74.1,
                53685486,
                "France",
                1978
              ],
              [
                26444,
                72.7,
                78426715,
                "Germany",
                1978
              ],
              [
                19608,
                72.9,
                4749940,
                "Finland",
                1978
              ],
              [
                22659,
                76,
                224019,
                "Iceland",
                1978
              ],
              [
                31348,
                75.3,
                4056280,
                "Norway",
                1978
              ],
              [
                12033,
                70.7,
                35100942,
                "Poland",
                1978
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                22763,
                73.8,
                14368543,
                "Australia",
                1978
              ],
              [
                20707,
                72.7,
                3129098,
                "New Zealand",
                1978
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1979"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1059,
                64,
                964155176,
                "China",
                1979
              ],
              [
                17632,
                67.4,
                137144808,
                "Russia",
                1979
              ],
              [
                1211,
                53.1,
                681358553,
                "India",
                1979
              ],
              [
                19346,
                76.1,
                114993274,
                "Japan",
                1979
              ],
              [
                2015,
                62.2,
                17151321,
                "North Korea",
                1979
              ],
              [
                5505,
                66.5,
                36889651,
                "South Korea",
                1979
              ],
              [
                8160,
                62,
                42912350,
                "Turkey",
                1979
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                29951,
                73.7,
                227411604,
                "United States",
                1979
              ],
              [
                26665,
                74.7,
                24257594,
                "Canada",
                1979
              ],
              [
                12519,
                74.6,
                9777287,
                "Cuba",
                1979
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20871,
                73.1,
                56220089,
                "United Kingdom",
                1979
              ],
              [
                23647,
                74.3,
                53857610,
                "France",
                1979
              ],
              [
                27515,
                72.9,
                78305017,
                "Germany",
                1979
              ],
              [
                20918,
                73.3,
                4762758,
                "Finland",
                1979
              ],
              [
                23523,
                76.4,
                225972,
                "Iceland",
                1979
              ],
              [
                32737,
                75.5,
                4069626,
                "Norway",
                1979
              ],
              [
                11703,
                70.7,
                35435627,
                "Poland",
                1979
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23697,
                74.2,
                14532401,
                "Australia",
                1979
              ],
              [
                21144,
                73,
                3135453,
                "New Zealand",
                1979
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1980"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1073,
                64.5,
                977837433,
                "China",
                1980
              ],
              [
                17557,
                67.3,
                138063062,
                "Russia",
                1980
              ],
              [
                1270,
                53.6,
                697229745,
                "India",
                1980
              ],
              [
                19741,
                76.3,
                115912104,
                "Japan",
                1980
              ],
              [
                1887,
                62.9,
                17372167,
                "North Korea",
                1980
              ],
              [
                4899,
                66.9,
                37451085,
                "South Korea",
                1980
              ],
              [
                7828,
                62.7,
                43905790,
                "Turkey",
                1980
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                29619,
                73.8,
                229588208,
                "United States",
                1980
              ],
              [
                26678,
                75,
                24515788,
                "Canada",
                1980
              ],
              [
                12284,
                74.6,
                9835177,
                "Cuba",
                1980
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20417,
                73.4,
                56221513,
                "United Kingdom",
                1980
              ],
              [
                23962,
                74.5,
                54053224,
                "France",
                1980
              ],
              [
                27765,
                73.1,
                78159527,
                "Germany",
                1980
              ],
              [
                21965,
                73.7,
                4779454,
                "Finland",
                1980
              ],
              [
                24580,
                76.7,
                228127,
                "Iceland",
                1980
              ],
              [
                34346,
                75.7,
                4082525,
                "Norway",
                1980
              ],
              [
                11307,
                70.6,
                35782855,
                "Poland",
                1980
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23872,
                74.5,
                14708323,
                "Australia",
                1980
              ],
              [
                21259,
                73.2,
                3146771,
                "New Zealand",
                1980
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1981"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1099,
                64.8,
                991553829,
                "China",
                1981
              ],
              [
                17619,
                67.5,
                139006739,
                "Russia",
                1981
              ],
              [
                1322,
                54.2,
                713561406,
                "India",
                1981
              ],
              [
                20413,
                76.7,
                116821569,
                "Japan",
                1981
              ],
              [
                2073,
                63.6,
                17623335,
                "North Korea",
                1981
              ],
              [
                5159,
                67.5,
                38046253,
                "South Korea",
                1981
              ],
              [
                8518,
                63.2,
                44936836,
                "Turkey",
                1981
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                30070,
                74,
                231765783,
                "United States",
                1981
              ],
              [
                27171,
                75.4,
                24768525,
                "Canada",
                1981
              ],
              [
                13224,
                74.6,
                9884219,
                "Cuba",
                1981
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20149,
                73.8,
                56231020,
                "United Kingdom",
                1981
              ],
              [
                24186,
                74.8,
                54279038,
                "France",
                1981
              ],
              [
                27846,
                73.4,
                77990369,
                "Germany",
                1981
              ],
              [
                22279,
                74,
                4800899,
                "Finland",
                1981
              ],
              [
                25312,
                76.9,
                230525,
                "Iceland",
                1981
              ],
              [
                34659,
                75.8,
                4095177,
                "Norway",
                1981
              ],
              [
                10610,
                71,
                36145211,
                "Poland",
                1981
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                24308,
                74.8,
                14898019,
                "Australia",
                1981
              ],
              [
                22191,
                73.5,
                3164965,
                "New Zealand",
                1981
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1982"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1175,
                65.2,
                1005328574,
                "China",
                1982
              ],
              [
                17951,
                67.9,
                139969243,
                "Russia",
                1982
              ],
              [
                1334,
                54.6,
                730303461,
                "India",
                1982
              ],
              [
                20951,
                77,
                117708919,
                "Japan",
                1982
              ],
              [
                2180,
                64.2,
                17899236,
                "North Korea",
                1982
              ],
              [
                5483,
                67.9,
                38665964,
                "South Korea",
                1982
              ],
              [
                8323,
                63.7,
                45997940,
                "Turkey",
                1982
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                29230,
                74.4,
                233953874,
                "United States",
                1982
              ],
              [
                26031,
                75.8,
                25017501,
                "Canada",
                1982
              ],
              [
                13421,
                74.7,
                9925618,
                "Cuba",
                1982
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                20607,
                74.1,
                56250124,
                "United Kingdom",
                1982
              ],
              [
                24753,
                75,
                54528408,
                "France",
                1982
              ],
              [
                27645,
                73.6,
                77812348,
                "Germany",
                1982
              ],
              [
                22873,
                74.3,
                4826135,
                "Finland",
                1982
              ],
              [
                25455,
                77.1,
                233121,
                "Iceland",
                1982
              ],
              [
                34704,
                75.9,
                4107655,
                "Norway",
                1982
              ],
              [
                10420,
                71.2,
                36517072,
                "Poland",
                1982
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23884,
                75,
                15101227,
                "Australia",
                1982
              ],
              [
                22436,
                73.7,
                3188664,
                "New Zealand",
                1982
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1983"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1229,
                65.6,
                1019698475,
                "China",
                1983
              ],
              [
                18417,
                67.7,
                140951400,
                "Russia",
                1983
              ],
              [
                1412,
                55.1,
                747374856,
                "India",
                1983
              ],
              [
                21446,
                77.1,
                118552097,
                "Japan",
                1983
              ],
              [
                2138,
                64.8,
                18191881,
                "North Korea",
                1983
              ],
              [
                6078,
                68.4,
                39295418,
                "South Korea",
                1983
              ],
              [
                8535,
                64.2,
                47072603,
                "Turkey",
                1983
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                30185,
                74.6,
                236161961,
                "United States",
                1983
              ],
              [
                26525,
                76.1,
                25272656,
                "Canada",
                1983
              ],
              [
                13669,
                74.6,
                9966733,
                "Cuba",
                1983
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                21357,
                74.3,
                56283959,
                "United Kingdom",
                1983
              ],
              [
                25188,
                75.2,
                54799049,
                "France",
                1983
              ],
              [
                28227,
                74,
                77657451,
                "Germany",
                1983
              ],
              [
                23351,
                74.5,
                4853196,
                "Finland",
                1983
              ],
              [
                24594,
                77.3,
                235860,
                "Iceland",
                1983
              ],
              [
                35932,
                76,
                4120386,
                "Norway",
                1983
              ],
              [
                10835,
                71.1,
                36879742,
                "Poland",
                1983
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23584,
                75.3,
                15318254,
                "Australia",
                1983
              ],
              [
                22808,
                73.9,
                3215826,
                "New Zealand",
                1983
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1984"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1456,
                66,
                1035328572,
                "China",
                1984
              ],
              [
                18527,
                67.4,
                141955200,
                "Russia",
                1984
              ],
              [
                1436,
                55.5,
                764664278,
                "India",
                1984
              ],
              [
                22268,
                77.4,
                119318921,
                "Japan",
                1984
              ],
              [
                2205,
                65.4,
                18487997,
                "North Korea",
                1984
              ],
              [
                6612,
                69,
                39912900,
                "South Korea",
                1984
              ],
              [
                8798,
                64.8,
                48138191,
                "Turkey",
                1984
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                32110,
                74.8,
                238404223,
                "United States",
                1984
              ],
              [
                27781,
                76.4,
                25546736,
                "Canada",
                1984
              ],
              [
                14019,
                74.4,
                10017061,
                "Cuba",
                1984
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                21904,
                74.6,
                56337848,
                "United Kingdom",
                1984
              ],
              [
                25497,
                75.5,
                55084677,
                "France",
                1984
              ],
              [
                29135,
                74.4,
                77566776,
                "Germany",
                1984
              ],
              [
                23926,
                74.6,
                4879222,
                "Finland",
                1984
              ],
              [
                25356,
                77.4,
                238647,
                "Iceland",
                1984
              ],
              [
                38057,
                76.1,
                4133833,
                "Norway",
                1984
              ],
              [
                11138,
                70.8,
                37208529,
                "Poland",
                1984
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                24934,
                75.5,
                15548591,
                "Australia",
                1984
              ],
              [
                23698,
                74.1,
                3243078,
                "New Zealand",
                1984
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1985"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1557,
                66.4,
                1052622410,
                "China",
                1985
              ],
              [
                18576,
                68.2,
                142975753,
                "Russia",
                1985
              ],
              [
                1462,
                55.9,
                782085127,
                "India",
                1985
              ],
              [
                23554,
                77.8,
                119988663,
                "Japan",
                1985
              ],
              [
                2121,
                65.9,
                18778101,
                "North Korea",
                1985
              ],
              [
                6970,
                69.5,
                40501917,
                "South Korea",
                1985
              ],
              [
                9163,
                65.2,
                49178079,
                "Turkey",
                1985
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                33065,
                74.8,
                240691557,
                "United States",
                1985
              ],
              [
                29016,
                76.5,
                25848173,
                "Canada",
                1985
              ],
              [
                14135,
                74.3,
                10082990,
                "Cuba",
                1985
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                22648,
                74.7,
                56415196,
                "United Kingdom",
                1985
              ],
              [
                25917,
                75.7,
                55379923,
                "France",
                1985
              ],
              [
                29851,
                74.6,
                77570009,
                "Germany",
                1985
              ],
              [
                24630,
                74.7,
                4902219,
                "Finland",
                1985
              ],
              [
                25997,
                77.6,
                241411,
                "Iceland",
                1985
              ],
              [
                40031,
                76.1,
                4148355,
                "Norway",
                1985
              ],
              [
                11159,
                70.7,
                37486105,
                "Poland",
                1985
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                25875,
                75.7,
                15791043,
                "Australia",
                1985
              ],
              [
                23750,
                74.2,
                3268192,
                "New Zealand",
                1985
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1986"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1604,
                66.8,
                1071834975,
                "China",
                1986
              ],
              [
                19221,
                69.8,
                144016095,
                "Russia",
                1986
              ],
              [
                1493,
                56.3,
                799607235,
                "India",
                1986
              ],
              [
                24116,
                78.1,
                120551455,
                "Japan",
                1986
              ],
              [
                2106,
                66.4,
                19058988,
                "North Korea",
                1986
              ],
              [
                7996,
                70,
                41059473,
                "South Korea",
                1986
              ],
              [
                9556,
                65.7,
                50187091,
                "Turkey",
                1986
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                33899,
                74.9,
                243032017,
                "United States",
                1986
              ],
              [
                29482,
                76.6,
                26181342,
                "Canada",
                1986
              ],
              [
                14025,
                74.5,
                10167998,
                "Cuba",
                1986
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                23516,
                74.9,
                56519444,
                "United Kingdom",
                1986
              ],
              [
                26453,
                76,
                55686610,
                "France",
                1986
              ],
              [
                30514,
                74.8,
                77671877,
                "Germany",
                1986
              ],
              [
                25133,
                74.7,
                4921293,
                "Finland",
                1986
              ],
              [
                27379,
                77.6,
                244145,
                "Iceland",
                1986
              ],
              [
                41450,
                76.1,
                4164166,
                "Norway",
                1986
              ],
              [
                11429,
                70.9,
                37703942,
                "Poland",
                1986
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26057,
                76,
                16047026,
                "Australia",
                1986
              ],
              [
                24180,
                74.2,
                3290132,
                "New Zealand",
                1986
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1987"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1652,
                67.2,
                1092646739,
                "China",
                1987
              ],
              [
                19355,
                70.1,
                145056221,
                "Russia",
                1987
              ],
              [
                1525,
                56.6,
                817232241,
                "India",
                1987
              ],
              [
                25018,
                78.4,
                121021830,
                "Japan",
                1987
              ],
              [
                2142,
                66.8,
                19334550,
                "North Korea",
                1987
              ],
              [
                9096,
                70.4,
                41588374,
                "South Korea",
                1987
              ],
              [
                10351,
                66.1,
                51168841,
                "Turkey",
                1987
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                34787,
                75,
                245425409,
                "United States",
                1987
              ],
              [
                30288,
                76.8,
                26541981,
                "Canada",
                1987
              ],
              [
                13805,
                74.6,
                10269276,
                "Cuba",
                1987
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                24551,
                75.1,
                56649375,
                "United Kingdom",
                1987
              ],
              [
                26963,
                76.4,
                56005443,
                "France",
                1987
              ],
              [
                30986,
                75.1,
                77864381,
                "Germany",
                1987
              ],
              [
                26086,
                74.7,
                4937259,
                "Finland",
                1987
              ],
              [
                29335,
                77.7,
                246867,
                "Iceland",
                1987
              ],
              [
                42225,
                76.1,
                4181326,
                "Norway",
                1987
              ],
              [
                11207,
                71.1,
                37867481,
                "Poland",
                1987
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26969,
                76.2,
                16314778,
                "Australia",
                1987
              ],
              [
                24222,
                74.4,
                3310408,
                "New Zealand",
                1987
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1988"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1597,
                67.5,
                1114162025,
                "China",
                1988
              ],
              [
                19660,
                70,
                146040116,
                "Russia",
                1988
              ],
              [
                1649,
                57,
                834944397,
                "India",
                1988
              ],
              [
                26724,
                78.6,
                121432942,
                "Japan",
                1988
              ],
              [
                2198,
                67.2,
                19610512,
                "North Korea",
                1988
              ],
              [
                10233,
                71,
                42085050,
                "South Korea",
                1988
              ],
              [
                10421,
                66.5,
                52126497,
                "Turkey",
                1988
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                35929,
                75,
                247865202,
                "United States",
                1988
              ],
              [
                31356,
                77.1,
                26919036,
                "Canada",
                1988
              ],
              [
                13925,
                74.6,
                10379080,
                "Cuba",
                1988
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                25750,
                75.3,
                56797704,
                "United Kingdom",
                1988
              ],
              [
                28101,
                76.6,
                56328053,
                "France",
                1988
              ],
              [
                31906,
                75.3,
                78146938,
                "Germany",
                1988
              ],
              [
                27282,
                74.8,
                4951886,
                "Finland",
                1988
              ],
              [
                28780,
                77.8,
                249563,
                "Iceland",
                1988
              ],
              [
                42101,
                76.3,
                4199817,
                "Norway",
                1988
              ],
              [
                11418,
                71.2,
                37990683,
                "Poland",
                1988
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                27757,
                76.4,
                16585905,
                "Australia",
                1988
              ],
              [
                24060,
                74.6,
                3332297,
                "New Zealand",
                1988
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1989"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1474,
                67.7,
                1135128009,
                "China",
                1989
              ],
              [
                19906,
                69.8,
                146895053,
                "Russia",
                1989
              ],
              [
                1723,
                57.3,
                852736160,
                "India",
                1989
              ],
              [
                28077,
                78.9,
                121831143,
                "Japan",
                1989
              ],
              [
                2257,
                67.6,
                19895390,
                "North Korea",
                1989
              ],
              [
                11002,
                71.5,
                42546704,
                "South Korea",
                1989
              ],
              [
                10103,
                66.9,
                53066569,
                "Turkey",
                1989
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36830,
                75.2,
                250340795,
                "United States",
                1989
              ],
              [
                31550,
                77.2,
                27296517,
                "Canada",
                1989
              ],
              [
                13829,
                74.7,
                10486110,
                "Cuba",
                1989
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26279,
                75.5,
                56953861,
                "United Kingdom",
                1989
              ],
              [
                28942,
                76.9,
                56643349,
                "France",
                1989
              ],
              [
                32706,
                75.4,
                78514790,
                "Germany",
                1989
              ],
              [
                28735,
                74.8,
                4967776,
                "Finland",
                1989
              ],
              [
                28629,
                78,
                252219,
                "Iceland",
                1989
              ],
              [
                42449,
                76.5,
                4219532,
                "Norway",
                1989
              ],
              [
                11212,
                71.1,
                38094812,
                "Poland",
                1989
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                28556,
                76.6,
                16849253,
                "Australia",
                1989
              ],
              [
                24206,
                75,
                3360350,
                "New Zealand",
                1989
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1990"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1516,
                68,
                1154605773,
                "China",
                1990
              ],
              [
                19349,
                69.6,
                147568552,
                "Russia",
                1990
              ],
              [
                1777,
                57.7,
                870601776,
                "India",
                1990
              ],
              [
                29550,
                79.1,
                122249285,
                "Japan",
                1990
              ],
              [
                2076,
                67.9,
                20194354,
                "North Korea",
                1990
              ],
              [
                12087,
                72,
                42972254,
                "South Korea",
                1990
              ],
              [
                10670,
                67.3,
                53994605,
                "Turkey",
                1990
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37062,
                75.4,
                252847810,
                "United States",
                1990
              ],
              [
                31163,
                77.4,
                27662440,
                "Canada",
                1990
              ],
              [
                13670,
                74.7,
                10582082,
                "Cuba",
                1990
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26424,
                75.7,
                57110117,
                "United Kingdom",
                1990
              ],
              [
                29476,
                77.1,
                56943299,
                "France",
                1990
              ],
              [
                31476,
                75.4,
                78958237,
                "Germany",
                1990
              ],
              [
                28599,
                75,
                4986705,
                "Finland",
                1990
              ],
              [
                28666,
                78.1,
                254830,
                "Iceland",
                1990
              ],
              [
                43296,
                76.8,
                4240375,
                "Norway",
                1990
              ],
              [
                10088,
                70.8,
                38195258,
                "Poland",
                1990
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                28604,
                77,
                17096869,
                "Australia",
                1990
              ],
              [
                24021,
                75.4,
                3397534,
                "New Zealand",
                1990
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1991"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1634,
                68.3,
                1172327831,
                "China",
                1991
              ],
              [
                18332,
                69.4,
                148040354,
                "Russia",
                1991
              ],
              [
                1760,
                58,
                888513869,
                "India",
                1991
              ],
              [
                30437,
                79.2,
                122702527,
                "Japan",
                1991
              ],
              [
                1973,
                68.2,
                20510208,
                "North Korea",
                1991
              ],
              [
                13130,
                72.5,
                43358716,
                "South Korea",
                1991
              ],
              [
                10568,
                67.6,
                54909508,
                "Turkey",
                1991
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36543,
                75.6,
                255367160,
                "United States",
                1991
              ],
              [
                30090,
                77.6,
                28014102,
                "Canada",
                1991
              ],
              [
                12113,
                74.7,
                10664577,
                "Cuba",
                1991
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26017,
                76,
                57264600,
                "United Kingdom",
                1991
              ],
              [
                29707,
                77.3,
                57226524,
                "France",
                1991
              ],
              [
                32844,
                75.6,
                79483739,
                "Germany",
                1991
              ],
              [
                26761,
                75.4,
                5009381,
                "Finland",
                1991
              ],
              [
                28272,
                78.3,
                257387,
                "Iceland",
                1991
              ],
              [
                44419,
                77.1,
                4262367,
                "Norway",
                1991
              ],
              [
                9347,
                70.7,
                38297549,
                "Poland",
                1991
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                28122,
                77.4,
                17325818,
                "Australia",
                1991
              ],
              [
                22636,
                75.8,
                3445596,
                "New Zealand",
                1991
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1992"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                1845,
                68.6,
                1188450231,
                "China",
                1992
              ],
              [
                15661,
                68,
                148322473,
                "Russia",
                1992
              ],
              [
                1821,
                58.3,
                906461358,
                "India",
                1992
              ],
              [
                30610,
                79.4,
                123180357,
                "Japan",
                1992
              ],
              [
                1745,
                68.4,
                20838082,
                "North Korea",
                1992
              ],
              [
                13744,
                73,
                43708170,
                "South Korea",
                1992
              ],
              [
                10920,
                67.9,
                55811134,
                "Turkey",
                1992
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37321,
                75.8,
                257908206,
                "United States",
                1992
              ],
              [
                29977,
                77.7,
                28353843,
                "Canada",
                1992
              ],
              [
                10637,
                74.8,
                10735775,
                "Cuba",
                1992
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26062,
                76.3,
                57419469,
                "United Kingdom",
                1992
              ],
              [
                30033,
                77.5,
                57495252,
                "France",
                1992
              ],
              [
                33221,
                75.9,
                80075940,
                "Germany",
                1992
              ],
              [
                25726,
                75.8,
                5034898,
                "Finland",
                1992
              ],
              [
                26977,
                78.5,
                259895,
                "Iceland",
                1992
              ],
              [
                45742,
                77.3,
                4285504,
                "Norway",
                1992
              ],
              [
                9553,
                71.1,
                38396826,
                "Poland",
                1992
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                27895,
                77.7,
                17538387,
                "Australia",
                1992
              ],
              [
                22651,
                76.1,
                3502765,
                "New Zealand",
                1992
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1993"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                2078,
                68.9,
                1202982955,
                "China",
                1993
              ],
              [
                14320,
                65.2,
                148435811,
                "Russia",
                1993
              ],
              [
                1871,
                58.6,
                924475633,
                "India",
                1993
              ],
              [
                30587,
                79.6,
                123658854,
                "Japan",
                1993
              ],
              [
                1619,
                68.6,
                21166230,
                "North Korea",
                1993
              ],
              [
                14466,
                73.5,
                44031222,
                "South Korea",
                1993
              ],
              [
                11569,
                68.3,
                56707454,
                "Turkey",
                1993
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37844,
                75.7,
                260527420,
                "United States",
                1993
              ],
              [
                30424,
                77.8,
                28680921,
                "Canada",
                1993
              ],
              [
                9001,
                74.8,
                10797556,
                "Cuba",
                1993
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                26688,
                76.5,
                57575969,
                "United Kingdom",
                1993
              ],
              [
                29719,
                77.7,
                57749881,
                "France",
                1993
              ],
              [
                32689,
                76.2,
                80675999,
                "Germany",
                1993
              ],
              [
                25414,
                76.2,
                5061465,
                "Finland",
                1993
              ],
              [
                27055,
                78.7,
                262383,
                "Iceland",
                1993
              ],
              [
                46765,
                77.6,
                4309606,
                "Norway",
                1993
              ],
              [
                9884,
                71.7,
                38485892,
                "Poland",
                1993
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                28732,
                78,
                17738428,
                "Australia",
                1993
              ],
              [
                23830,
                76.5,
                3564227,
                "New Zealand",
                1993
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1994"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                2323,
                69.3,
                1216067023,
                "China",
                1994
              ],
              [
                12535,
                63.6,
                148416292,
                "Russia",
                1994
              ],
              [
                1959,
                59,
                942604211,
                "India",
                1994
              ],
              [
                30746,
                79.8,
                124101546,
                "Japan",
                1994
              ],
              [
                1605,
                68.8,
                21478544,
                "North Korea",
                1994
              ],
              [
                15577,
                73.8,
                44342530,
                "South Korea",
                1994
              ],
              [
                10857,
                68.6,
                57608769,
                "Turkey",
                1994
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                38892,
                75.8,
                263301323,
                "United States",
                1994
              ],
              [
                31505,
                77.9,
                28995822,
                "Canada",
                1994
              ],
              [
                9018,
                74.8,
                10853435,
                "Cuba",
                1994
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                27691,
                76.7,
                57736667,
                "United Kingdom",
                1994
              ],
              [
                30303,
                77.9,
                57991973,
                "France",
                1994
              ],
              [
                33375,
                76.4,
                81206786,
                "Germany",
                1994
              ],
              [
                26301,
                76.5,
                5086499,
                "Finland",
                1994
              ],
              [
                27789,
                78.8,
                264893,
                "Iceland",
                1994
              ],
              [
                48850,
                77.8,
                4334434,
                "Norway",
                1994
              ],
              [
                10386,
                71.8,
                38553355,
                "Poland",
                1994
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                29580,
                78.2,
                17932214,
                "Australia",
                1994
              ],
              [
                24716,
                76.7,
                3623181,
                "New Zealand",
                1994
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1995"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                2551,
                69.6,
                1227841281,
                "China",
                1995
              ],
              [
                12013,
                64.2,
                148293265,
                "Russia",
                1995
              ],
              [
                2069,
                59.3,
                960874982,
                "India",
                1995
              ],
              [
                31224,
                79.9,
                124483305,
                "Japan",
                1995
              ],
              [
                1442,
                62.4,
                21763670,
                "North Korea",
                1995
              ],
              [
                16798,
                74.2,
                44652994,
                "South Korea",
                1995
              ],
              [
                11530,
                69,
                58522320,
                "Turkey",
                1995
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                39476,
                75.9,
                266275528,
                "United States",
                1995
              ],
              [
                32101,
                78,
                29299478,
                "Canada",
                1995
              ],
              [
                9195,
                74.9,
                10906048,
                "Cuba",
                1995
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                28317,
                76.8,
                57903790,
                "United Kingdom",
                1995
              ],
              [
                30823,
                78.1,
                58224051,
                "France",
                1995
              ],
              [
                33843,
                76.6,
                81612900,
                "Germany",
                1995
              ],
              [
                27303,
                76.7,
                5108176,
                "Finland",
                1995
              ],
              [
                27671,
                78.9,
                267454,
                "Iceland",
                1995
              ],
              [
                50616,
                78,
                4359788,
                "Norway",
                1995
              ],
              [
                11093,
                72,
                38591860,
                "Poland",
                1995
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                30359,
                78.4,
                18124770,
                "Australia",
                1995
              ],
              [
                25476,
                76.9,
                3674886,
                "New Zealand",
                1995
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1996"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                2775,
                69.9,
                1238234851,
                "China",
                1996
              ],
              [
                11597,
                65.9,
                148078355,
                "Russia",
                1996
              ],
              [
                2186,
                59.6,
                979290432,
                "India",
                1996
              ],
              [
                31958,
                80.3,
                124794817,
                "Japan",
                1996
              ],
              [
                1393,
                62.6,
                22016510,
                "North Korea",
                1996
              ],
              [
                17835,
                74.7,
                44967346,
                "South Korea",
                1996
              ],
              [
                12190,
                69.4,
                59451488,
                "Turkey",
                1996
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                40501,
                76.3,
                269483224,
                "United States",
                1996
              ],
              [
                32290,
                78.3,
                29590952,
                "Canada",
                1996
              ],
              [
                9871,
                75.2,
                10955372,
                "Cuba",
                1996
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                28998,
                76.9,
                58079322,
                "United Kingdom",
                1996
              ],
              [
                31141,
                78.4,
                58443318,
                "France",
                1996
              ],
              [
                34008,
                76.9,
                81870772,
                "Germany",
                1996
              ],
              [
                28210,
                76.9,
                5126021,
                "Finland",
                1996
              ],
              [
                28839,
                79.1,
                270089,
                "Iceland",
                1996
              ],
              [
                52892,
                78.1,
                4385951,
                "Norway",
                1996
              ],
              [
                11776,
                72.4,
                38599825,
                "Poland",
                1996
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                31145,
                78.6,
                18318340,
                "Australia",
                1996
              ],
              [
                25984,
                77.1,
                3717239,
                "New Zealand",
                1996
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1997"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                3000,
                70.3,
                1247259143,
                "China",
                1997
              ],
              [
                11779,
                67.4,
                147772805,
                "Russia",
                1997
              ],
              [
                2235,
                60,
                997817250,
                "India",
                1997
              ],
              [
                32391,
                80.6,
                125048424,
                "Japan",
                1997
              ],
              [
                1230,
                62.7,
                22240826,
                "North Korea",
                1997
              ],
              [
                18687,
                75.1,
                45283939,
                "South Korea",
                1997
              ],
              [
                12911,
                69.8,
                60394104,
                "Turkey",
                1997
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                41812,
                76.8,
                272882865,
                "United States",
                1997
              ],
              [
                33310,
                78.7,
                29871092,
                "Canada",
                1997
              ],
              [
                10106,
                75.3,
                11000431,
                "Cuba",
                1997
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                29662,
                77.2,
                58263858,
                "United Kingdom",
                1997
              ],
              [
                31756,
                78.7,
                58652709,
                "France",
                1997
              ],
              [
                34578,
                77.3,
                81993831,
                "Germany",
                1997
              ],
              [
                29884,
                77.1,
                5140755,
                "Finland",
                1997
              ],
              [
                30009,
                79.3,
                272798,
                "Iceland",
                1997
              ],
              [
                55386,
                78.2,
                4412958,
                "Norway",
                1997
              ],
              [
                12602,
                72.7,
                38583109,
                "Poland",
                1997
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                32013,
                78.9,
                18512971,
                "Australia",
                1997
              ],
              [
                26152,
                77.4,
                3752102,
                "New Zealand",
                1997
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1998"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                3205,
                70.7,
                1255262566,
                "China",
                1998
              ],
              [
                11173,
                67.6,
                147385440,
                "Russia",
                1998
              ],
              [
                2332,
                60.3,
                1016402907,
                "India",
                1998
              ],
              [
                31656,
                80.6,
                125266403,
                "Japan",
                1998
              ],
              [
                1267,
                62.8,
                22444986,
                "North Korea",
                1998
              ],
              [
                17493,
                75.4,
                45599569,
                "South Korea",
                1998
              ],
              [
                13008,
                70.4,
                61344874,
                "Turkey",
                1998
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                43166,
                77,
                276354096,
                "United States",
                1998
              ],
              [
                34389,
                78.9,
                30145148,
                "Canada",
                1998
              ],
              [
                10086,
                75.4,
                11041893,
                "Cuba",
                1998
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                30614,
                77.4,
                58456989,
                "United Kingdom",
                1998
              ],
              [
                32764,
                78.8,
                58867465,
                "France",
                1998
              ],
              [
                35254,
                77.7,
                82010184,
                "Germany",
                1998
              ],
              [
                31423,
                77.3,
                5153229,
                "Finland",
                1998
              ],
              [
                31601,
                79.5,
                275568,
                "Iceland",
                1998
              ],
              [
                56502,
                78.3,
                4440109,
                "Norway",
                1998
              ],
              [
                13225,
                73,
                38550777,
                "Poland",
                1998
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                33085,
                79.1,
                18709175,
                "Australia",
                1998
              ],
              [
                26077,
                77.8,
                3783516,
                "New Zealand",
                1998
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "1999"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                3419,
                71.1,
                1262713651,
                "China",
                1999
              ],
              [
                11925,
                66.2,
                146924174,
                "Russia",
                1999
              ],
              [
                2496,
                60.7,
                1034976626,
                "India",
                1999
              ],
              [
                31535,
                80.7,
                125481050,
                "Japan",
                1999
              ],
              [
                1377,
                63,
                22641747,
                "North Korea",
                1999
              ],
              [
                19233,
                75.8,
                45908307,
                "South Korea",
                1999
              ],
              [
                12381,
                70.3,
                62295617,
                "Turkey",
                1999
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                44673,
                77.1,
                279730801,
                "United States",
                1999
              ],
              [
                35810,
                79.1,
                30420216,
                "Canada",
                1999
              ],
              [
                10674,
                75.6,
                11080506,
                "Cuba",
                1999
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                31474,
                77.6,
                58657794,
                "United Kingdom",
                1999
              ],
              [
                33707,
                78.9,
                59107738,
                "France",
                1999
              ],
              [
                35931,
                77.9,
                81965830,
                "Germany",
                1999
              ],
              [
                32743,
                77.5,
                5164780,
                "Finland",
                1999
              ],
              [
                32521,
                79.7,
                278376,
                "Iceland",
                1999
              ],
              [
                57246,
                78.5,
                4466468,
                "Norway",
                1999
              ],
              [
                13824,
                73.2,
                38515359,
                "Poland",
                1999
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                34346,
                79.3,
                18906936,
                "Australia",
                1999
              ],
              [
                27371,
                78.1,
                3817489,
                "New Zealand",
                1999
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2000"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                3678,
                71.5,
                1269974572,
                "China",
                2000
              ],
              [
                13173,
                65.4,
                146400951,
                "Russia",
                2000
              ],
              [
                2548,
                61.1,
                1053481072,
                "India",
                2000
              ],
              [
                32193,
                81.1,
                125714674,
                "Japan",
                2000
              ],
              [
                1287,
                63.2,
                22840218,
                "North Korea",
                2000
              ],
              [
                20757,
                76.3,
                46206271,
                "South Korea",
                2000
              ],
              [
                13025,
                71.5,
                63240157,
                "Turkey",
                2000
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                45986,
                77.1,
                282895741,
                "United States",
                2000
              ],
              [
                37314,
                79.3,
                30701903,
                "Canada",
                2000
              ],
              [
                11268,
                75.9,
                11116787,
                "Cuba",
                2000
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                32543,
                77.8,
                58867004,
                "United Kingdom",
                2000
              ],
              [
                34774,
                79.1,
                59387183,
                "France",
                2000
              ],
              [
                36953,
                78.1,
                81895925,
                "Germany",
                2000
              ],
              [
                34517,
                77.8,
                5176482,
                "Finland",
                2000
              ],
              [
                33599,
                79.9,
                281214,
                "Iceland",
                2000
              ],
              [
                58699,
                78.7,
                4491572,
                "Norway",
                2000
              ],
              [
                14565,
                73.8,
                38486305,
                "Poland",
                2000
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                35253,
                79.7,
                19107251,
                "Australia",
                2000
              ],
              [
                27963,
                78.5,
                3858234,
                "New Zealand",
                2000
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2001"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                3955,
                71.9,
                1277188787,
                "China",
                2001
              ],
              [
                13902,
                65.1,
                145818121,
                "Russia",
                2001
              ],
              [
                2628,
                61.5,
                1071888190,
                "India",
                2001
              ],
              [
                32230,
                81.4,
                125974298,
                "Japan",
                2001
              ],
              [
                1368,
                63.3,
                23043441,
                "North Korea",
                2001
              ],
              [
                21536,
                76.8,
                46492324,
                "South Korea",
                2001
              ],
              [
                12106,
                72,
                64182694,
                "Turkey",
                2001
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                45978,
                77.1,
                285796198,
                "United States",
                2001
              ],
              [
                37563,
                79.5,
                30991344,
                "Canada",
                2001
              ],
              [
                11588,
                76.2,
                11151472,
                "Cuba",
                2001
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                33282,
                78,
                59080221,
                "United Kingdom",
                2001
              ],
              [
                35197,
                79.2,
                59711914,
                "France",
                2001
              ],
              [
                37517,
                78.3,
                81809438,
                "Germany",
                2001
              ],
              [
                35327,
                78.2,
                5188446,
                "Finland",
                2001
              ],
              [
                34403,
                80.2,
                284037,
                "Iceland",
                2001
              ],
              [
                59620,
                78.9,
                4514907,
                "Norway",
                2001
              ],
              [
                14744,
                74.3,
                38466543,
                "Poland",
                2001
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                35452,
                80.1,
                19308681,
                "Australia",
                2001
              ],
              [
                28752,
                78.8,
                3906911,
                "New Zealand",
                2001
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2002"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                4285,
                72.4,
                1284349938,
                "China",
                2002
              ],
              [
                14629,
                64.9,
                145195521,
                "Russia",
                2002
              ],
              [
                2684,
                61.9,
                1090189358,
                "India",
                2002
              ],
              [
                32248,
                81.7,
                126249509,
                "Japan",
                2002
              ],
              [
                1375,
                63.5,
                23248053,
                "North Korea",
                2002
              ],
              [
                23008,
                77.3,
                46769579,
                "South Korea",
                2002
              ],
              [
                12669,
                72.5,
                65125766,
                "Turkey",
                2002
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                46367,
                77.2,
                288470847,
                "United States",
                2002
              ],
              [
                38270,
                79.7,
                31288572,
                "Canada",
                2002
              ],
              [
                11715,
                76.6,
                11184540,
                "Cuba",
                2002
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                33954,
                78.2,
                59301235,
                "United Kingdom",
                2002
              ],
              [
                35333,
                79.4,
                60075783,
                "France",
                2002
              ],
              [
                37458,
                78.5,
                81699829,
                "Germany",
                2002
              ],
              [
                35834,
                78.5,
                5200632,
                "Finland",
                2002
              ],
              [
                34252,
                80.5,
                286865,
                "Iceland",
                2002
              ],
              [
                60152,
                79.2,
                4537240,
                "Norway",
                2002
              ],
              [
                14964,
                74.6,
                38454823,
                "Poland",
                2002
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36375,
                80.4,
                19514385,
                "Australia",
                2002
              ],
              [
                29637,
                79,
                3961695,
                "New Zealand",
                2002
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2003"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                4685,
                72.9,
                1291485488,
                "China",
                2003
              ],
              [
                15768,
                64.8,
                144583147,
                "Russia",
                2003
              ],
              [
                2850,
                62.4,
                1108369577,
                "India",
                2003
              ],
              [
                32721,
                81.8,
                126523884,
                "Japan",
                2003
              ],
              [
                1405,
                69.8,
                23449173,
                "North Korea",
                2003
              ],
              [
                23566,
                77.8,
                47043251,
                "South Korea",
                2003
              ],
              [
                13151,
                72.9,
                66060121,
                "Turkey",
                2003
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                47260,
                77.3,
                291005482,
                "United States",
                2003
              ],
              [
                38621,
                79.9,
                31596593,
                "Canada",
                2003
              ],
              [
                12123,
                76.8,
                11214837,
                "Cuba",
                2003
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                35250,
                78.5,
                59548421,
                "United Kingdom",
                2003
              ],
              [
                35371,
                79.7,
                60464857,
                "France",
                2003
              ],
              [
                37167,
                78.8,
                81569481,
                "Germany",
                2003
              ],
              [
                36461,
                78.6,
                5213800,
                "Finland",
                2003
              ],
              [
                34938,
                80.8,
                289824,
                "Iceland",
                2003
              ],
              [
                60351,
                79.5,
                4560947,
                "Norway",
                2003
              ],
              [
                15508,
                74.9,
                38451227,
                "Poland",
                2003
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37035,
                80.7,
                19735255,
                "Australia",
                2003
              ],
              [
                30404,
                79.3,
                4020195,
                "New Zealand",
                2003
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2004"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                5127,
                73.4,
                1298573031,
                "China",
                2004
              ],
              [
                16967,
                65,
                144043914,
                "Russia",
                2004
              ],
              [
                3029,
                62.8,
                1126419321,
                "India",
                2004
              ],
              [
                33483,
                82,
                126773081,
                "Japan",
                2004
              ],
              [
                1410,
                69.9,
                23639296,
                "North Korea",
                2004
              ],
              [
                24628,
                78.3,
                47320454,
                "South Korea",
                2004
              ],
              [
                14187,
                73.4,
                66973561,
                "Turkey",
                2004
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                48597,
                77.6,
                293530886,
                "United States",
                2004
              ],
              [
                39436,
                80.1,
                31918582,
                "Canada",
                2004
              ],
              [
                12791,
                76.9,
                11240680,
                "Cuba",
                2004
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                35910,
                78.8,
                59846226,
                "United Kingdom",
                2004
              ],
              [
                36090,
                80.1,
                60858654,
                "France",
                2004
              ],
              [
                37614,
                79.1,
                81417791,
                "Germany",
                2004
              ],
              [
                37783,
                78.6,
                5228842,
                "Finland",
                2004
              ],
              [
                37482,
                81.1,
                293084,
                "Iceland",
                2004
              ],
              [
                62370,
                79.7,
                4589241,
                "Norway",
                2004
              ],
              [
                16314,
                75,
                38454520,
                "Poland",
                2004
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                38130,
                81,
                19985475,
                "Australia",
                2004
              ],
              [
                31098,
                79.5,
                4078779,
                "New Zealand",
                2004
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2005"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                5675,
                73.9,
                1305600630,
                "China",
                2005
              ],
              [
                18118,
                64.8,
                143622566,
                "Russia",
                2005
              ],
              [
                3262,
                63.2,
                1144326293,
                "India",
                2005
              ],
              [
                33916,
                82.2,
                126978754,
                "Japan",
                2005
              ],
              [
                1464,
                70.1,
                23813324,
                "North Korea",
                2005
              ],
              [
                25541,
                78.8,
                47605863,
                "South Korea",
                2005
              ],
              [
                15176,
                73.8,
                67860617,
                "Turkey",
                2005
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                49762,
                77.7,
                296139635,
                "United States",
                2005
              ],
              [
                40284,
                80.3,
                32256333,
                "Canada",
                2005
              ],
              [
                14200,
                77.1,
                11261052,
                "Cuba",
                2005
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36665,
                79.1,
                60210012,
                "United Kingdom",
                2005
              ],
              [
                36395,
                80.4,
                61241700,
                "France",
                2005
              ],
              [
                37901,
                79.4,
                81246801,
                "Germany",
                2005
              ],
              [
                38700,
                78.8,
                5246368,
                "Finland",
                2005
              ],
              [
                39108,
                81.3,
                296745,
                "Iceland",
                2005
              ],
              [
                63573,
                80.1,
                4624388,
                "Norway",
                2005
              ],
              [
                16900,
                75,
                38463514,
                "Poland",
                2005
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                38840,
                81.2,
                20274282,
                "Australia",
                2005
              ],
              [
                31798,
                79.8,
                4134699,
                "New Zealand",
                2005
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2006"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                6360,
                74.4,
                1312600877,
                "China",
                2006
              ],
              [
                19660,
                66.1,
                143338407,
                "Russia",
                2006
              ],
              [
                3514,
                63.6,
                1162088305,
                "India",
                2006
              ],
              [
                34468,
                82.3,
                127136576,
                "Japan",
                2006
              ],
              [
                1461,
                70.2,
                23969897,
                "North Korea",
                2006
              ],
              [
                26734,
                79.2,
                47901643,
                "South Korea",
                2006
              ],
              [
                16013,
                74.3,
                68704721,
                "Turkey",
                2006
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                50599,
                77.8,
                298860519,
                "United States",
                2006
              ],
              [
                41012,
                80.5,
                32611436,
                "Canada",
                2006
              ],
              [
                15901,
                77.4,
                11275199,
                "Cuba",
                2006
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37504,
                79.3,
                60648850,
                "United Kingdom",
                2006
              ],
              [
                37001,
                80.7,
                61609991,
                "France",
                2006
              ],
              [
                39352,
                79.7,
                81055904,
                "Germany",
                2006
              ],
              [
                40115,
                79,
                5266600,
                "Finland",
                2006
              ],
              [
                39818,
                81.5,
                300887,
                "Iceland",
                2006
              ],
              [
                64573,
                80.4,
                4667105,
                "Norway",
                2006
              ],
              [
                17959,
                75,
                38478763,
                "Poland",
                2006
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                39416,
                81.4,
                20606228,
                "Australia",
                2006
              ],
              [
                32281,
                80,
                4187584,
                "New Zealand",
                2006
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2007"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                7225,
                74.9,
                1319625197,
                "China",
                2007
              ],
              [
                21374,
                67.2,
                143180249,
                "Russia",
                2007
              ],
              [
                3806,
                64,
                1179685631,
                "India",
                2007
              ],
              [
                35183,
                82.5,
                127250015,
                "Japan",
                2007
              ],
              [
                1392,
                70.3,
                24111945,
                "North Korea",
                2007
              ],
              [
                28063,
                79.5,
                48205062,
                "South Korea",
                2007
              ],
              [
                16551,
                74.7,
                69515492,
                "Turkey",
                2007
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                51011,
                78.1,
                301655953,
                "United States",
                2007
              ],
              [
                41432,
                80.6,
                32982275,
                "Canada",
                2007
              ],
              [
                17055,
                77.6,
                11284043,
                "Cuba",
                2007
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                38164,
                79.4,
                61151820,
                "United Kingdom",
                2007
              ],
              [
                37641,
                80.9,
                61966193,
                "France",
                2007
              ],
              [
                40693,
                79.8,
                80854515,
                "Germany",
                2007
              ],
              [
                42016,
                79.2,
                5289333,
                "Finland",
                2007
              ],
              [
                42598,
                81.8,
                305415,
                "Iceland",
                2007
              ],
              [
                65781,
                80.6,
                4716584,
                "Norway",
                2007
              ],
              [
                19254,
                75.1,
                38500356,
                "Poland",
                2007
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                40643,
                81.5,
                20975949,
                "Australia",
                2007
              ],
              [
                32928,
                80.1,
                4238021,
                "New Zealand",
                2007
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2008"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                7880,
                75.1,
                1326690636,
                "China",
                2008
              ],
              [
                22506,
                67.6,
                143123163,
                "Russia",
                2008
              ],
              [
                3901,
                64.4,
                1197070109,
                "India",
                2008
              ],
              [
                34800,
                82.6,
                127317900,
                "Japan",
                2008
              ],
              [
                1427,
                70.6,
                24243829,
                "North Korea",
                2008
              ],
              [
                28650,
                79.7,
                48509842,
                "South Korea",
                2008
              ],
              [
                16454,
                75.1,
                70344357,
                "Turkey",
                2008
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                50384,
                78.2,
                304473143,
                "United States",
                2008
              ],
              [
                41468,
                80.7,
                33363256,
                "Canada",
                2008
              ],
              [
                17765,
                77.8,
                11290239,
                "Cuba",
                2008
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37739,
                79.5,
                61689620,
                "United Kingdom",
                2008
              ],
              [
                37505,
                81,
                62309529,
                "France",
                2008
              ],
              [
                41199,
                80,
                80665906,
                "Germany",
                2008
              ],
              [
                42122,
                79.4,
                5314170,
                "Finland",
                2008
              ],
              [
                42294,
                82,
                310033,
                "Iceland",
                2008
              ],
              [
                65216,
                80.7,
                4771633,
                "Norway",
                2008
              ],
              [
                19996,
                75.3,
                38525752,
                "Poland",
                2008
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                41312,
                81.5,
                21370348,
                "Australia",
                2008
              ],
              [
                32122,
                80.2,
                4285380,
                "New Zealand",
                2008
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2009"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                8565,
                75.6,
                1333807063,
                "China",
                2009
              ],
              [
                20739,
                68.3,
                143126660,
                "Russia",
                2009
              ],
              [
                4177,
                64.7,
                1214182182,
                "India",
                2009
              ],
              [
                32880,
                82.8,
                127340884,
                "Japan",
                2009
              ],
              [
                1407,
                70.7,
                24371806,
                "North Korea",
                2009
              ],
              [
                28716,
                79.8,
                48807036,
                "South Korea",
                2009
              ],
              [
                15467,
                75.4,
                71261307,
                "Turkey",
                2009
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                48558,
                78.3,
                307231961,
                "United States",
                2009
              ],
              [
                39884,
                80.9,
                33746559,
                "Canada",
                2009
              ],
              [
                18035,
                77.9,
                11297442,
                "Cuba",
                2009
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                35840,
                79.7,
                62221164,
                "United Kingdom",
                2009
              ],
              [
                36215,
                81,
                62640901,
                "France",
                2009
              ],
              [
                38975,
                80,
                80519685,
                "Germany",
                2009
              ],
              [
                38455,
                79.7,
                5340485,
                "Finland",
                2009
              ],
              [
                39979,
                82.2,
                314336,
                "Iceland",
                2009
              ],
              [
                63354,
                80.8,
                4830371,
                "Norway",
                2009
              ],
              [
                20507,
                75.6,
                38551489,
                "Poland",
                2009
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                41170,
                81.6,
                21770690,
                "Australia",
                2009
              ],
              [
                31723,
                80.3,
                4329124,
                "New Zealand",
                2009
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2010"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                9430,
                75.9,
                1340968737,
                "China",
                2010
              ],
              [
                21664,
                68.7,
                143158099,
                "Russia",
                2010
              ],
              [
                4547,
                65.1,
                1230984504,
                "India",
                2010
              ],
              [
                34404,
                83,
                127319802,
                "Japan",
                2010
              ],
              [
                1393,
                70.8,
                24500506,
                "North Korea",
                2010
              ],
              [
                30440,
                80,
                49090041,
                "South Korea",
                2010
              ],
              [
                16674,
                75.7,
                72310416,
                "Turkey",
                2010
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                49373,
                78.5,
                309876170,
                "United States",
                2010
              ],
              [
                40773,
                81.1,
                34126173,
                "Canada",
                2010
              ],
              [
                18477,
                78,
                11308133,
                "Cuba",
                2010
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36240,
                80,
                62716684,
                "United Kingdom",
                2010
              ],
              [
                36745,
                81.2,
                62961136,
                "France",
                2010
              ],
              [
                40632,
                80.2,
                80435307,
                "Germany",
                2010
              ],
              [
                39425,
                80,
                5367693,
                "Finland",
                2010
              ],
              [
                38809,
                82.5,
                318042,
                "Iceland",
                2010
              ],
              [
                62946,
                80.9,
                4891251,
                "Norway",
                2010
              ],
              [
                21328,
                76.1,
                38574682,
                "Poland",
                2010
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                41330,
                81.7,
                22162863,
                "Australia",
                2010
              ],
              [
                31824,
                80.5,
                4369027,
                "New Zealand",
                2010
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2011"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                10274,
                76.1,
                1348174478,
                "China",
                2011
              ],
              [
                22570,
                69.4,
                143211476,
                "Russia",
                2011
              ],
              [
                4787,
                65.5,
                1247446011,
                "India",
                2011
              ],
              [
                34316,
                82.8,
                127252900,
                "Japan",
                2011
              ],
              [
                1397,
                71,
                24631359,
                "North Korea",
                2011
              ],
              [
                31327,
                80.3,
                49356692,
                "South Korea",
                2011
              ],
              [
                17908,
                76,
                73517002,
                "Turkey",
                2011
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                49781,
                78.7,
                312390368,
                "United States",
                2011
              ],
              [
                41567,
                81.3,
                34499905,
                "Canada",
                2011
              ],
              [
                19005,
                78.1,
                11323570,
                "Cuba",
                2011
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36549,
                80.4,
                63164949,
                "United Kingdom",
                2011
              ],
              [
                37328,
                81.4,
                63268405,
                "France",
                2011
              ],
              [
                42080,
                80.3,
                80424665,
                "Germany",
                2011
              ],
              [
                40251,
                80.3,
                5395816,
                "Finland",
                2011
              ],
              [
                39619,
                82.7,
                321030,
                "Iceland",
                2011
              ],
              [
                62737,
                81.1,
                4953945,
                "Norway",
                2011
              ],
              [
                22333,
                76.5,
                38594217,
                "Poland",
                2011
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                41706,
                81.8,
                22542371,
                "Australia",
                2011
              ],
              [
                32283,
                80.6,
                4404483,
                "New Zealand",
                2011
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2012"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11017,
                76.3,
                1355386952,
                "China",
                2012
              ],
              [
                23299,
                70.4,
                143287536,
                "Russia",
                2012
              ],
              [
                4967,
                65.9,
                1263589639,
                "India",
                2012
              ],
              [
                34988,
                83.2,
                127139821,
                "Japan",
                2012
              ],
              [
                1393,
                71.1,
                24763353,
                "North Korea",
                2012
              ],
              [
                31901,
                80.4,
                49608451,
                "South Korea",
                2012
              ],
              [
                18057,
                76.2,
                74849187,
                "Turkey",
                2012
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                50549,
                78.8,
                314799465,
                "United States",
                2012
              ],
              [
                41865,
                81.4,
                34868151,
                "Canada",
                2012
              ],
              [
                19586,
                78.2,
                11342631,
                "Cuba",
                2012
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36535,
                80.8,
                63573766,
                "United Kingdom",
                2012
              ],
              [
                37227,
                81.6,
                63561798,
                "France",
                2012
              ],
              [
                42959,
                80.5,
                80477952,
                "Germany",
                2012
              ],
              [
                39489,
                80.5,
                5424644,
                "Finland",
                2012
              ],
              [
                39925,
                82.8,
                323407,
                "Iceland",
                2012
              ],
              [
                63620,
                81.3,
                5018367,
                "Norway",
                2012
              ],
              [
                22740,
                76.7,
                38609486,
                "Poland",
                2012
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                42522,
                81.8,
                22911375,
                "Australia",
                2012
              ],
              [
                32806,
                80.6,
                4435883,
                "New Zealand",
                2012
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2013"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                11805,
                76.5,
                1362514260,
                "China",
                2013
              ],
              [
                23561,
                71.3,
                143367341,
                "Russia",
                2013
              ],
              [
                5244,
                66.2,
                1279498874,
                "India",
                2013
              ],
              [
                35614,
                83.3,
                126984964,
                "Japan",
                2013
              ],
              [
                1392,
                71.2,
                24895705,
                "North Korea",
                2013
              ],
              [
                32684,
                80.5,
                49846756,
                "South Korea",
                2013
              ],
              [
                18579,
                76.3,
                76223639,
                "Turkey",
                2013
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                51282,
                78.9,
                317135919,
                "United States",
                2013
              ],
              [
                42213,
                81.5,
                35230612,
                "Canada",
                2013
              ],
              [
                20122,
                78.3,
                11362505,
                "Cuba",
                2013
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                36908,
                81,
                63955654,
                "United Kingdom",
                2013
              ],
              [
                37309,
                81.7,
                63844529,
                "France",
                2013
              ],
              [
                42887,
                80.7,
                80565861,
                "Germany",
                2013
              ],
              [
                38788,
                80.6,
                5453061,
                "Finland",
                2013
              ],
              [
                40958,
                82.8,
                325392,
                "Iceland",
                2013
              ],
              [
                63322,
                81.4,
                5083450,
                "Norway",
                2013
              ],
              [
                23144,
                76.9,
                38618698,
                "Poland",
                2013
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                42840,
                81.8,
                23270465,
                "Australia",
                2013
              ],
              [
                33360,
                80.6,
                4465276,
                "New Zealand",
                2013
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2014"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                12609,
                76.7,
                1369435670,
                "China",
                2014
              ],
              [
                23293,
                72.21,
                143429435,
                "Russia",
                2014
              ],
              [
                5565,
                66.5,
                1295291543,
                "India",
                2014
              ],
              [
                35635,
                83.4,
                126794564,
                "Japan",
                2014
              ],
              [
                1391,
                71.3,
                25026772,
                "North Korea",
                2014
              ],
              [
                33629,
                80.6,
                50074401,
                "South Korea",
                2014
              ],
              [
                18884,
                76.4,
                77523788,
                "Turkey",
                2014
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                52118,
                79,
                319448634,
                "United States",
                2014
              ],
              [
                42817,
                81.6,
                35587793,
                "Canada",
                2014
              ],
              [
                20704,
                78.4,
                11379111,
                "Cuba",
                2014
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                37614,
                81.2,
                64331348,
                "United Kingdom",
                2014
              ],
              [
                37218,
                81.8,
                64121249,
                "France",
                2014
              ],
              [
                43444,
                80.9,
                80646262,
                "Germany",
                2014
              ],
              [
                38569,
                80.7,
                5479660,
                "Finland",
                2014
              ],
              [
                41237,
                82.8,
                327318,
                "Iceland",
                2014
              ],
              [
                64020,
                81.5,
                5147970,
                "Norway",
                2014
              ],
              [
                23952,
                77.1,
                38619974,
                "Poland",
                2014
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                43219,
                81.8,
                23622353,
                "Australia",
                2014
              ],
              [
                33538,
                80.6,
                4495482,
                "New Zealand",
                2014
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      },
      {
        "title": {
          "show": true,
          "text": "2015"
        },
        "series": [
          {
            "name": "Asia",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                13334,
                76.9,
                1376048943,
                "China",
                2015
              ],
              [
                23038,
                73.13,
                143456918,
                "Russia",
                2015
              ],
              [
                5903,
                66.8,
                1311050527,
                "India",
                2015
              ],
              [
                36162,
                83.5,
                126573481,
                "Japan",
                2015
              ],
              [
                1390,
                71.4,
                25155317,
                "North Korea",
                2015
              ],
              [
                34644,
                80.7,
                50293439,
                "South Korea",
                2015
              ],
              [
                19360,
                76.5,
                78665830,
                "Turkey",
                2015
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "North America",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                53354,
                79.1,
                321773631,
                "United States",
                2015
              ],
              [
                43294,
                81.7,
                35939927,
                "Canada",
                2015
              ],
              [
                21291,
                78.5,
                11389562,
                "Cuba",
                2015
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Europe",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                38225,
                81.4,
                64715810,
                "United Kingdom",
                2015
              ],
              [
                37599,
                81.9,
                64395345,
                "France",
                2015
              ],
              [
                44053,
                81.1,
                80688545,
                "Germany",
                2015
              ],
              [
                38923,
                80.8,
                5503457,
                "Finland",
                2015
              ],
              [
                42182,
                82.8,
                329425,
                "Iceland",
                2015
              ],
              [
                64304,
                81.6,
                5210967,
                "Norway",
                2015
              ],
              [
                24787,
                77.3,
                38611794,
                "Poland",
                2015
              ]
            ],
            "symbolSize": "sizeFunction"
          },
          {
            "name": "Oceania",
            "type": "scatter",
            "itemStyle": {
              "opacity": 0.8
            },
            "data": [
              [
                44056,
                81.8,
                23968973,
                "Australia",
                2015
              ],
              [
                34186,
                80.6,
                4528526,
                "New Zealand",
                2015
              ]
            ],
            "symbolSize": "sizeFunction"
          }
        ]
      }
    ]
  }


export default bubbleOption;