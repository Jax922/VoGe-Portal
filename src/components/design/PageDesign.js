
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Card, Row, Col, Tabs, Button} from 'antd'
import { BarChartOutlined, CodeOutlined, DatabaseFilled, FileOutlined, AudioOutlined} from '@ant-design/icons';
import MyChart from './MyChart'
import CodeDisplay from './CodeDisplay'
import DataUpload from './DataUpload'
import SinglePageTimeline from "./SinglePageTimeline";
import BubbleChartTimeline from "./BubbleChartTimeline";

export default function PageDesign({page, onDataChange, onTextEdit, ...props }) {

    const tabs = [
        {
            label: 'Chart',
            key: '1',
            icon: BarChartOutlined,
        },
        {
            label: 'Option',
            key: '2',
            icon: CodeOutlined,
        },
        {
            label: 'Data',
            key: '3',
            icon: FileOutlined,
        },
        {
            label: 'Presentation Design',
            key: '4',
            icon: AudioOutlined,
        }
    ]

    if (page && page.type === 'code') {
        tabs.push({label: 'Code', key: '3', icon: CodeOutlined})
    }
    


    // const {columns, rows} = defaultLineChart.convertData2Table(defaultLineChart.defaultData)

    const [activeTab, setActiveTab] = useState(tabs[0].key)
    const [dataString, setDataString] = useState(page.data)

    const handleTabChange = (key) => {
        setActiveTab(key);
        if (key === '2') {
            onTextEdit(false);
        }
        if (key === '1') {
            onTextEdit(true);
        }
    }

    const handleDataChange = (value) => {
        onDataChange(value);
    }

    

    return (
        <div
            style={{
                textAlign: 'top',
                top: 50,
                left: 30,
                width: '95%',
                height: '80%',
            }}
        >   
            <div 
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 0,
                }}
            >
                {
                    page && page.type !== "" && 
                    <Tabs
                        defaultActiveKey={activeTab}
                        items={
                            tabs.map((tab, i) => {
                                const Icon = tab.icon;
                                const id = tab.key;
                                return {
                                    label: (
                                    <span>
                                        <Icon/>
                                        {tab.label}
                                    </span>
                                    ),
                                    key: id,
                                    children: "",
                            };
                        })}
                        onChange={handleTabChange}
                    />
                }
                {page && page.type !== "" && activeTab === '1' && <MyChart data={JSON.parse(dataString)} />}
                {/* {  page && page.type === "line" && activeTab === '1' && <MyLineChart data={JSON.parse(dataSting)} />}
                {  page && page.type === "bar" && activeTab === '1' && <MyBarChart data={JSON.parse(dataSting)} />} */}
                {/* {  page && page.type !== "" && activeTab === '2' && <DataTable columns={columns} rows={rows}/>} */}
                {  page && page.type !== "" && activeTab === '2' && <CodeDisplay code={dataString} onDataChange={handleDataChange}/> }
                {  page && page.type !== "" && activeTab === '3' && <DataUpload code={dataString} onDataChange={handleDataChange}/>}
                {  page && page.type !== "timelinebubble" && activeTab === '4' && <SinglePageTimeline page={page} onDataChange={handleDataChange}/> }
                {
                    page && page.type === "timelinebubble" && activeTab === '4' && <BubbleChartTimeline page={page} onDataChange={handleDataChange}/>
                }
                

            </div>
            
        </div>
    )
}