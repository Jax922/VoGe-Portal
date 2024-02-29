import React, { useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import StoryScipt from "./StoryScript";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import scriptTemplate from "./scriptTemplate";

const dataGroupColors = [
    "blue",
    "yellow",
    "green",
    "red",
];

function getRandomElement(arr) {
    if (arr && arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    return null;
}

const scriptTemplateOfBubbleChart = [
    "In year of [Year], [Data Elemens], which means [Specifics].",
    "Observe the [Year], where we see , [Data Elements]. This comparison illuminates the trends and [The Facts of the trends].",
    "Look at the [Year], which value is [Data Elements]. This comparison sheds light on the trends and [The Facts of the trends].",
]


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

const findTimeNodes = (contents) => {
    let timeNodes = [];
    contents.forEach(content => {
        timeNodes.push(content.timeNode);
    });
    return timeNodes;
}

const handleViewOfStoryTimeline = (storyTimeline) => {
    let viewOfStoryTimeline = [];
    storyTimeline.forEach(node => {
        if (node.isShow) {
            if (node.nodeName === "Warm-up") {
                node.contents.forEach(content => {
                    viewOfStoryTimeline.push(content);
                });
            }
            if (node.nodeName === "X-Axis") {
                // if(node.mode === "splitAxis") {
                //     node.contents.forEach(content => {
                //         viewOfStoryTimeline.push(content);
                //     });
                // } else { // combineAxis
                    let timeNodes = findTimeNodes(node.contents);
                    let content = {
                        type: "X-Axis",
                        timeNode: "X-Axis",
                        script: node.contents.map(content => content.script).join("\n")
                    }
                    viewOfStoryTimeline.push(content);
                // }
            }
            if (node.nodeName === "Y-Axis") {
                // if(node.mode === "splitAxis") {
                //     node.contents.forEach(content => {
                //         viewOfStoryTimeline.push(content);
                //     });
                // } else { // combineAxis
                    let timeNodes = findTimeNodes(node.contents);
                    let content = {
                        type: "Y-Axis",
                        timeNode: "Y-Axis",
                        script: node.contents.map(content => content.script).join("\n")
                    }
                    viewOfStoryTimeline.push(content);
                // }
            }
            if (node.nodeName === "Data Element") {
                
                node.contents.forEach(content => {
                    let obj = JSON.parse(JSON.stringify(content));
                    obj.timeNode = obj.timeNode + "-" + obj.dataNode;
                    viewOfStoryTimeline.push(obj);
                });
            }
            if (node.nodeName === "Ending") {
                node.contents.forEach(content => {
                    viewOfStoryTimeline.push(content);
                });
            }
        }
    });
    return viewOfStoryTimeline;
}

const initDataElementNode = (option) => {
    const xAxisData = option.xAxis.data;
    const length = xAxisData.length - 1;
    const dataElementContents = [];
    dataElementContents.push({
        type: "Data-Element",
        timeNode: xAxisData[0],
        script: getRandomElement(scriptTemplate.dataElements)
    })
    dataElementContents.push({
        type: "Data-Element",
        timeNode: xAxisData[length - 1],
        script: getRandomElement(scriptTemplate.dataElements)
    })
    return dataElementContents;
}

function SinglePageTimeline({ page, onDataChange, ...props }) {
    const pageData = JSON.parse(page.data);
    let initViewStoryTimeline = null;
    const timelineYears = pageData.baseOption.timeline.data;
    const dataGroup = [];

    // pageData.baseOption.series.forEach(serie => {
        const dataItem = pageData.baseOption.series[0].data || [];
        
        dataItem.forEach((item, index) => {
            let key = item.name
            let colorName = item.dataColorname;
            let vals = [];
            item.data.forEach((dataitem, index) => {
                vals.push(dataitem[3]);
            });
            dataGroup.push({
                key: key,
                vals: vals,
                colorName: colorName
            });
        });
        
    // })

    console.log("dataGroup", dataGroup);






    if (page){
        if (!page.storyTimeline || page.storyTimeline.length === 0 || pageData.customOption.uploadData == "yes") {
            // defaultStoryTimeline[3].contents = initDataElementNode(pageData);
            pageData.customOption.uploadData = "no";
            defaultStoryTimeline[3].contents = [];

            

            dataGroup.forEach((dataItem, index) => {

                if (dataItem.key && dataItem.colorName) {



                let scriptBubbleChart = "";
                let nodeName = dataItem.key+"("+dataItem.colorName+")";

                if (pageData && pageData.options) {
                    pageData.options.forEach(option => {
                        let str = getRandomElement(scriptTemplateOfBubbleChart);
                        if (option.title && option.title.text == String(timelineYears[0])) {
                            str = str.replace("[Year]", option.title.text);
                            if(option.series) {
                                option.series.forEach(serie => {
                                    let elemKey = nodeName.split("(")[0].toLowerCase();
                                    if (serie.name.toLowerCase() == elemKey) {
                                        let allSeriesDataElems = "";
                                        serie.data.forEach(dataElem => {
                                            allSeriesDataElems += dataElem[3]+ "("+dataElem[0] +","+ dataElem[1] +","+ dataElem[2] + ")" + ", ";
                                        });
                                        scriptBubbleChart = scriptBubbleChart + str.replace("[Data Elements]", allSeriesDataElems) + ". ";
                                    }
                                    if (serie.name.toLowerCase() != elemKey) {
                                        let allSeriesDataElems = "";
                                        serie.data.forEach(dataElem => {
                                            if (dataElem[3].toLowerCase() == elemKey) {
                                                allSeriesDataElems += dataElem[3]+ "("+dataElem[0] +","+ dataElem[1] +","+ dataElem[2] + ")" + ", ";
                                                scriptBubbleChart = scriptBubbleChart + str.replace("[Data Elements]", allSeriesDataElems) + ". ";
                                            }
                                        });
                                    }
                                })
                            }

                        }
                    });
                }

                defaultStoryTimeline[3].contents.push({
                    type: "Data-Element",
                    timeNode: timelineYears[0],
                    dataNode: dataItem.key+"("+dataItem.colorName+")",
                    script: scriptBubbleChart
                });
            }
            });
            page.storyTimeline = defaultStoryTimeline;
            initViewStoryTimeline = handleViewOfStoryTimeline(page.storyTimeline);
        } else {
            initViewStoryTimeline = handleViewOfStoryTimeline(page.storyTimeline);
        }
    }

    const [viewStoryTimeline, setViewStoryTimeline] = useState(initViewStoryTimeline);
    const [storyTimelineData, setStoryTimelineData] = useState(page.storyTimeline);

    const [open, setOpen] = useState(false);
    const [isWarmUp, setIsWarmUp] = useState(storyTimelineData[0].isShow);
    const [isXAxisIntro, setIsXAxisIntro] = useState(storyTimelineData[1].isShow);
    const [isYAxisIntro, setIsYAxisIntro] = useState(storyTimelineData[2].isShow);
    const [isDataElementAnalysis, setIsDataElementAnalysis] = useState(storyTimelineData[3].isShow);
    const [isEnding, setIsEnding] = useState(storyTimelineData[4].isShow);
    const [activeTimeNode, setActiveTimeNode] = useState(viewStoryTimeline[0].timeNode);
    const [selectDataElementNode, setSelectDataElementNode] = useState(dataGroup[0].key+"("+dataGroup[0].colorName+")");
    const [selectDataElementYear, setSelectDataElementYear] = useState(timelineYears[0]);

    const initStoryTimeline = [

    ];
    const [storyTimeline, setStoryTimeline] = useState(initStoryTimeline)

    const handleNodeControl = (e, nodeName) => {
        if (nodeName === "Warm-up") {
            storyTimelineData[0].isShow = !isWarmUp;
            setIsWarmUp(!isWarmUp);
        } else if (nodeName === "X-Axis Intro") {
            storyTimelineData[1].isShow = !isXAxisIntro;
            setIsXAxisIntro(!isXAxisIntro);
        } else if (nodeName === "Y-Axis Intro") {
            storyTimelineData[2].isShow = !isYAxisIntro;
            setIsYAxisIntro(!isYAxisIntro);
        } else if (nodeName === "Data Element Analysis") {
            storyTimelineData[3].isShow = !isDataElementAnalysis;
            setIsDataElementAnalysis(!isDataElementAnalysis);
        } else if (nodeName === "Ending") {
            storyTimelineData[4].isShow = !isEnding;
            setIsEnding(!isEnding);
        }
        setStoryTimelineData(storyTimelineData);
        setViewStoryTimeline(handleViewOfStoryTimeline(storyTimelineData));
    }


    const handleStoryScript = (e, type, idx) => {
        console.log(type, idx)
        const script = e.target.value;
        if (type === "Warm-up") {
            storyTimelineData[0].contents[0].script = script;
        }
        if (type === "X-Axis") {
            const lineContent = script.split("\n")[0];
            const tickContent = script.split("\n")[1];
            storyTimelineData[1].contents[0].script = lineContent;
            storyTimelineData[1].contents[1].script = tickContent;
        }
        if (type === "X-Axis Line") {
            storyTimelineData[1].contents[0].script = script;
        }
        if (type === "X-Axis Tick") {
            storyTimelineData[1].contents[1].script = script;
        }
        if (type === "Y-Axis") {
            const lineContent = script.split("\n")[0];
            const tickContent = script.split("\n")[1];
            storyTimelineData[2].contents[0].script = lineContent;
            storyTimelineData[2].contents[1].script = tickContent;
        }
        if (type === "Y-Axis Line") {
            storyTimelineData[2].contents[0].script = script;
        }
        if (type === "Y-Axis Tick") {
            storyTimelineData[2].contents[1].script = script;
        }
        if (type === "Ending") {
            storyTimelineData[4].contents[0].script = script;
        }

        storyTimelineData[3].contents.forEach(content => {
            if (content.timeNode === type) {
                content.script = script;
            }
        })

        setStoryTimelineData(storyTimelineData);
        setViewStoryTimeline(handleViewOfStoryTimeline(storyTimelineData));
    }

    const handleXAxisStyleModeChange = (e) => {
        storyTimelineData[1].mode = e.target.value;
        setStoryTimelineData(storyTimelineData);
        setViewStoryTimeline(handleViewOfStoryTimeline(storyTimelineData));
    }

    const handleYAxisStyleModeChange = (e) => {
        storyTimelineData[2].mode = e.target.value;
        setStoryTimelineData(storyTimelineData);
        setViewStoryTimeline(handleViewOfStoryTimeline(storyTimelineData));
    }

    const handleRemoveDataElementNode = (e, idx) => {
        const dataElementContents = storyTimelineData[3].contents;
        dataElementContents.splice(idx, 1);
        setStoryTimelineData(storyTimelineData);
        setViewStoryTimeline(handleViewOfStoryTimeline(storyTimelineData));
    }

    const handleChangeDataElementNode = (e) => {
        setSelectDataElementNode(e.target.value);
    }

    const handleChangeDataElementYear = (e) => {
        setSelectDataElementYear(e.target.value);
    }



    const handleAddDataELementNode = (e) => {
        const dataElementContents = storyTimelineData[3].contents;
        
        let scriptBubbleChart = "";

        if (pageData && pageData.options) {
            pageData.options.forEach(option => {
                let str = getRandomElement(scriptTemplateOfBubbleChart);
                if (option.title && option.title.text == String(selectDataElementYear)) {
                    str = str.replace("[Year]", option.title.text);
                    if(option.series) {
                        option.series.forEach(serie => {
                            let elemKey = selectDataElementNode.split("(")[0].toLowerCase();
                            if (serie.name.toLowerCase() == elemKey) {
                                let allSeriesDataElems = "";
                                serie.data.forEach(dataElem => {
                                    allSeriesDataElems += dataElem[3]+ "("+dataElem[0] +","+ dataElem[1] +","+ dataElem[2] + ")" + ", ";
                                });
                                scriptBubbleChart = scriptBubbleChart + str.replace("[Data Elements]", allSeriesDataElems) + ". ";
                            }
                            if (serie.name.toLowerCase() != elemKey) {
                                let allSeriesDataElems = "";
                                serie.data.forEach(dataElem => {
                                    if (dataElem[3].toLowerCase() == elemKey) {
                                        allSeriesDataElems += dataElem[3]+ "("+dataElem[0] +","+ dataElem[1] +","+ dataElem[2] + ")" + ", ";
                                        scriptBubbleChart = scriptBubbleChart + str.replace("[Data Elements]", allSeriesDataElems) + ". ";
                                    }
                                });
                            }
                        })
                    }

                }
            });
        }


        dataElementContents.push({
            type: "Data-Element",
            timeNode: selectDataElementYear,
            dataNode: selectDataElementNode,
            script: scriptBubbleChart
        });
        setStoryTimelineData(storyTimelineData);
        setViewStoryTimeline(handleViewOfStoryTimeline(storyTimelineData));
    }

    return (
        <>
            <div className="pre-steps-container">
                <div>
                    {/* <p className="pre-step-title">Story Timeline </p> */}
                </div>
                <div className="steps-container">
                    <div className="pre-step-node"
                        style={{width: "140px"}}
                    >   
                        <p className="pre-step-node-title">
                            <strong>Warm-up</strong>
                            <Form.Check
                                className="switch-button"
                                onChange={(e)=>{handleNodeControl(e, "Warm-up")}}
                                style={{ float: "right" }}
                                type="switch"
                                id="custom-switch"
                                label=""
                                checked={isWarmUp}
                            />
                        </p>
                        <div className={isWarmUp? "pre-step-node-control": "pre-step-node-control-disabled"}>

                        </div>
                    </div>
                    <div className="pre-step-node"
                        style={{width: "160px"}}
                    >
                        <p className="pre-step-node-title">
                            <strong>X-Axis Intro</strong>
                            <Form.Check 
                                className="switch-button"
                                onChange={(e)=>{handleNodeControl(e, "X-Axis Intro")}}
                                style={{ float: "right" }}
                                type="switch"
                                id="custom-switch"
                                label=""
                                checked={isXAxisIntro}
                            />
                        </p>
                        <div className={isXAxisIntro? "pre-step-node-control": "pre-step-node-control-disabled"}>
                            {/* <p style={{
                                fontSize: "10px",
                            }}>Axis Display Style</p>

                            <Form.Select size="sm" value={storyTimelineData[1].mode} onChange={handleXAxisStyleModeChange}>
                                <option value="combineAxis">Together</option>
                                <option value="splitAxis">Step-by-Step</option>
                                
                            </Form.Select> */}
                        </div>

                    </div>
                    <div className="pre-step-node"
                        style={{width: "160px"}}
                    >
                        <p className="pre-step-node-title">
                            <strong>Y-Axis Intro</strong>
                            <Form.Check
                                className="switch-button"
                                onChange={(e)=>{handleNodeControl(e, "Y-Axis Intro")}}
                                style={{ float: "right" }}
                                type="switch"
                                id="custom-switch"
                                label=""
                                checked={isYAxisIntro}
                            />
                        </p>
                        <div className={isYAxisIntro? "pre-step-node-control": "pre-step-node-control-disabled"}>
                            {/* <p style={{
                                fontSize: "10px",
                            }}>Axis Display Style</p>

                            <Form.Select size="sm" value={storyTimelineData[2].mode} onChange={handleYAxisStyleModeChange}>
                                <option value="combineAxis">Together</option>
                                <option value="splitAxis">Step-by-Step</option>
                            </Form.Select> */}
                        </div>

                    </div>
                    <div className="pre-step-node"
                        style={{width: "300px"}}
                    >
                        <p className="pre-step-node-title">
                            <strong>Data Element</strong>
                            <Form.Check
                                className="switch-button"
                                onChange={(e)=>{handleNodeControl(e, "Data Element Analysis")}}
                                style={{ float: "right" }}
                                type="switch"
                                id="custom-switch"
                                label=""
                                checked={isDataElementAnalysis}
                            />
                        </p>

                        <div className={isDataElementAnalysis? "pre-step-node-control": "pre-step-node-control-disabled"}>
                            <p style={{
                                fontSize: "10px",
                            }}>Create Data Element</p>
                            <InputGroup className="mb-3">
                                <Form.Select size="sm" value={selectDataElementYear} onChange={handleChangeDataElementYear}>
                                    {
                                        timelineYears.map((tick, index) => {
                                            return (
                                                <option value={tick} key={index}>{tick}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                                <Form.Select size="sm" value={selectDataElementNode} onChange={handleChangeDataElementNode}>
                                    {
                                        dataGroup.map((dataItem, index) => {
                                            return (
                                                <option value={dataItem.key + "(" + dataItem.colorName + ")"} key={index}>{dataItem.key}</option>
                                            )
                                        })
                                    }
                                    {
                                        dataGroup.map((dataItem, index) => {
                                            return dataItem.vals.map((val, idx) => {
                                                return (
                                                    <option value={val} key={index}>{val}</option>
                                                )
                                            })
                                        })
                                    }
                                </Form.Select>
                                <Button size="sm" variant="primary" onClick={handleAddDataELementNode}>Add</Button>
                            </InputGroup>
                            <div className="added-data-elem-node">
                                {   storyTimelineData && storyTimelineData[3] && storyTimelineData[3].isShow && storyTimelineData[3].contents.map((content, index) => {
                                        return (
                                            <span className="data-elem-node" key={index}>
                                                {content.timeNode + "-" + content.dataNode}
                                                <font className="data-elem-node-del" style={{color: "red"}} onClick={(e) => handleRemoveDataElementNode(e, index)}>
                                                    <i className="bi bi-x-circle-fill"></i>
                                                </font>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                    <div className="pre-step-node"
                        style={{width: "140px"}}
                    >
                        <p className="pre-step-node-title">
                            <strong>Ending</strong>
                            <Form.Check
                                className="switch-button"
                                onChange={(e)=>{handleNodeControl(e, "Ending")}}
                                style={{ float: "right" }}
                                type="switch"
                                id="custom-switch"
                                label=""
                                checked={isEnding}
                            />
                        </p>
                        <div className={isEnding? "pre-step-node-control": "pre-step-node-control-disabled"}>

                        </div>
                    </div>
                </div>
                <div>
                    <p className="pre-step-title">AutoScript</p>
                </div>
                <div className="pre-script-container">
                <Tabs
                    defaultActiveKey={activeTimeNode}
                    id="uncontrolled-tab-example"
                    className="mb-3 pre-script-tabs"
                    // onSelect={(e)=>{setActiveTimeNode()}}
                    >
                    {
                        viewStoryTimeline.map((content, index) => {
                            return (
                                <Tab eventKey={content.timeNode+ String(index)} title={content.timeNode} key={index}>
                                    <Form>
                                        <Form.Control as="textarea" rows={5} value={content.script} onChange={(e) => handleStoryScript(e, content.timeNode, index)}/>
                                    </Form>
                                </Tab>
                            )
                        })
                    }
                    
                </Tabs>
                    
                    {/* <StoryScipt /> */}
                </div>
            </div>
        </>
    )

}


export default SinglePageTimeline;