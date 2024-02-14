const percentageWomenCEOs = {
    "customOption": {
      "backgroundColor": "#eeeeee",
      "mode": "immediate",
      "yAxis": true,
      "xAxis": true
    },
    "title": {
      "show": true,
      "text": "Percentage of Women CEOs",
      "textStyle": {
        "fontSize": "24",
        "color": "#37c7c9"
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
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023"
      ],
      "axisLine": {
        "lineStyle": {
          "width": "2",
          "color": "#37c7c9",
          "type": "solid"
        },
        "show": true
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#37c7c9",
        "fontWeight": "bolder",
        "show": true
      },
      "name": "Year"
    },
    "yAxis": {
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#37c7c9",
        "fontWeight": "bolder",
        "show": true
      },
      "axisLine": {
        "show": true,
        "lineStyle": {
          "width": 3,
          "color": "#37c7c9",
          "type": "solid"
        }
      },
      "type": "value",
      "name": "Percentage(%)",
      "nameTextStyle": {
        "fontSize": "20"
      },
      "nameLocation": "middle",
      "nameGap": 25
    },
    "series": [
      {
        "name": "Percentage of Women CEOs",
        "type": "line",
        "stack": "Total",
        "smooth": true,
        "label": {
          "show": false,
          "position": "top"
        },
        "itemStyle": {
          "color": "#e01f7c",
          "opacity": 0.5
        },
        "lineStyle": {
          "width": "6"
        },
        "emphasis": {
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
          "data": [
            {
              "type": "max",
              "name": "",
              "symbol": "pin"
            },
            {
              "type": "min",
              "name": "1995",
              "symbol": "pin"
            }
          ]
        },
        "data": [
          0,
          0.2,
          0.4,
          0.4,
          0.4,
          0.4,
          0.8,
          1.2,
          1.4,
          1.6,
          1.8,
          2,
          2.4,
          2.4,
          3,
          3,
          2.4,
          3.6,
          4,
          4.8,
          4.8,
          4.2,
          6.4,
          4.8,
          6.6,
          7.4,
          8.2,
          8.8,
          10.6
        ],
        "areaStyle": {}
      }
    ]
  }

  const solarPrice = {
    "customOption": {
      "backgroundColor": "#eeeeee",
      "mode": "immediate",
      "yAxis": false,
      "xAxis": true
    },
    "title": {
      "show": false
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
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
      ],
      "axisLine": {
        "lineStyle": {
          "width": 3,
          "color": "#008080",
          "type": "solid"
        },
        "show": true
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#008080",
        "fontWeight": "bolder",
        "show": true
      },
      "name": "Year"
    },
    "yAxis": {
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#008080",
        "fontWeight": "bolder",
        "show": false
      },
      "axisLine": {
        "show": false,
        "lineStyle": {
          "width": 3,
          "color": "#008080",
          "type": "solid"
        }
      },
      "type": "value"
    },
    "series": [
      {
        "name": "Solar photovoltaic module price",
        "type": "line",
        "stack": "Total",
        "smooth": true,
        "label": {
          "show": false,
          "position": "top"
        },
        "areaStyle": {},
        "itemStyle": {
          "color": "#ff4500",
          "opacity": 0.5
        },
        "lineStyle": {
          "width": "4"
        },
        "emphasis": {
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
              "color":  "none"
          },
          "label": {
            "formatter": "{x|{b}} \n$ {y|{c}}",
            "rich": {
              "x": {
                "fontSize": 30,
                "align": "center"
              },
              "y": {
                 "fontSize": 40,
                "fontWeight": "bolder",
                "align": "center",
                "fontFamily": "Microsoft YaHei"
              }
            },
            "fontSize": 20,
            "fontWeight": "lighter"
          },
          "data": [
            {
              "type": "max",
              "name": "1975",
              "symbol": "pin"
            },
            {
              "type": "min",
              "name": "2022",
              "symbol": "pin"
            }
          ]
        },
        "data": [
          "125.83",
          "94.67",
          "69.07",
          "48.86",
          "41.06",
          "34.79",
          "27.82",
          "24.99",
          "20.17",
          "18.75",
          "16.36",
          "13.54",
          "11.51",
          "10.75",
          "11.11",
          "11.49",
          "10.64",
          "9.91",
          "9.27",
          "8.77",
          "8.11",
          "7.58",
          "7.55",
          "6.81",
          "6.29",
          "6.17",
          "5.97",
          "5.46",
          "5.19",
          "4.34",
          "4.39",
          "4.79",
          "4.82",
          "4.39",
          "2.93",
          "2.31",
          "1.89",
          "1.02",
          "0.78",
          "0.72",
          "0.67",
          "0.62",
          "0.52",
          "0.46",
          "0.42",
          "0.33",
          "0.26",
          "0.25"
        ]
      }
    ]
  }

