
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useLocation } from 'react-router-dom';
import {Card, Row, Col, Tabs, Button} from 'antd'
import { BarChartOutlined, CodeOutlined, DatabaseFilled, FileOutlined, AudioOutlined} from '@ant-design/icons';
import MyChart from './MyChart'
import CodeDisplay from './CodeDisplay'
import DataUpload from './DataUpload'
import SinglePageTimeline from "./SinglePageTimeline";
import BubbleChartTimeline from "./BubbleChartTimeline";
import { storage, database } from "../../firebase";

export default function PageDesign({page, onDataChange, onTextEdit, slide, ...props }) {


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');
    const slideName = queryParams.get('slide');
    const slideTitle = queryParams.get('title');

    const storageRef = storage.ref();
    const filePath = `slides/${userId}/${slideName}`;

    const tabs = [
        {
            label: 'Chart',
            key: '1',
            icon: BarChartOutlined,
        },
        {
            label: 'Editor',
            key: '2',
            icon: CodeOutlined,
        },
        {
            label: 'Uploads',
            key: '3',
            icon: FileOutlined,
        },
        {
            label: 'Design',
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
    const [chartType, setChartType] = useState(page.type)
    const [pageData, setPageData] = useState(page)

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

    const updatePageData = (newData) => {
        // console.log(slide);
        // console.log(newData);
        // storageRef.child(filePath).putString(JSON.stringify(slide)).then((snapshot) => {
        //     console.log('update timeline ===>', snapshot);
        // });
        localStorage.setItem('activePageTimeline', JSON.stringify(newData.storyTimeline));
    };

    return (
        <div
            style={{
                textAlign: 'top',
                top: 50,
                left: 30,
                width: '100%',
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
                    //  empty page
                    page && !page.type && <div style={{textAlign: 'center', marginTop: '20%'}}>
                        <img src="./visualization.png" alt="empty chart" style={{width: '200px'}}/>
                        <h4 style={{
                            color: '#999999',
                        }}>Please select a chart type from the Library on the right</h4>
                    </div>
                }
                {
                    page && page.type !== "" && 
                    <Tabs
                        defaultActiveKey={activeTab}
                        tabBarStyle={{
                            border: 'none',
                            // borderBottom: '1px solid #8E8E8E',
                            color: "#7F7F7F !important",
                        }}
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
                {  page && page.type !== "" && activeTab === '3' && <DataUpload type={chartType} code={dataString} onDataChange={handleDataChange}/>}
                {  page && page.type !== "timelinebubble" && activeTab === '4' && <SinglePageTimeline page={page} onDataChange={handleDataChange}/> }
                {
                    page && page.type === "timelinebubble" && activeTab === '4' && <BubbleChartTimeline page={page} onDataChange={handleDataChange} onUpdatePageData={updatePageData} slide={slide}/>
                }
                

            </div>
            
        </div>
    )
}