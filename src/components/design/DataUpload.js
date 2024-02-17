import React, { useState, useEffect} from "react";
import { UploadOutlined, PlayCircleOutlined,ClearOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import Form from 'react-bootstrap/Form';
import { op } from "stardust-core/dist/specification/construct";

// "backgroundColor": "#eeeeee",
// "timelineNodeIdx": 0,
// "NLUMode": "hybrid",
// "mode": "progressive",
// "yAxis": true,
// "xAxis": true,
// "theme": "light",
// "height": "600px",

let colors = [
    "blue",
    "green",
    "yellow",
    "red",
    "cerulean",
    "teal",
    "orange",
    "purple",
    "pink"
]



function processData(csv) {
    const lines = csv.split("\n");

    const xAxis = [];
    const firstLineCells = lines[0].split(",");
    const xAxisName = firstLineCells[0]; 

    const data = [];

    for (let i = 1; i < firstLineCells.length; i++) {
        data.push({
            name: firstLineCells[i],
            values: []
        });
    }

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        xAxis.push(currentLine[0]);
        for (let j = 1; j < currentLine.length; j++) {
            // if (isNaN(currentLine[j])) {
            //     message.error("Data must be numeric");
            //     return;
            // }
            try {
                data[j-1].values.push(currentLine[j]);
            } catch (error) {
                alert("Invalid csv data format!")
            }
        }
    }

    return { xAxisName, xAxis, data };
}

function processDataBubble(csv) {
    const lines = csv.split("\n");

    const firstLineCells = lines[0].split(",");

    const data = {};
    const years = [];
    let maxXAxis = 0;
    let maxYAxis = 0;
    let minBubbleSize = 100000000000;
    let maxBubbleSize = 0;

    for (let i = 1; i < lines.length; i++) {
        if (lines[i] === "") {
            continue;
        }
        const currentLine = lines[i].split(",");

        if(!data[currentLine[5]]) {
            data[currentLine[5]] = [];
            years.push(currentLine[5]);
        }

        if (!data[currentLine[5]][currentLine[0]]) {
            data[currentLine[5]][currentLine[0]] = [];
        }

        data[currentLine[5]][currentLine[0]].push([currentLine[1], currentLine[2], currentLine[3], currentLine[4], currentLine[5]]);

        if (Number(currentLine[1]) > maxXAxis) {
            maxXAxis = Number(currentLine[1]);
        }

        if (Number(currentLine[2]) > maxYAxis) {
            maxYAxis = Number(currentLine[2]);
        }

        if (Number(currentLine[3]) > maxBubbleSize) {
            maxBubbleSize = Number(currentLine[3]);
        }

        if (Number(currentLine[3]) < minBubbleSize) {
            minBubbleSize = Number(currentLine[3]);
        }
    }

    return { data, years, maxXAxis, maxYAxis, minBubbleSize, maxBubbleSize };
    
}


