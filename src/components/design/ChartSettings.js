import { init } from "echarts";
import React, { useState, useEffect, useRef} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import theme from "./theme";
import { set, update } from "lodash";
import { Popover } from 'antd';

const content = (
    <div>
      <p className="nluModeExplanation">
            {/* <strong>Deep Learning Model + Keyword Matching:</strong> This mode combines the power of deep learning models with keyword matching to provide high accuracy and flexibility in understanding natural language. <font color="red">
                We recommend this mode for most use cases, because we train our NLU model with a wide range of natural language from data visualization presentation domain.
            </font><br />
            <strong>Keyword Matching Only:</strong> This mode relies solely on keyword matching to interpret user voice. It's faster and simpler but may not handle complex queries as effectively. */}
            <strong>Line by Line:</strong> Mention both an x-axis tick and the specific line's legend name to display data points for that selected line only. When you need to dive deeper into a particular dataset, this mode allows for focused analysis.
            <br />
            <strong>All-at-Once:</strong> By simply stating an x-axis tick, you can view data points for all available lines on the chart. Ideal for comparing trends across different datasets at a glance.
        </p>
    </div>
  );

function hiddleAxis(name, data, show) {

    if (name === "yAxis") {
        if (data.yAxis) {
            if (!data.yAxis.axisLabel) {
                data.yAxis.axisLabel = {show: show};
            } else {
                data.yAxis.axisLabel.show = show;
            }
            if (!data.yAxis.axisLine) {
                data.yAxis.axisLine = {show: show};
            } else {
                data.yAxis.axisLine.show = show;
            }
        }
    }
    if (name === "xAxis") {
        if (data.xAxis) {
            if (!data.xAxis.axisLabel) {
                data.xAxis.axisLabel = {show: show};
            } else {
                data.xAxis.axisLabel.show = show;
            }
            if (!data.xAxis.axisLine) {
                data.xAxis.axisLine = {show: show};
            } else {
                data.xAxis.axisLine.show = show;
            }
        }
    }
    return data;
}

function updateThemeColor(option, theme) {
    const xAxisLineColor = theme["xAxisLine"];
    const xAxisLabelColor = theme["xAxisLabel"];
    const yAxisLineColor = theme["yAxisLine"];
    const yAxisLabelColor = theme["yAxisLabel"];
    const titleColor = theme["title"];
    const markLabelColor = theme["markLabel"];
    const dataColor = theme["data"];
    const emphasisBorderColor = theme["emphasisBorderColor"];

    if (option.title) {
        if (option.title.textStyle) {
            option.title.textStyle.color = titleColor;
        } else {
            option.title.textStyle = {color: titleColor};
        }
    } else {
        option.title = {textStyle: {color: titleColor}};
    }

    if (option.xAxis) {
        if (option.xAxis.axisLabel) {
            option.xAxis.axisLabel.color = xAxisLabelColor;
        } else {
            option.xAxis.axisLabel = {color: xAxisLabelColor};
        }

        if (option.xAxis.axisLine) {
            option.xAxis.axisLine.lineStyle.color = xAxisLineColor;
        } else {
            option.xAxis.axisLine = {lineStyle: {color: xAxisLineColor}};
        }
    } else {
        option.xAxis = {
            axisLabel: {color: xAxisLabelColor},
            axisLine: {lineStyle: {color: xAxisLineColor}},
        };
    }

    if (option.yAxis) {
        if (option.yAxis.axisLabel) {
            option.yAxis.axisLabel.color = yAxisLabelColor;
        } else {
            option.yAxis.axisLabel = {color: yAxisLabelColor};
        }

        if (option.yAxis.axisLine) {
            option.yAxis.axisLine.lineStyle.color = yAxisLineColor;
        } else {
            option.yAxis.axisLine = {lineStyle: {color: yAxisLineColor}};
        }
    } else {
        option.yAxis = {
            axisLabel: {color: yAxisLabelColor},
            axisLine: {lineStyle: {color: yAxisLineColor}},
        };
    }

    for (let i = 0; i < option.series.length; i++) {
        // if (option.series[i].markPoint) {
        //     option.series[i].markPoint.color = markLabelColor;
        // } else {
        //     option.series[i].markPoint = {color: markLabelColor};
        // }
        if (option.series[i].itemStyle) {
            option.series[i].itemStyle.color = dataColor[i];
        } else {
            option.series[i].itemStyle = {color: dataColor[i]};
        }

        if (option.series[i].emphasis) {
            if (option.series[i].emphasis.itemStyle) {
                option.series[i].emphasis.itemStyle.color = dataColor[i];
                option.series[i].emphasis.itemStyle.borderColor = emphasisBorderColor;
            } else {
                option.series[i].emphasis.itemStyle = {color: dataColor[i], borderColor: emphasisBorderColor};
            }
        }
    }

}

