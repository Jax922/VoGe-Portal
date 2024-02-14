import React, { useState, useEffect} from "react";
import { UploadOutlined, PlayCircleOutlined,ClearOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import Form from 'react-bootstrap/Form';

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

    console.log("X Axis:", xAxis);
    console.log("Data:", data);
    return { xAxisName, xAxis, data };
}


function DataUpload({code, onDataChange, ...props}) {
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

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target.result;
            // onDataChange(data);
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


            console.log("Result:", JSON.parse(code));
            console.log(result);

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