function DataUpload({code, type, onDataChange, ...props}) {
    const [fileList, setFileList] = useState([]);


    const rgbs = [
        "#CCCCFF",
        "#008080",
        "#9FE2BF",
        "#6495ED",
        "#40E0D0",
    ]

    const exampleFiles = [
        {link: './exampleDatasets/example-simple.csv', name: 'example-simple.csv'},
        {link: './exampleDatasets/example-dataset-linechart.csv', name: 'example-dataset-linechart.csv'},
        {link: './exampleDatasets/example-dataset-barchart.csv', name: 'example-dataset-barchart.csv'},
    ]

    // timelinebubble

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        if (type === 'timelinebubble') {
            bubbleFileUpload(file, reader);
        } else {
            normalFileUpload(file, reader);
        }
    }

    const normalFileUpload = (file, reader) => {
        reader.onload = (event) => {
            const data = event.target.result;
            const result = processData(data);
            let option = JSON.parse(code);

            option.xAxis.data = result.xAxis;
            option.xAxis.name = result.xAxisName;


            for (let i = 0; i < result.data.length; i++) {
                if (option.series[i] === undefined) {
                    option.series[i] = JSON.parse(JSON.stringify(option.series[i-1]));
                    option.series[i].itemStyle.color = rgbs[i];
                    option.series[i].emphasis.itemStyle.color = rgbs[i];
                }
                option.series[i].name = result.data[i].name;
                option.series[i].data = result.data[i].values;
            }

            option.series = option.series.slice(0, result.data.length);

            onDataChange(JSON.stringify(option, null, 2));

        };
        reader.readAsText(file);
    }

    const bubbleFileUpload = (file, reader) => {
        reader.onload = (event) => {
            const data = event.target.result;
            const result = processDataBubble(data);

            let option = JSON.parse(code);

            const groupData = result.data;
            const timelineYears = result.years;
            
            if (option.customOption.splitData) {
                option.customOption.splitData = []
            }

            // update bubble size
            option.customOption.minValue = result.minBubbleSize;
            option.customOption.maxValue = result.maxBubbleSize;
            option.customOption.minSize = 10;
            option.customOption.maxSize = 100;
            
            // update years
            option.baseOption.timeline.data = timelineYears;
            option.baseOption.title[0].text = timelineYears[0];

            // update series
            const groupKeys = Object.keys(groupData[timelineYears[0]]);

            if (groupKeys.length <= 4) {
                groupKeys.forEach((key, index) => {
                    option.baseOption.series[0].data[index].name = key;
                    option.baseOption.series[0].data[index].data = groupData[timelineYears[0]][key];
                });
                for (let i = groupKeys.length; i < 4; i++) {
                    option.baseOption.series[0].data[i].name = "";
                    option.baseOption.series[0].data[i].data = [];
                }
            }

            if (groupKeys.length > 4) {
                groupKeys.forEach((key, index) => {
                    if (index < 4) {
                        option.baseOption.series[0].data[index].name = key;
                        option.baseOption.series[0].data[index].data = groupData[timelineYears[0]][key];
                    } else {
                        option.baseOption.series[0].data.push(JSON.parse(JSON.stringify(option.baseOption.series[0])));
                        option.baseOption.series[0].data[index].dataColorname = colors[index];
                        option.baseOption.series[0].data[index].name = key;
                        option.baseOption.series[0].data[index].data = groupData[timelineYears[0]][key];
                    }
                });
            }

            option.baseOption.series = [option.baseOption.series[0]];

            option.baseOption.xAxis.type = "value";
            option.baseOption.xAxis.min = 0;
            option.baseOption.xAxis.max = result.maxXAxis;
            option.baseOption.yAxis.type = "value";
            option.baseOption.yAxis.min = 0;
            option.baseOption.yAxis.max = result.maxYAxis;

           

            let oneOption = {
                title: {
                    show: true,
                    text: ""
                },
                series: []
            }

            let oneSerie = {
                name: "",
                type: "scatter",
                itemStyle: {
                    opacity: 0.8
                },
                data: [],
                symbolSize: "sizeFunction"
            }
            option.options = [];

            for (const yearKey in groupData) {
                let copyOption = JSON.parse(JSON.stringify(oneOption));
                copyOption.title.text = yearKey;

                for (const legendKey in groupData[yearKey]) {
                    let copySerie = JSON.parse(JSON.stringify(oneSerie));
                    copySerie.name = legendKey;
                    copySerie.data = groupData[yearKey][legendKey];
                    copyOption.series.push(copySerie);
                }
                option.options.push(copyOption);
            }

            // option.series = option.series.slice(0, result.data.length);

            console.log("bubble option", option);

            onDataChange(JSON.stringify(option, null, 2));

        };
        reader.readAsText(file);
    }

    return (
        <div style={{
            width: '100%',
            height: '70vh',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '10px',
            boxSizing: 'border-box',
            textAlign: 'center'
        }}>
            {/* <div style={{marginBottom: '10px', textAlign: 'left'}}>
              
                <Button style={{marginLeft: '10px'}} icon={<ClearOutlined />}>Clear</Button>
                <Button style={{marginLeft: '10px'}} type="primary" icon={<PlayCircleOutlined />} >Run</Button>
            </div> */}
            <br />
            <br />
            <br />
            <Form.Group controlId="formFile" id="csvFile" className="mb-3">
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>
            {/* <Upload className="avatar-uploader" {...propsUpload} fileList={fileList}>

                <Button icon={<UploadOutlined />}>Click to Upload Dataset</Button>
            </Upload> */}

            <br />
            <br />
            <br />

            <p>Example Dataset Files</p>
            {
                exampleFiles.map((file, index) => {
                    return (
                        <p>
                            <a key={index} href={file.link} download={file.name}>{file.name}</a>
                        </p>
                    )
                })
            }
        </div>
    )
}


export default DataUpload;