function ChartSettings({ page, onDataChange, ...props }) {

    // const [renderingModeSelected, setRenderingModeSelected] = useState(props.renderingMode);
    console.log("page settings: ", page);
    const [dataString, setDataString] = useState(page.data)
    const parsedData = page && page.data ? JSON.parse(page.data) : {};

    let initChartTheme = "custom";
    if (parsedData && parsedData.customOption && parsedData.customOption.mode) {
        if (parsedData.customOption.theme) {
            initChartTheme = parsedData.customOption.theme;
        } else {
            parsedData.customOption.theme = "custom";
        }

        if (initChartTheme === "dark") {
            updateThemeColor(parsedData, theme.dark);
        } 
        if (initChartTheme === "light") {
            updateThemeColor(parsedData, theme.light);
        }
    }

    let initCustomColor = {};
    if (parsedData && parsedData.title && parsedData.title.textStyle && parsedData.title.textStyle.color) {
        initCustomColor["title"] = parsedData.title.textStyle.color;
    }

    if (parsedData && parsedData.xAxis && parsedData.xAxis.axisLabel && parsedData.xAxis.axisLabel.color) {
        initCustomColor["xAxisLabel"] = parsedData.xAxis.axisLabel.color;
    }

    if (parsedData && parsedData.xAxis && parsedData.xAxis.axisLine && parsedData.xAxis.axisLine.lineStyle && parsedData.xAxis.axisLine.lineStyle.color) {
        initCustomColor["xAxisLine"] = parsedData.xAxis.axisLine.lineStyle.color;
    }

    if (parsedData && parsedData.yAxis && parsedData.yAxis.axisLabel && parsedData.yAxis.axisLabel.color) {
        initCustomColor["yAxisLabel"] = parsedData.yAxis.axisLabel.color;
    }

    if (parsedData && parsedData.yAxis && parsedData.yAxis.axisLine && parsedData.yAxis.axisLine.lineStyle && parsedData.yAxis.axisLine.lineStyle.color) {
        initCustomColor["yAxisLine"] = parsedData.yAxis.axisLine.lineStyle.color;
    }

    if (parsedData && parsedData.series) {
        initCustomColor["data"] = [];
        for (let i = 0; i < parsedData.series.length; i++) {
            if (parsedData.series[i].itemStyle && parsedData.series[i].itemStyle.color) {
                initCustomColor["data"].push(parsedData.series[i].itemStyle.color);
            }
        }
    }

    let initRenderingMode = 'immediate';
    let initShowingMode = 'more';
    let initXAxisShow = true;
    let initYAxisShow = true;
    if (page && page.data && parsedData.customOption.mode) {
        initRenderingMode = parsedData.customOption.mode;
    }
    if (page && page.data && parsedData.customOption.lineMode) {
        initShowingMode = parsedData.customOption.lineMode;
    }
    if (page && page.data) { 
        initXAxisShow = parsedData.customOption.xAxis;
        initYAxisShow = parsedData.customOption.yAxis;
    }
    let initXAxisObj = {};
    let initYAxisObj = {};
    let initHighlightObjs = [];
    let initTitleObj = {};

    let initLineShowingMode = "more";
    if (page && page.customOption && page.customOption.lineMode) {
        initLineShowingMode = page.customOption.lineMode;
    }
    
    if (page && page.data && parsedData.xAxis) {
        initXAxisObj["lineWidth"] = parsedData.xAxis.axisLine.lineStyle.width;
        initXAxisObj["lineType"] = parsedData.xAxis.axisLine.lineStyle.type;
        initXAxisObj["lineColor"] = parsedData.xAxis.axisLine.lineStyle.color;
        initXAxisObj["fontSize"] = parsedData.xAxis.axisLabel.fontSize;
        initXAxisObj["fontColor"] = parsedData.xAxis.axisLabel.color;
        initXAxisObj["fontWeight"] = parsedData.xAxis.axisLabel.fontWeight;
        initXAxisObj["name"] = parsedData.xAxis.name || "";
        initXAxisObj["nameFontSize"] = parsedData.xAxis.nameTextStyle ? parsedData.xAxis.nameTextStyle.fontSize || 12 : 12;
        initXAxisObj["nameFontWeight"] = parsedData.xAxis.nameTextStyle ? parsedData.xAxis.nameTextStyle.fontWeight || "bolder" : "bolder";
        initXAxisObj["nameFontColor"] = parsedData.xAxis.nameTextStyle ? parsedData.xAxis.nameTextStyle.color || "rgba(51,51,51,0.5)" : "rgba(51,51,51,0.5)";
        initXAxisObj["namePosition"] = parsedData.xAxis.nameLocation || "end";

        initYAxisObj["lineWidth"] = parsedData.yAxis.axisLine.lineStyle.width;
        initYAxisObj["lineType"] = parsedData.yAxis.axisLine.lineStyle.type;
        initYAxisObj["lineColor"] = parsedData.yAxis.axisLine.lineStyle.color;
        initYAxisObj["fontSize"] = parsedData.yAxis.axisLabel.fontSize;
        initYAxisObj["fontColor"] = parsedData.yAxis.axisLabel.color;
        initYAxisObj["fontWeight"] = parsedData.yAxis.axisLabel.fontWeight;
        initYAxisObj["name"] = parsedData.yAxis.name || "";
        initYAxisObj["nameFontSize"] = parsedData.yAxis.nameTextStyle ? parsedData.yAxis.nameTextStyle.fontSize || 12 : 12;
        initYAxisObj["nameFontWeight"] = parsedData.yAxis.nameTextStyle ? parsedData.yAxis.nameTextStyle.fontWeight || "bolder" : "bolder";
        initYAxisObj["nameFontColor"] = parsedData.yAxis.nameTextStyle ? parsedData.yAxis.nameTextStyle.color || "rgba(51,51,51,0.5)" : "rgba(51,51,51,0.5)";
        initYAxisObj["namePosition"] = parsedData.yAxis.nameLocation || "end";

        if (parsedData.title) {
            initTitleObj["show"] = parsedData.title.show || false;
            initTitleObj["text"] = parsedData.title.text || "";
            initTitleObj["fontSize"] = parsedData.title.textStyle ? parsedData.title.textStyle.fontSize || 18 : 18;
            initTitleObj["fontColor"] = parsedData.title.textStyle ? parsedData.title.textStyle.color || "#333333" : "#333333";
            initTitleObj["fontWeight"] = parsedData.title.textStyle ? parsedData.title.textStyle.fontWeight || "bolder" : "bolder";
            initTitleObj["pos_left"] = parsedData.title.left ?  parsedData.title.left : "auto";
            initTitleObj["pos_right"] = parsedData.title.right ?  parsedData.title.right : "auto";
            initTitleObj["pos_top"] = parsedData.title.top ?  parsedData.title.top : "auto";
            initTitleObj["pos_bottom"] = parsedData.title.bottom ?  parsedData.title.bottom : "auto";
        } else {
            initTitleObj = {
                show: false,
                text: "",
                fontSize: 18,
                fontColor: "#333333",
                fontWeight: "bolder",
                pos_left: "auto",
                pos_right: "auto",
                pos_top: "auto",
                pos_bottom: "auto",
            }
        }

        

        for (let i = 0; i < parsedData.series.length; i++) {
            let initHighlightObj = {};
            initHighlightObj["borderWidth"] = parsedData.series[i].emphasis.itemStyle.borderWidth;
            initHighlightObj["borderColor"] = parsedData.series[i].emphasis.itemStyle.borderColor;
            initHighlightObj["borderType"] = parsedData.series[i].emphasis.itemStyle.borderType;
            initHighlightObj["highlightColor"] = parsedData.series[i].emphasis.itemStyle.color;
            initHighlightObj["opacity"] = parsedData.series[i].emphasis.itemStyle.opacity;
            initHighlightObj["name"] = parsedData.series[i].name;

            initHighlightObj["color"] = parsedData.series[i].itemStyle.color;
            initHighlightObj["normalOpacity"] = parsedData.series[i].itemStyle.opacity;

            initHighlightObj["chartType"] = parsedData.series[i].type;
            initHighlightObj["area"] = parsedData.series[i].areaStyle ? true : false ;
            initHighlightObj["stack"] = parsedData.series[i].stack ? true : false;
            
            if (parsedData.series[i].label) {
                initHighlightObj["labelShow"] = parsedData.series[i].label.show || false;
                initHighlightObj["labelPosition"] = parsedData.series[i].label.position || "top";
                initHighlightObj["labelFontSize"] = parsedData.series[i].label.fontSize || 16;
                initHighlightObj["labelFontWeight"] = parsedData.series[i].label.fontWeight || "normal";
                initHighlightObj["labelFontColor"] = parsedData.series[i].label.color || "#ffffff";
            } else {
                initHighlightObj["labelShow"] = false;
                initHighlightObj["labelPosition"] = "top";
                initHighlightObj["labelFontSize"] = 16;
                initHighlightObj["labelFontWeight"] = "normal";
                initHighlightObj["labelFontColor"] = "#ffffff";
            }

            if (parsedData.series[i].type === "line") {
                initHighlightObj["lineWidth"] = parsedData.series[i].lineStyle ? parsedData.series[i].lineStyle.width : null;
            }


            initHighlightObjs[i] = initHighlightObj;

            
        }

    }
    
    const [forceUpdateKey, setForceUpdateKey] = useState(0);
    const [renderingMode, setRenderingMode] = useState(initRenderingMode)
    const [showingMode, setShowingMode] = useState(initShowingMode)
    const [xAxisShow, setXAxisShow] = useState(initXAxisShow)
    const [xAxisLineType, setXAxisLineType] = useState(initXAxisObj.lineType)
    const [xAxisLineWidth, setXAxisLineWidth] = useState(initXAxisObj.lineWidth)
    const [xAxisLineColor, setXAxisLineColor] = useState(initXAxisObj.lineColor)
    const [xAxisFontSize, setXAxisFontSize] = useState(initXAxisObj.fontSize)
    const [xAxisFontColor, setXAxisFontColor] = useState(initXAxisObj.fontColor)
    const [xAxisFontWeight, setXAxisFontWeight] = useState(initXAxisObj.fontWeight)
    const [xAxisName, setXAxisName] = useState(initXAxisObj.name)
    const [xAxisNameFontSize, setXAxisNameFontSize] = useState(initXAxisObj.nameFontSize)
    const [xAxisNamePosition, setXAxisNamePosition] = useState(initXAxisObj.namePosition)
    const [xAxisNameFontWeight, setXAxisNameFontWeight] = useState(initXAxisObj.nameFontWeight)
    const [xAxisNameFontColor, setXAxisNameFontColor] = useState(initXAxisObj.nameFontColor)

    const [yAxisShow, setYAxisShow] = useState(initYAxisShow)
    const [yAxisLineType, setYAxisLineType] = useState(initYAxisObj.lineType)
    const [yAxisLineWidth, setYAxisLineWidth] = useState(initYAxisObj.lineWidth)
    const [yAxisLineColor, setYAxisLineColor] = useState(initYAxisObj.lineColor)
    const [yAxisFontSize, setYAxisFontSize] = useState(initYAxisObj.fontSize)
    const [yAxisFontColor, setYAxisFontColor] = useState(initYAxisObj.fontColor)
    const [yAxisFontWeight, setYAxisFontWeight] = useState(initYAxisObj.fontWeight)
    const [yAxisName, setYAxisName] = useState(initYAxisObj.name)
    const [yAxisNameFontSize, setYAxisNameFontSize] = useState(initYAxisObj.nameFontSize)
    const [yAxisNamePosition, setYAxisNamePosition] = useState(initYAxisObj.namePosition)
    const [yAxisNameFontWeight, setYAxisNameFontWeight] = useState(initYAxisObj.nameFontWeight)
    const [yAxisNameFontColor, setYAxisNameFontColor] = useState(initYAxisObj.nameFontColor)

    const [titleShow, setTitleShow] = useState(initTitleObj.show)
    const [titleText, setTitleText] = useState(initTitleObj.text)
    const [titleFontSize, setTitleFontSize] = useState(initTitleObj.fontSize)
    const [titleFontColor, setTitleFontColor] = useState(initTitleObj.fontColor)
    const [titleFontWeight, setTitleFontWeight] = useState(initTitleObj.fontWeight)
    const [titlePosLeft, setTitlePosLeft] = useState(initTitleObj.pos_left)
    const [titlePosRight, setTitlePosRight] = useState(initTitleObj.pos_right)
    const [titlePosTop, setTitlePosTop] = useState(initTitleObj.pos_top)
    const [titlePosBottom, setTitlePosBottom] = useState(initTitleObj.pos_bottom)

    const [highlightObjs, setHighlightObjs] = useState(initHighlightObjs)

    const [chartTheme, setChartTheme] = useState(initChartTheme)

    const singlelineModebuttonRef = useRef(null);

    const handleChartThemeChange = (e) => {
        setChartTheme(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.customOption.theme = e.target.value;
        if (e.target.value === "dark") {
            // parsedData.series[i].label.color
            if (parsedData && parsedData.series) {
                for (let i = 0; i < parsedData.series.length; i++) {
                    if (parsedData.series[i].label) {
                        parsedData.series[i].label.color = "rgba(255,255,255,1.0)";
                    } else {
                        parsedData.series[i].label = {color: "rgba(255,255,255,1.0)"};
                    }
                }
            }
            if (parsedData && parsedData.xAxis) {
                if (parsedData.xAxis.nameTextStyle) {
                    parsedData.xAxis.nameTextStyle.color = "rgba(255,255,255,0.7)";
                } else {
                    parsedData.xAxis.nameTextStyle = {color: "rgba(255,255,255,0.7)"};
                }
            }
            if (parsedData && parsedData.yAxis) {
                if (parsedData.yAxis.nameTextStyle) {
                    parsedData.yAxis.nameTextStyle.color = "rgba(255,255,255,0.7)";
                } else {
                    parsedData.yAxis.nameTextStyle = {color: "rgba(255,255,255,0.7)"};
                }
            }
            updateThemeColor(parsedData, theme.dark);
        } else {
            if (parsedData && parsedData.series) {
                for (let i = 0; i < parsedData.series.length; i++) {
                    if (parsedData.series[i].label) {
                        parsedData.series[i].label.color = "rgba(51,51,51,0.7)";
                    } else {
                        parsedData.series[i].label = {color: "rgba(51,51,51,0.7)"};
                    }
                }
            }
            if (parsedData && parsedData.xAxis) {
                if (parsedData.xAxis.nameTextStyle) {
                    parsedData.xAxis.nameTextStyle.color = "rgba(51,51,51,0.5)";
                } else {
                    parsedData.xAxis.nameTextStyle = {color: "rgba(51,51,51,0.5)"};
                }
            }
            if (parsedData && parsedData.yAxis) {
                if (parsedData.yAxis.nameTextStyle) {
                    parsedData.yAxis.nameTextStyle.color = "rgba(51,51,51,0.5)";
                } else {
                    parsedData.yAxis.nameTextStyle = {color: "rgba(51,51,51,0.5)"};
                }
            }
        }
        if (e.target.value === "light"){
            updateThemeColor(parsedData, theme.light);
        }
        // if (e.target.value === "custom"){
        //     updateThemeColor(parsedData, initCustomColor);
        // }
        if (e.target.value === "westeros"){
            updateThemeColor(parsedData, theme.westeros);
        }
        if (e.target.value === "wonderland"){ 
            updateThemeColor(parsedData, theme.wonderland);
        }
        //walden
        if (e.target.value === "walden"){
            updateThemeColor(parsedData, theme.walden);
        }
        //purple
        if (e.target.value === "purple"){
            updateThemeColor(parsedData, theme.purple);
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleRenderingModeChange = (e) => {
        setRenderingMode(e.target.value);
        const parsedData = JSON.parse(page.data);
        parsedData.customOption.mode = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLineShowingModeChange = (v) => {
        setShowingMode(v);
        let parsedData = JSON.parse(page.data);
        parsedData.customOption.lineMode = v;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisShowChange = (e) => {
        setXAxisShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        parsedData.customOption["xAxis"] = e.target.checked;
        parsedData = hiddleAxis("xAxis", parsedData, e.target.checked);
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisShowChange = (e) => {
        setYAxisShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        parsedData.customOption["yAxis"] = e.target.checked;
        parsedData = hiddleAxis("yAxis", parsedData, e.target.checked);
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisLineTypeChange = (e) => {
        setXAxisLineType(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.axisLine.lineStyle.type = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisLineWidthChange = (e) => {
        setXAxisLineWidth(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.axisLine.lineStyle.width = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisLineColorChange = (e) => {
        setXAxisLineColor(e.target.value);
        // let parsedData = JSON.parse(page.data);
        // parsedData.xAxis.axisLine.lineStyle.color = e.target.value;
        // onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const updateXAxisLineColor = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.axisLine.lineStyle.color = xAxisLineColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisFontSizeChange = (e) => {
        setXAxisFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.axisLabel.fontSize = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisFontColorChange = (e) => {
        setXAxisFontColor(e.target.value);
        setXAxisNameFontColor(e.target.value);
    }

    const updateXAxisFontColor = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.axisLabel.color = xAxisFontColor;
        parsedData.xAxis.nameTextStyle.color = xAxisFontColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisNameFontWeightChange = (e) => {
        setXAxisNameFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.xAxis.nameTextStyle) {
            parsedData.xAxis.nameTextStyle = {};
        }
        parsedData.xAxis.nameTextStyle.fontWeight = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisLineTypeChange = (e) => {
        setYAxisLineType(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.axisLine.lineStyle.type = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisLineWidthChange = (e) => {
        setYAxisLineWidth(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.axisLine.lineStyle.width = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisLineColorChange = (e) => {
        setYAxisLineColor(e.target.value);
    }

    const updateYAxisLineColor = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.axisLine.lineStyle.color = yAxisLineColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisFontSizeChange = (e) => {
        setYAxisFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.axisLabel.fontSize = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisFontColorChange = (e) => {
        setYAxisFontColor(e.target.value);
        setYAxisNameFontColor(e.target.value);
    }

    const updateYAxisFontColor = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.axisLabel.color = yAxisFontColor;
        parsedData.yAxis.nameTextStyle.color = yAxisFontColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisFontWeightChange = (e) => {
        setYAxisFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.axisLabel.fontWeight = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightBorderTypeChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["borderType"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].emphasis.itemStyle.borderType = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightBorderWidthChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["borderWidth"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].emphasis.itemStyle.borderWidth = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightBorderColorChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["borderColor"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
    }

    const updateHightlightBorderColor = (idx) => {
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].emphasis.itemStyle.borderColor = highlightObjs[idx].borderColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightColorChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["highlightColor"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
    }

    const updateHightlightColor = (idx) => {
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].emphasis.itemStyle.color = highlightObjs[idx].highlightColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightOpacityChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["opacity"] = e.target.value / 100.0;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].emphasis.itemStyle.opacity = e.target.value / 100.0;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightNormalColorChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["color"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        // let parsedData = JSON.parse(page.data);
        // parsedData.series[idx].itemStyle.color = e.target.value;
        // onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const updateHightlightNormalColor = (idx) => {
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].itemStyle.color = highlightObjs[idx].color;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightNormalOpacityChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["normalOpacity"] = e.target.value / 100.0;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].itemStyle.opacity = e.target.value / 100.0;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightChartTypeChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["chartType"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].type = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightStackedChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["stack"] = e.target.checked;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        if (e.target.checked) {
            parsedData.series[idx].stack = "Total";
        } else {
            delete parsedData.series[idx].stack;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleHightlightAreaChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["area"] = e.target.checked;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        if (e.target.checked) {
            parsedData.series[idx].areaStyle = {};
        } else {
            delete parsedData.series[idx].areaStyle;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLineChartWidthChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["lineWidth"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        parsedData.series[idx].lineStyle.width = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const  handleUpdateXAxisName = (e) => {
        setXAxisName(e.target.value);
    }

    const handleUpdateYAxisName = (e) => {
        setYAxisName(e.target.value);
    }

    const updateXAxisName = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.name = xAxisName;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const updateYAxisName = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.yAxis.name = yAxisName;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisNameFontSizeChange = (e) => {
        setXAxisNameFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.xAxis.nameTextStyle) {
            parsedData.xAxis.nameTextStyle = {};
        }
        parsedData.xAxis.nameTextStyle.fontSize = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisFontWeightChange = (e) => {
        setXAxisFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.xAxis.axisLabel.fontWeight = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleyAxisNameFontSizeChange = (e) => {
        setYAxisNameFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.yAxis.nameTextStyle) {
            parsedData.yAxis.nameTextStyle = {};
        }
        parsedData.yAxis.nameTextStyle.fontSize = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisxAxisNamePositionChange = (e) => {
        setXAxisNamePosition(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.xAxis.nameLocation) {
            parsedData.xAxis.nameLocation = {};
        }
        parsedData.xAxis.nameLocation = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));

    }

    const handleYAxisyAxisNamePositionChange = (e) => {
        setYAxisNamePosition(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.yAxis.nameTextStyle) {
            if (e.target.value === "end") {
                parsedData.yAxis.nameTextStyle.padding = [20, 30];
            } else {
                parsedData.yAxis.nameTextStyle.padding = [30, 30];
            }
        }
        if (!parsedData.yAxis.nameLocation) {
            parsedData.yAxis.nameLocation = {};
        }
        parsedData.yAxis.nameLocation = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisNameFontWeightChange = (e) => {
        setYAxisNameFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.yAxis.nameTextStyle) {
            parsedData.yAxis.nameTextStyle = {};
        }
        parsedData.yAxis.nameTextStyle.fontWeight = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleTitleShowChange = (e) => {
        setTitleShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        parsedData.title.show = e.target.checked;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleUpdateTitleText = (e) => {
        setTitleText(e.target.value);
    }

    const updateTitleText = () => {
        let parsedData = JSON.parse(page.data);
        parsedData.title.text = titleText;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleTitleFontSizeChange = (e) => {
        setTitleFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.title.textStyle) {
            parsedData.title.textStyle = {};
        }
        parsedData.title.textStyle.fontSize = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleTitleColorChange = (e) => {
        setTitleFontColor(e.target.value);
    }

    const updateTitleFontColor = () => {
        let parsedData = JSON.parse(page.data);
        if (!parsedData.title.textStyle) {
            parsedData.title.textStyle = {};
        }
        parsedData.title.textStyle.color = titleFontColor;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleTitleFontWeightChange = (e) => {
        setTitleFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if (!parsedData.title.textStyle) {
            parsedData.title.textStyle = {};
        }
        parsedData.title.textStyle.fontWeight = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleTitlePosLeftChange = (e) => {
        setTitlePosLeft(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.title.left = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleTitlePosTopChange = (e) => {
        setTitlePosTop(e.target.value);
        let parsedData = JSON.parse(page.data);
        parsedData.title.top = e.target.value;
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLabelShowChange = (e, idx) => {
        // let newHighlightObjs = [...highlightObjs];
        // newHighlightObjs[idx]["labelShow"] = e.target.value;
        // setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        if (parsedData.series[idx].label) {
            parsedData.series[idx].label.show = e.target.checked;
        } else {
            parsedData.series[idx].label = {show: e.target.checked};
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLabelFontSizeChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["labelFontSize"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        if (parsedData.series[idx].label) {
            parsedData.series[idx].label.fontSize = e.target.value;
        } else {
            parsedData.series[idx].label = {fontSize: e.target.value};
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLabelFontColorChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["labelFontColor"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
    }

    const updateLabelFontColor = (idx) => {
        let parsedData = JSON.parse(page.data);
        if (parsedData.series[idx].label) {
            parsedData.series[idx].label.color = highlightObjs[idx].labelFontColor;
        } else {
            parsedData.series[idx].label = {color: highlightObjs[idx].labelFontColor};
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLabelFontWeightChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["labelFontWeight"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        if (parsedData.series[idx].label) {
            parsedData.series[idx].label.fontWeight = e.target.value;
        } else {
            parsedData.series[idx].label = {fontWeight: e.target.value};
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleLabelPositionChange = (e, idx) => {
        let newHighlightObjs = [...highlightObjs];
        newHighlightObjs[idx]["labelPosition"] = e.target.value;
        setHighlightObjs(newHighlightObjs);
        let parsedData = JSON.parse(page.data);
        if (parsedData.series[idx].label) {
            parsedData.series[idx].label.position = e.target.value;
        } else {
            parsedData.series[idx].label = {position: e.target.value};
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    

    useEffect(() => {
        console.log("x-axis settings state effect: ", xAxisShow);
    }, [xAxisShow]);

    useEffect(() => {
        console.log("Line Chart Showing Mode: ", showingMode);
      }, [showingMode]);

    return (
        <>
            <Form>
                <Form.Group  className="mb-3" controlId="settings.renderingMode">
                    <Form.Label>
                        <strong>Rendering Mode</strong>
                    </Form.Label>
                    <Form.Select onChange={handleRenderingModeChange} value={renderingMode}>
                        <option value="immediate">immediate</option>
                        <option value="progressive">progressive</option>
                    </Form.Select>
                </Form.Group>  
            </Form>
            {/* <Form>
                <Form.Group  className="mb-3">
                    <Form.Label>
                        <strong>Line Showing Mode</strong>
                        <Popover content={content} title="Understanding Line Showing Modes">
                            <span>
                                <i class="bi bi-lightbulb-fill" style={{
                                    color: "#FFD700",
                                    marginLeft: "5px"
                                }}></i>
                            </span>
                        </Popover>
                    </Form.Label>
                    <Form.Select onChange={handleLineShowingModeChange} value={lineShowingMode}>
                        <option value="multilines">multiplelines</option>
                        <option value="singleline">singleline</option>
                    </Form.Select>
                </Form.Group>
            </Form> */}
            {
                page && page.type === "line" && (<><p>
                <strong>Choose Line Showing Mode</strong>
            </p>
            <ButtonGroup key={new Date().getTime()} aria-label="Basic example">
                <Button ref={singlelineModebuttonRef} onClick={()=>{handleLineShowingModeChange("one")}} variant={showingMode == "one" ? "primary": "secondary"}>Line by Line</Button>
                <Button onClick={()=>{handleLineShowingModeChange("more")}} variant={showingMode == "more" ? "primary": "secondary"}>All-at-Once</Button>
            </ButtonGroup>
            <Popover content={content} title="Understanding Line Showing Modes">
                <span>
                    <i class="bi bi-lightbulb-fill" style={{
                        color: "#FFD700",
                        marginLeft: "5px"
                    }}></i>
                </span>
            </Popover></>)
            }

            

            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>
            <p>
                <strong>Color Theme</strong>
            </p>
            <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Theme
                    </InputGroup.Text>
                    <Form.Select size="sm" value={chartTheme} onChange={handleChartThemeChange}>
                        {/* <option value="custom">Custom</option> */}
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="westeros">Westeros(light)</option>
                        <option value="wonderland">Wonderland(light)</option>
                        <option value="walden">Walden(light)</option>
                        <option value="purple">Purple(dark)</option>
                    </Form.Select>
                    
            </InputGroup>
            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>
            <p>
                <strong>Title</strong>
                <Form.Check // prettier-ignore
                    onChange={handleTitleShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={titleShow}
                />
            </p>
            <div style={{display: titleShow ? "block" : "none"}}>  
                <InputGroup className="mb-3">
                    <Form.Control type="text" value={titleText} placeholder="Chart Title" onChange={handleUpdateTitleText}/>
                    <button className="btn btn-primary" onClick={updateTitleText}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={titleFontSize} onChange={handleTitleFontSizeChange}>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Color
                    </InputGroup.Text>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        value={titleFontColor}
                        title="Choose your color"
                        onChange={handleTitleColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateTitleFontColor}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={titleFontWeight} onChange={handleTitleFontWeightChange}>
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                    </Form.Select>
                </InputGroup>
                <p>Position</p>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Left
                    </InputGroup.Text>
                    <Form.Select size="sm" value={titlePosLeft} onChange={handleTitlePosLeftChange}>
                        <option value="auto">auto</option>
                        <option value="left">left</option>
                        <option value="center">center</option>
                        <option value="right">right</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Top
                    </InputGroup.Text>
                    <Form.Select size="sm" value={titlePosTop} onChange={handleTitlePosTopChange}>
                        <option value="auto">auto</option>
                        <option value="top">top</option>
                        <option value="middle">middle</option>
                        <option value="bottom">bottom</option>
                    </Form.Select>
                </InputGroup>
            </div>
            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>
            <p>
                <strong>X Axis</strong>
                <Form.Check // prettier-ignore
                    onChange={handleXAxisShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={xAxisShow}
                />
            </p>
            <div style={{display: xAxisShow ? "block" : "none"}}>
                <InputGroup className="mb-3">
                    <Form.Control type="text" value={xAxisName} placeholder="X-Axis Name" onChange={handleUpdateXAxisName}/>
                    <button className="btn btn-primary" onClick={updateXAxisName}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Name Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={xAxisNameFontSize} onChange={handleXAxisNameFontSizeChange}>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Name Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={xAxisNameFontWeight} onChange={handleXAxisNameFontWeightChange}>
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Name Position
                    </InputGroup.Text>
                    <Form.Select size="sm" onChange={handleXAxisxAxisNamePositionChange} value={xAxisNamePosition}>
                        <option value="start">start</option>
                        <option value="middle">middle</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Line Type
                    </InputGroup.Text>
                    <Form.Select size="sm" onChange={handleXAxisLineTypeChange} value={xAxisLineType}>
                        <option value="solid">solid</option>
                        <option value="dashed">dashed</option>
                        <option value="dotted">dotted</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Line Width
                    </InputGroup.Text>
                    <Form.Select size="sm" value={xAxisLineWidth} onChange={handleXAxisLineWidthChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Line Color
                    </InputGroup.Text>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        value={xAxisLineColor}
                        title="Choose your color"
                        onChange={handleXAxisLineColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateXAxisLineColor}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Tick Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={xAxisFontSize} onChange={handleXAxisFontSizeChange}>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Color
                    </InputGroup.Text>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        value={xAxisFontColor}
                        title="Choose your color"
                        onChange={handleXAxisFontColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateXAxisFontColor}>Apply</button>
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={xAxisFontWeight} onChange={handleXAxisFontWeightChange}>
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                    </Form.Select>
                </InputGroup>
                
            </div>

            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>
                
            <p>
                <strong>Y Axis</strong>
                <Form.Check // prettier-ignore
                    onChange={handleYAxisShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={yAxisShow}
                />
            </p>
            <div style={{display: yAxisShow ? "block" : "none"}}>
                <InputGroup className="mb-3">
                    <Form.Control type="text" value={yAxisName} placeholder="Y-Axis Name" onChange={handleUpdateYAxisName}/>
                    <button className="btn btn-primary" onClick={updateYAxisName}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Name Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yAxisNameFontSize} onChange={handleyAxisNameFontSizeChange}>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Name Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yAxisNameFontWeight} onChange={handleYAxisNameFontWeightChange}>
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Name Position
                    </InputGroup.Text>
                    <Form.Select size="sm" onChange={handleYAxisyAxisNamePositionChange} value={yAxisNamePosition}>
                        <option value="start">start</option>
                        <option value="middle">middle</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                    </Form.Select>
                </InputGroup>
            
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Line Type
                    </InputGroup.Text>
                    <Form.Select size="sm" onChange={handleYAxisLineTypeChange} value={yAxisLineType}>
                        <option value="solid">solid</option>
                        <option value="dashed">dashed</option>
                        <option value="dotted">dotted</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Line Width
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yAxisLineWidth} onChange={handleYAxisLineWidthChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Line Color
                    </InputGroup.Text>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        value={yAxisLineColor}
                        title="Choose your color"
                        onChange={handleYAxisLineColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateYAxisLineColor}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yAxisFontSize} onChange={handleYAxisFontSizeChange}>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Color
                    </InputGroup.Text>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        value={yAxisFontColor}
                        title="Choose your color"
                        onChange={handleYAxisFontColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateYAxisFontColor}>Apply</button>
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yAxisFontWeight} onChange={handleYAxisFontWeightChange}>
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                    </Form.Select>
                </InputGroup>
                
            </div>

            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>
            
                {
                    highlightObjs.map((highlightObj, i) => {
                        return (
                            <div>
                                <p style={{color: highlightObj["color"] }}><strong>Data Elements(
                                    
                                    <span>{highlightObj['name']}</span>)</strong>
                                </p>

                                <p>
                                    <strong>Basic</strong>
                                </p>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                    Chart Type
                                    </InputGroup.Text>
                                    <Form.Select size="sm" value={highlightObj["chartType"]} onChange={e=>handleHightlightChartTypeChange(e, i)}>
                                        <option value="line">line</option>
                                        <option value="bar">bar</option>
                                        {/* <option value="stacked bar">stacked bar</option> */}
                                        {/* <option value="stacked line">stacked line</option> */}
                                    </Form.Select>
                                </InputGroup>
                                
                                <div  style={{
                                    display: highlightObj["chartType"] === "line" ? "block" : "none"
                                }}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                        Stacked
                                        </InputGroup.Text>
                                        <Form.Check // prettier-ignore
                                            onChange={e => handleHightlightStackedChange(e, i)}
                                            style={{ float: "right", display: "flex",
                                            alignItems: "center", marginLeft: "15px" }}
                                            type="switch"
                                            id="switch"
                                            label=""
                                            checked={highlightObj["stack"]}
                                        >
                                        </Form.Check>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                        Area
                                        </InputGroup.Text>
                                        <Form.Check // prettier-ignore
                                            onChange={e => handleHightlightAreaChange(e, i)}
                                            style={{ float: "right", display: "flex",
                                            alignItems: "center", marginLeft: "15px" }}
                                            type="switch"
                                            id="switch"
                                            label=""
                                            checked={highlightObj["area"]}
                                        >
                                        </Form.Check>
                                    </InputGroup>
                                    
                                    {

                                        highlightObj["lineWidth"] ? (
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="inputGroup-sizing-default">
                                                Line Width
                                                </InputGroup.Text>
                                                <Form.Select size="sm" value={highlightObj["lineWidth"]} onChange={e => handleLineChartWidthChange(e, i)}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </Form.Select>
                                            </InputGroup>
                                        ) : null

                                    }
                                    

                                </div>
                               
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                     Color
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="color"
                                        id="exampleColorInput"
                                        value={highlightObj["color"]}
                                        title="Choose your color"
                                        onChange={e=>handleHightlightNormalColorChange(e, i)}
                                    />
                                    <button className="btn btn-primary" onClick={e=>updateHightlightNormalColor(i)}>Apply</button>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Label> Opacity</Form.Label>
                                    <Form.Range min="0" max="100" value={highlightObj["normalOpacity"]*100}
                                        onChange={e=>handleHightlightNormalOpacityChange(e, i)}
                                    />
                                </InputGroup>

                                
                                    <p>
                                        <strong>Label</strong>
                                        <Form.Check // prettier-ignore
                                        onChange={e => handleLabelShowChange(e, i)}
                                        style={{ float: "right" }}
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                        checked={highlightObj["labelShow"]}
                                    />
                                    </p>
                                <div style={{
                                    display: highlightObj["labelShow"] ? "block" : "none"
                                }}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                        Font Size
                                        </InputGroup.Text>
                                        <Form.Select size="sm" value={highlightObj["labelFontSize"]} onChange={e => handleLabelFontSizeChange(e, i)}>
                                            <option value="9">9</option>
                                            <option value="12">12</option>
                                            <option value="14">14</option>
                                            <option value="16">16</option>
                                            <option value="18">18</option>
                                            <option value="20">20</option>
                                            <option value="22">22</option>
                                            <option value="24">24</option>
                                        </Form.Select>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                        Font Color
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="color"
                                            id="exampleColorInput"
                                            value={highlightObj["labelFontColor"]}
                                            title="Choose your color"
                                            onChange={e=>handleLabelFontColorChange(e, i)}
                                        />
                                        <button className="btn btn-primary" onClick={e=>updateLabelFontColor(i)}>Apply</button>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                        Font Weight
                                        </InputGroup.Text>
                                        <Form.Select size="sm" value={highlightObj["labelFontWeight"]} onChange={e => handleLabelFontWeightChange(e, i)}>
                                            <option value="normal">normal</option>
                                            <option value="bold">bold</option>
                                            <option value="bolder">bolder</option>
                                            <option value="lighter">lighter</option>
                                        </Form.Select>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                        Position
                                        </InputGroup.Text>
                                        <Form.Select size="sm" value={highlightObj["labelPosition"]} onChange={e => handleLabelPositionChange(e, i)}>
                                            <option value="top">top</option>
                                            <option value="bottom">bottom</option>
                                            <option value="inside">inside</option>
                                            <option value="insideTop">insideTop</option>
                                            <option value="insideBottom">insideBottom</option>
                                        </Form.Select>
                                    </InputGroup>
                                </div>


                                <p>
                                    <strong>Highlight</strong>
                                </p>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                    Border Line Type
                                    </InputGroup.Text>
                                    <Form.Select size="sm" onChange={e => handleHightlightBorderTypeChange(e, i)} value={highlightObj["borderType"]}>
                                        <option value="solid">solid</option>
                                        <option value="dashed">dashed</option>
                                        <option value="dotted">dotted</option>
                                    </Form.Select>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                    Border Line Width
                                    </InputGroup.Text>
                                    <Form.Select size="sm" value={highlightObj["borderWidth"]} onChange={e=>handleHightlightBorderWidthChange(e, i)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </Form.Select>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                    Border Color
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="color"
                                        id="exampleColorInput"
                                        value={highlightObj["borderColor"]}
                                        title="Choose your color"
                                        onChange={e=>handleHightlightBorderColorChange(e, i)}
                                    />
                                    <button className="btn btn-primary" onClick={e=>updateHightlightBorderColor(i)}>Apply</button>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                    Background
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="color"
                                        id="exampleColorInput"
                                        value={highlightObj["highlightColor"]}
                                        title="Choose your color"
                                        onChange={e=>handleHightlightColorChange(e, i)}
                                    />
                                    <button className="btn btn-primary" onClick={e=>updateHightlightColor(i)}>Apply</button>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Form.Label>Background Opacity</Form.Label>
                                    <Form.Range min="0" max="100" value={highlightObj["opacity"]*100}
                                        onChange={e=>handleHightlightOpacityChange(e, i)}
                                    />
                                </InputGroup>
                                <hr style={{
                                    borderTop: "3px dotted #bbb"
                                }}/>
                            </div>
                        )

                    })
                }
        </>

    )
}

export default ChartSettings;