const chinaPopulation = {
    "customOption": {
      "backgroundColor": "#eeeeee",
      "mode": "immediate",
      "yAxis": true,
      "xAxis": true
    },
    "title": {
      "show": true,
      "text": "China Population",
      "textStyle": {
        "fontSize": "32",
        "fontWeight": "normal",
        "color": "#dcdcdc"
      },
      "left": "left"
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
        "1800",
        "1810",
        "1820",
        "1830",
        "1840",
        "1850",
        "1860",
        "1870",
        "1880",
        "1890",
        "1900",
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1951",
        "1952",
        "1953",
        "1954",
        "1955",
        "1956",
        "1957",
        "1958",
        "1959",
        "1960",
        "1961",
        "1962",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015"
      ],
      "axisLine": {
        "lineStyle": {
          "width": 3,
          "color": "#dcdcdc",
          "type": "solid"
        },
        "show": true
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#dcdcdc",
        "fontWeight": "bolder",
        "show": true
      },
      "name": "Year"
    },
    "yAxis": {
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#dcdcdc",
        "fontWeight": "bolder",
        "show": true
      },
      "axisLine": {
        "show": true,
        "lineStyle": {
          "width": 3,
          "color": "#dcdcdc",
          "type": "solid"
        }
      },
      "type": "value"
    },
    "series": [
      {
        "name": "Population",
        "type": "line",
        "stack": "Total",
        "smooth": true,
        "label": {
          "show": false,
          "position": "top"
        },
        "areaStyle": {},
        "itemStyle": {
          "color": "#cb410b",
          "opacity": 0.5
        },
        "lineStyle": {
          "width": 3
        },
        "emphasis": {
          "focus": "none",
          "itemStyle": {
            "borderColor": "#FFBD33",
            "borderWidth": 4,
            "borderType": "solid",
            "color": "#CCCCFF",
            "opacity": 0.97
          }
        },
        "data": [
          "321675013",
          "350542958",
          "380055273",
          "402373519",
          "411213424",
          "402711280",
          "380047548",
          "363661158",
          "365544192",
          "377135349",
          "395184556",
          "417830774",
          "462750597",
          "481222579",
          "509858820",
          "544112923",
          "558820362",
          "570764965",
          "580886559",
          "589955812",
          "598574241",
          "607167524",
          "615992182",
          "625155626",
          "634649557",
          "644450173",
          "654625069",
          "665426760",
          "677332765",
          "690932043",
          "706590947",
          "724490033",
          "744365635",
          "765570668",
          "787191243",
          "808510713",
          "829367784",
          "849787991",
          "869474823",
          "888132761",
          "905580445",
          "921688199",
          "936554514",
          "950537317",
          "964155176",
          "977837433",
          "991553829",
          "1005328574",
          "1019698475",
          "1035328572",
          "1052622410",
          "1071834975",
          "1092646739",
          "1114162025",
          "1135128009",
          "1154605773",
          "1172327831",
          "1188450231",
          "1202982955",
          "1216067023",
          "1227841281",
          "1238234851",
          "1247259143",
          "1255262566",
          "1262713651",
          "1269974572",
          "1277188787",
          "1284349938",
          "1291485488",
          "1298573031",
          "1305600630",
          "1312600877",
          "1319625197",
          "1326690636",
          "1333807063",
          "1340968737",
          "1348174478",
          "1355386952",
          "1362514260",
          "1369435670",
          "1376048943"
        ]
      }
    ]
  }

