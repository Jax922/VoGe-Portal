import scriptTemplate from "./scriptTemplate";

function getRandomElement(arr) {
    if (arr && arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    return null;
}

const defaultStoryTimeline = [
    {
      "nodeName": "Warm-up",
      "isShow": true,
      "contents": [
        {
          "type": "Warm-up",
          "timeNode": "Warm-up",
          "script": getRandomElement(scriptTemplate.warmups)
        }
      ]
    },
    {
      "nodeName": "X-Axis",
      "isShow": true,
      "mode": "combineAxis", //"splitAxis"
      "contents": [
        {
          "type": "X-Axis",
          "timeNode": "X-Axis Line",
          "script": getRandomElement(scriptTemplate.XAxisLines)
        },
        {
          "type": "X-Axis",
          "timeNode": "X-Axis Tick",
          "script": getRandomElement(scriptTemplate.XAxisTicks)
        }
      ]
    },
    {
      "nodeName": "Y-Axis",
      "isShow": true,
      "mode": "combineAxis", //"splitAxis"
      "contents": [
        {
            "type": "Y-Axis",
          "timeNode": "Y-Axis Line",
          "script": getRandomElement(scriptTemplate.YAxisLines)
        },
        {
            "type": "Y-Axis",
          "timeNode": "Y-Axis Tick",
          "script": getRandomElement(scriptTemplate.YAxisLabels)
        }
      ]
    },
    {
      "nodeName": "Data Element",
      "isShow": true,
      "contents": [
      ]

    },
    {
      "nodeName": "Ending",
      "isShow": true,
      "contents": [
        {
            "type": "Ending",
          "timeNode": "Ending",
          "script": getRandomElement(scriptTemplate.endings)
        }
      ]
    }
  ];


export default {defaultStoryTimeline};