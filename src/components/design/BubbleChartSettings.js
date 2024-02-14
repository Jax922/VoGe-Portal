import React, { useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BubbleChartSettings({ page, onDataChange, ...props }) {

    console.log("page settings: ", page);
    
    const parsedData = page&&page.data ? JSON.parse(page.data) : {};
    const baseOptions = parsedData.baseOption || {};
    let initTitles = baseOptions.title || [];
    let isChartTitle = true;
    let isTimeTitle = true;
    let initXAxisObj = {};
    let initYAxisObj = {};

    if (initTitles.length > 0) {
        if(initTitles[0]) {
            isTimeTitle = initTitles[0].show;
        }
        if(initTitles[1]) {
            isChartTitle = initTitles[1].show;
        }
    }

    if (baseOptions && baseOptions.xAxis) {
        initXAxisObj["lineWidth"] = baseOptions.xAxis.axisLine.lineStyle.width;
        initXAxisObj["lineType"] = baseOptions.xAxis.axisLine.lineStyle.type;
        initXAxisObj["lineColor"] = baseOptions.xAxis.axisLine.lineStyle.color;
        initXAxisObj["fontSize"] = baseOptions.xAxis.axisLabel.fontSize;
        initXAxisObj["fontColor"] = baseOptions.xAxis.axisLabel.color;
        initXAxisObj["fontWeight"] = baseOptions.xAxis.axisLabel.fontWeight;
        initXAxisObj["name"] = baseOptions.xAxis.name || "";
        initXAxisObj["nameFontSize"] = baseOptions.xAxis.nameTextStyle ? baseOptions.xAxis.nameTextStyle.fontSize || 20 : 20;
        initXAxisObj["nameFontWeight"] = baseOptions.xAxis.nameTextStyle ? baseOptions.xAxis.nameTextStyle.fontWeight || "bolder" : "bolder";
        initXAxisObj["nameFontColor"] = baseOptions.xAxis.nameTextStyle ? baseOptions.xAxis.nameTextStyle.color || "rgba(51,51,51,0.5)" : "rgba(51,51,51,0.5)";
        initXAxisObj["namePosition"] = baseOptions.xAxis.nameLocation || "end";
    }

    if (baseOptions && baseOptions.yAxis) {
        initYAxisObj["lineWidth"] = baseOptions.yAxis.axisLine.lineStyle.width;
        initYAxisObj["lineType"] = baseOptions.yAxis.axisLine.lineStyle.type;
        initYAxisObj["lineColor"] = baseOptions.yAxis.axisLine.lineStyle.color;
        initYAxisObj["fontSize"] = baseOptions.yAxis.axisLabel.fontSize;
        initYAxisObj["fontColor"] = baseOptions.yAxis.axisLabel.color;
        initYAxisObj["fontWeight"] = baseOptions.yAxis.axisLabel.fontWeight;
        initYAxisObj["name"] = baseOptions.yAxis.name || "";
        initYAxisObj["nameFontSize"] = baseOptions.yAxis.nameTextStyle ? baseOptions.yAxis.nameTextStyle.fontSize || 20 : 20;
        initYAxisObj["nameFontWeight"] = baseOptions.yAxis.nameTextStyle ? baseOptions.yAxis.nameTextStyle.fontWeight || "bolder" : "bolder";
        initYAxisObj["nameFontColor"] = baseOptions.yAxis.nameTextStyle ? baseOptions.yAxis.nameTextStyle.color || "rgba(51,51,51,0.5)" : "rgba(51,51,51,0.5)";
        initYAxisObj["namePosition"] = baseOptions.yAxis.nameLocation || "end";
    }

    const [chartTitleShow, setChartTitleShow] = useState(isChartTitle);
    const [chartTitleText, setChartTitleText] = useState(initTitles[1] ? initTitles[1].text : "");
    const [chartTitleFontsize, setChartTitleFontSize] = useState(initTitles[1] ? initTitles[1].textStyle.fontSize : "12");
    const [chartTitleFontColor, setChartTitleFontColor] = useState(initTitles[1] ? initTitles[1].textStyle.color : "#000");
    const [chartTitleFontWeight, setChartTitleFontWeight] = useState(initTitles[1] ? initTitles[1].textStyle.fontWeight : "normal");
    const [chartTitlePosLeft, setChartTitlePosLeft] = useState(initTitles[1] ? initTitles[1].left : "auto");
    const [chartTitlePosTop, setChartTitlePosTop] = useState(initTitles[1] ? initTitles[1].top : "auto");

    const [yearTitleShow, setYearTitleShow] = useState(isTimeTitle);
    const [yearTitleText, setYearTitleText] = useState(initTitles[0] ? initTitles[0].text : "");
    const [yearTitleFontsize, setYearTitleFontSize] = useState(initTitles[0] ? initTitles[0].textStyle.fontSize : "40");
    const [yearTitleFontColor, setYearTitleFontColor] = useState(initTitles[0] ? initTitles[0].textStyle.color : "#000");
    const [yearTitleFontWeight, setYearTitleFontWeight] = useState(initTitles[0] ? initTitles[0].textStyle.fontWeight : "normal");
    const [yearTitlePosLeft, setYearTitlePosLeft] = useState(initTitles[0] ? initTitles[0].left : "20%");
    const [yearTitlePosTop, setYearTitlePosTop] = useState(initTitles[0] ? initTitles[0].top : "10%");


    const handleChartTitleShowChange = (e) => {
        setChartTitleShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].show = e.target.checked;
            } else {
                parsedData.baseOption.title.push({show: e.target.checked});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleUpdateChartTitleText = (e) => {
        setChartTitleText(e.target.value);
    }
    const updateChartTitleText = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].text = chartTitleText;
            } else {
                parsedData.baseOption.title.push({text: chartTitleText});
            }
        
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleChartTitleFontSizeChange = (e) => {
        setChartTitleFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].textStyle.fontSize = e.target.value;
            } else {
                parsedData.baseOption.title.push({textStyle:{fontSize: e.target.value}});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleChartTitleColorChange = (e) => {
        setChartTitleFontColor(e.target.value);
    }

    const updateChartTitleFontColor = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].textStyle.color = chartTitleFontColor;
            } else {
                parsedData.baseOption.title.push({textStyle:{color: chartTitleFontColor}});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleChartTitleFontWeightChange = (e) => {
        setChartTitleFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].textStyle.fontWeight = e.target.value;
            } else {
                parsedData.baseOption.title.push({textStyle:{fontWeight: e.target.value}});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }
    
    const handleChartTitlePosLeftChange = (e) => {
        setChartTitlePosLeft(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].left = e.target.value;
            } else {
                parsedData.baseOption.title.push({left: e.target.value});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleChartTitlePosTopChange = (e) => {
        setChartTitlePosTop(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[1]) {
                parsedData.baseOption.title[1].top = e.target.value;
            } else {
                parsedData.baseOption.title.push({top: e.target.value});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYearTitleShowChange = (e) => {
        setYearTitleShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].show = e.target.checked;
            } else {
                parsedData.baseOption.title.push({show: e.target.checked});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleUpdateYearTitleText = (e) => {
        setYearTitleText(e.target.value);
    }

    const updateYearTitleText = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].text = yearTitleText;
            } else {
                parsedData.baseOption.title.push({text: yearTitleText});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYearTitleFontSizeChange = (e) => {
        setYearTitleFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].textStyle.fontSize = e.target.value;
            } else {
                parsedData.baseOption.title.push({textStyle:{fontSize: e.target.value}});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYearTitleColorChange = (e) => {
        setYearTitleFontColor(e.target.value);
    }

    const updateYearTitleFontColor = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].textStyle.color = yearTitleFontColor;
            } else {
                parsedData.baseOption.title.push({textStyle:{color: yearTitleFontColor}});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYearTitleFontWeightChange = (e) => {
        setYearTitleFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].textStyle.fontWeight = e.target.value;
            } else {
                parsedData.baseOption.title.push({textStyle:{fontWeight: e.target.value}});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYearTitlePosLeftChange = (e) => {
        setYearTitlePosLeft(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].left = e.target.value;
            } else {
                parsedData.baseOption.title.push({left: e.target.value});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYearTitlePosTopChange = (e) => {
        setYearTitlePosTop(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.title && parsedData.baseOption.title.length > 0) {
            if(initTitles[0]) {
                parsedData.baseOption.title[0].top = e.target.value;
            } else {
                parsedData.baseOption.title.push({top: e.target.value});
            }
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    // X Axis and Y Axis Settings

    const [xAxisShow, setXAxisShow] = useState(initXAxisObj.show);
    const [xAxisName, setXAxisName] = useState(initXAxisObj.name);
    const [xAxisNameFontSize, setXAxisNameFontSize] = useState(initXAxisObj.nameFontSize);
    const [xAxisNameFontWeight, setXAxisNameFontWeight] = useState(initXAxisObj.nameFontWeight);
    const [xAxisNamePosition, setXAxisNamePosition] = useState(initXAxisObj.namePosition);
    const [xAxisLineWidth, setXAxisLineWidth] = useState(initXAxisObj.lineWidth);
    const [xAxisLineType, setXAxisLineType] = useState(initXAxisObj.lineType);
    const [xAxisLineColor, setXAxisLineColor] = useState(initXAxisObj.lineColor);
    const [xAxisFontSize, setXAxisFontSize] = useState(initXAxisObj.fontSize);
    const [xAxisFontColor, setXAxisFontColor] = useState(initXAxisObj.fontColor);
    const [xAxisFontWeight, setXAxisFontWeight] = useState(initXAxisObj.fontWeight);


    const [yAxisShow, setYAxisShow] = useState(initYAxisObj.show);
    const [yAxisName, setYAxisName] = useState(initYAxisObj.name);
    const [yAxisNameFontSize, setYAxisNameFontSize] = useState(initYAxisObj.nameFontSize);
    const [yAxisNameFontWeight, setYAxisNameFontWeight] = useState(initYAxisObj.nameFontWeight);
    const [yAxisNamePosition, setYAxisNamePosition] = useState(initYAxisObj.namePosition);
    const [yAxisLineWidth, setYAxisLineWidth] = useState(initYAxisObj.lineWidth);
    const [yAxisLineType, setYAxisLineType] = useState(initYAxisObj.lineType);
    const [yAxisLineColor, setYAxisLineColor] = useState(initYAxisObj.lineColor);
    const [yAxisFontSize, setYAxisFontSize] = useState(initYAxisObj.fontSize);
    const [yAxisFontColor, setYAxisFontColor] = useState(initYAxisObj.fontColor);
    const [yAxisFontWeight, setYAxisFontWeight] = useState(initYAxisObj.fontWeight);

    const [NLUMode, setNLUMode] = useState(parsedData.customOption && parsedData.customOption.NLUMode ? parsedData.customOption.NLUMode : "hybrid");

    const handleNLUModeChange = (e) => {
        setNLUMode(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.customOption) {
            parsedData.customOption.NLUMode = e.target.value;
        } else {
            parsedData.customOption = {NLUMode: e.target.value};
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisShowChange = (e) => {
        setXAxisShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.show = e.target.checked;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleUpdateXAxisName = (e) => {
        setXAxisName(e.target.value);
    }

    const updateXAxisName = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.name = xAxisName;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisNameFontSizeChange = (e) => {
        setXAxisNameFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.nameTextStyle.fontSize = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisNameFontWeightChange = (e) => {
        setXAxisNameFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.nameTextStyle.fontWeight = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisxAxisNamePositionChange = (e) => {
        setXAxisNamePosition(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.nameLocation = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisLineTypeChange = (e) => {
        setXAxisLineType(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.axisLine.lineStyle.type = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisLineWidthChange = (e) => {
        setXAxisLineWidth(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.axisLine.lineStyle.width = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisLineColorChange = (e) => {
        setXAxisLineColor(e.target.value);
    }

    const updateXAxisLineColor = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.axisLine.lineStyle.color = xAxisLineColor;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisFontSizeChange = (e) => {
        setXAxisFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.axisLabel.fontSize = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisFontColorChange = (e) => {
        setXAxisFontColor(e.target.value);
    }

    const updateXAxisFontColor = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.axisLabel.color = xAxisFontColor;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleXAxisFontWeightChange = (e) => {
        setXAxisFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.xAxis) {
            parsedData.baseOption.xAxis.axisLabel.fontWeight = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisShowChange = (e) => {
        setYAxisShow(e.target.checked);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.show = e.target.checked;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleUpdateYAxisName = (e) => {
        setYAxisName(e.target.value);
    }

    const updateYAxisName = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.name = yAxisName;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleyAxisNameFontSizeChange = (e) => {
        setYAxisNameFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.nameTextStyle.fontSize = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisNameFontWeightChange = (e) => {
        setYAxisNameFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.nameTextStyle.fontWeight = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisNamePositionChange = (e) => {
        setYAxisNamePosition(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.nameLocation = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisLineTypeChange = (e) => {
        setYAxisLineType(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.axisLine.lineStyle.type = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisLineWidthChange = (e) => {
        setYAxisLineWidth(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.axisLine.lineStyle.width = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisLineColorChange = (e) => {
        setYAxisLineColor(e.target.value);
    }

    const updateYAxisLineColor = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.axisLine.lineStyle.color = yAxisLineColor;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisFontSizeChange = (e) => {
        setYAxisFontSize(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.axisLabel.fontSize = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisFontColorChange = (e) => {
        setYAxisFontColor(e.target.value);
    }

    const updateYAxisFontColor = () => {
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.axisLabel.color = yAxisFontColor;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisFontWeightChange = (e) => {
        setYAxisFontWeight(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.axisLabel.fontWeight = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    const handleYAxisyAxisNamePositionChange = (e) => {
        setYAxisNamePosition(e.target.value);
        let parsedData = JSON.parse(page.data);
        if(parsedData.baseOption && parsedData.baseOption.yAxis) {
            parsedData.baseOption.yAxis.nameLocation = e.target.value;
        }
        onDataChange(JSON.stringify(parsedData, null, 2));
    }

    return (
        <>
            <p>
                <strong>Choose NLU Mode</strong>
            </p>
            <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    NLU Mode
                    </InputGroup.Text>
                    <Form.Select size="sm" value={NLUMode} onChange={handleNLUModeChange}>
                        <option value="hybrid">Deep Learning Model + Keyword Matching</option>
                        <option value="keyword">Keyword Matching Only</option>
                    </Form.Select>
            </InputGroup>
            <p className="nluModeExplanation">
                <strong>Deep Learning Model + Keyword Matching:</strong> This mode combines the power of deep learning models with keyword matching to provide high accuracy and flexibility in understanding natural language. <font color="red">
                    We recommend this mode for most use cases, because we train our NLU model with a wide range of natural language from data visualization presentation domain.
                </font><br />
                <strong>Keyword Matching Only:</strong> This mode relies solely on keyword matching to interpret user voice. It's faster and simpler but may not handle complex queries as effectively.
            </p>

            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>


            <p>
                <strong>Title Settings</strong>
                <Form.Check // prettier-ignore
                    onChange={handleChartTitleShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={chartTitleShow}
                />
            </p>
            <div style={{display: chartTitleShow ? "block" : "none"}}>  
                <InputGroup className="mb-3">
                    <Form.Control type="text" value={chartTitleText} placeholder="Chart Title" onChange={handleUpdateChartTitleText}/>
                    <button className="btn btn-primary" onClick={updateChartTitleText}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={chartTitleFontsize} onChange={handleChartTitleFontSizeChange}>
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
                        value={chartTitleFontColor}
                        title="Choose your color"
                        onChange={handleChartTitleColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateChartTitleFontColor}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={chartTitleFontWeight} onChange={handleChartTitleFontWeightChange}>
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
                    <Form.Select size="sm" value={chartTitlePosLeft} onChange={handleChartTitlePosLeftChange}>
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
                    <Form.Select size="sm" value={chartTitlePosTop} onChange={handleChartTitlePosTopChange}>
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
                <strong>Year Settings</strong>
                {/* <Form.Check // prettier-ignore
                    onChange={handleYearTitleShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={yearTitleShow}
                /> */}
            </p>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control type="text" value={yearTitleText} placeholder="Chart Title" onChange={handleUpdateChartTitleText}/>
                    <button className="btn btn-primary" onClick={updateYearTitleText}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Size
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yearTitleFontsize} onChange={handleYearTitleFontSizeChange}>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                        <option value="60">60</option>
                        <option value="65">65</option>
                        <option value="70">70</option>
                        <option value="75">75</option>
                        <option value="80">80</option>
                        <option value="85">85</option>
                        <option value="90">90</option>
                        <option value="95">95</option>
                        <option value="100">100</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Color
                    </InputGroup.Text>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        value={yearTitleFontColor}
                        title="Choose your color"
                        onChange={handleYearTitleColorChange}
                    />
                    <button className="btn btn-primary" onClick={updateYearTitleFontColor}>Apply</button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Font Weight
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yearTitleFontWeight} onChange={handleYearTitleFontWeightChange}>
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
                    <Form.Select size="sm" value={yearTitlePosLeft} onChange={handleYearTitlePosLeftChange}>
                        <option value="5%">5%</option>
                        <option value="10%">10%</option>
                        <option value="15%">15%</option>
                        <option value="20%">20%</option>
                        <option value="25%">25%</option>
                        <option value="30%">30%</option>
                        <option value="35%">35%</option>
                        <option value="40%">40%</option>
                        <option value="45%">45%</option>
                        <option value="50%">50%</option>
                        <option value="55%">55%</option>
                        <option value="60%">60%</option>
                        <option value="65%">65%</option>
                        <option value="70%">70%</option>
                        <option value="75%">75%</option>
                        <option value="80%">80%</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Top
                    </InputGroup.Text>
                    <Form.Select size="sm" value={yearTitlePosTop} onChange={handleYearTitlePosTopChange}>
                    <option value="5%">5%</option>
                        <option value="10%">10%</option>
                        <option value="15%">15%</option>
                        <option value="20%">20%</option>
                        <option value="25%">25%</option>
                        <option value="30%">30%</option>
                        <option value="35%">35%</option>
                        <option value="40%">40%</option>
                        <option value="45%">45%</option>
                        <option value="50%">50%</option>
                        <option value="55%">55%</option>
                        <option value="60%">60%</option>
                        <option value="65%">65%</option>
                        <option value="70%">70%</option>
                        <option value="75%">75%</option>
                        <option value="80%">80%</option>
                    </Form.Select>
                </InputGroup>
            </div>
            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>

            <div>

            <p>
                <strong>X Axis Settings</strong>
                {/* <Form.Check // prettier-ignore
                    onChange={handleXAxisShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={xAxisShow}
                /> */}
            </p>
            <div>
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

            <p>
                <strong>Y Axis Settings</strong>
                {/* <Form.Check // prettier-ignore
                    onChange={handleYAxisShowChange}
                    style={{ float: "right" }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={yAxisShow}
                /> */}
            </p>
                <InputGroup className="mb-3">
                    <Form.Control type="text" value={yAxisName} placeholder="X-Axis Name" onChange={handleUpdateYAxisName}/>
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
            <div style={{display: yAxisShow ? "block" : "none"}}>
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

            </div>

        </>
    )

}


export default BubbleChartSettings;