const chinaIncome = {
    "customOption": {
      "backgroundColor": "#eeeeee",
      "mode": "immediate",
      "yAxis": true,
      "xAxis": true
    },
    "title": {
      "show": false
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
        "1800",
        "1810",
        "1820",
        "1830",
        "1840",
        "1850",
        "1860",
        "1870",
        "1880",
        "1890",
        "1900",
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1951",
        "1952",
        "1953",
        "1954",
        "1955",
        "1956",
        "1957",
        "1958",
        "1959",
        "1960",
        "1961",
        "1962",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015"
      ],
      "axisLine": {
        "lineStyle": {
          "width": 3,
          "color": "#37c7c9",
          "type": "solid"
        },
        "show": true
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#37c7c9",
        "fontWeight": "bolder",
        "show": true
      },
      "name": "Year"
    },
    "yAxis": {
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "fontSize": 16,
        "color": "#37c7c9",
        "fontWeight": "bolder",
        "show": true
      },
      "axisLine": {
        "show": true,
        "lineStyle": {
          "width": 3,
          "color": "#37c7c9",
          "type": "solid"
        }
      },
      "type": "value"
    },
    "series": [
      {
        "name": "Income",
        "type": "line",
        "stack": "Total",
        "smooth": true,
        "label": {
          "show": false,
          "position": "top"
        },
        "itemStyle": {
          "color": "#37a2ff",
          "opacity": 0.5
        },
        "lineStyle": {
          "width": "6"
        },
        "emphasis": {
          "focus": "none",
          "itemStyle": {
            "borderColor": "#FFBD33",
            "borderWidth": 4,
            "borderType": "solid",
            "color": "#CCCCFF",
            "opacity": 0.97
          }
        },
        "markArea":{
          "label": {
            "fontSize": 20
          },
          "itemStyle": {
            "color": "#ffcccc",
            "opacity": 0.5
          },
          "data": [[
            {"name": "China's 'Reform and Opening Up' ",
            "xAxis": "1978"
            },
            {
            "xAxis": "2015"
            }
          ]]
        },
        "data": [
          "985",
          "985",
          "985",
          "986",
          "986",
          "985",
          "1023",
          "1099",
          "1015",
          "918",
          "894",
          "991",
          "1012",
          "1055",
          "841",
          "535",
          "582",
          "631",
          "692",
          "694",
          "706",
          "736",
          "780",
          "889",
          "958",
          "889",
          "558",
          "567",
          "635",
          "713",
          "772",
          "826",
          "719",
          "669",
          "732",
          "848",
          "876",
          "843",
          "894",
          "888",
          "920",
          "891",
          "904",
          "1016",
          "1059",
          "1073",
          "1099",
          "1175",
          "1229",
          "1456",
          "1557",
          "1604",
          "1652",
          "1597",
          "1474",
          "1516",
          "1634",
          "1845",
          "2078",
          "2323",
          "2551",
          "2775",
          "3000",
          "3205",
          "3419",
          "3678",
          "3955",
          "4285",
          "4685",
          "5127",
          "5675",
          "6360",
          "7225",
          "7880",
          "8565",
          "9430",
          "10274",
          "11017",
          "11805",
          "12609",
          "13334"
        ],
        "opacity": 0.52
      }
    ]
  }


export default [
    {data: percentageWomenCEOs, name: "The number of female CEOs in the top companies in the U.S. has shown a gradual increase over the years, especially in the Fortune 500 companies. According to data from the Pew Research Center, the percentage of female CEOs in Fortune 500 companies has risen from 0% in 1995 to 10.60% in 2023. This data indicates a steady, although slow, increase in the representation of women in top executive positions in some of the largest companies in the U.S."},
    {
        data: solarPrice,
        name: "The data on solar photovoltaic module prices from 1975 to 2022 shows a significant decline, indicating major advancements in solar technology. Starting at $125.83 per unit in 1975, prices steadily decreased due to technological improvements and larger-scale production. By 2022, the cost dramatically dropped to just $0.25 per unit, highlighting solar power's evolution from a niche, expensive option to a highly affordable and sustainable energy source."
    },
    {
        data: chinaPopulation,
        name: "China's population has undergone substantial changes since 1800, starting at approximately 322 million. It faced a decline mid-19th century but rebounded to 418 million by 1910. The 20th century witnessed a rapid increase, with the population surpassing 1 billion by the 1980s. Growth rates peaked in the 1960s due to a post-war baby boom and improved healthcare. Initiatives like the one-child policy curbed the growth, yet by 2015, the population reached approximately 1.38 billion, showcasing China's significant demographic evolution."
    },
    {
        data: chinaIncome,
        name: "China's income per capita has increased significantly since 1800, starting at $985 and reaching $13,334 by 2015. The 20th century witnessed a steady increase, with the income per capita reaching $1,016 by 1970. The 1980s saw a significant increase, with the income per capita reaching $3,000 by 1990. The 21st century witnessed a rapid increase, with the income per capita reaching $13,334 by 2015, highlighting China's economic growth and development."
    }
]
