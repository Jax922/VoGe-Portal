import React, { useRef, useState, useEffect } from 'react';
import lineChartExamples from './examples/lineChartExamples';
import barChartExamples from './examples/barChartExamples';
import MyChart from './design/ExampleChartRender';
import { Layout, Menu, theme } from 'antd';
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const ChartExamples = () => {

    const exampleLists = lineChartExamples.concat(barChartExamples);
    const midpoint = Math.ceil(exampleLists.length / 2); 

    const leftContent = exampleLists.slice(0, midpoint); 
    const rightContent = exampleLists.slice(midpoint); 

    const [copied, setCopied] = useState(false);

    const handleCopy = (data) => {
        var jsonString = JSON.stringify(data, null, 2); 

        if (!navigator.clipboard) {
            var tempElem = document.createElement('textarea');
            tempElem.value = jsonString;
            document.body.appendChild(tempElem);
            tempElem.select();
            document.execCommand("copy");
            document.body.removeChild(tempElem);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        } else {
            navigator.clipboard.writeText(jsonString).then(function() {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1000);
            })
            .catch(function(err) {
                console.error("Could not copy text: ", err);
            });
        }
    }


    return (
        <>
            
            <header className="example-header">
            <Navbar.Brand as={Link} to="/" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                marginTop: '15px'
            }}>
                    <img
                        src="/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    {"   "}
                    <span style={
                        {
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "45px",
                            color: "#000000"
                        }
                    }><span>
                    <font style={{color: "#F59F22"}}>Vo</font><font style={{color: "#80B2D6"}}>Ge</font>
                  </span> Present</span>
                </Navbar.Brand>
                <h2 style={{margin: 'auto'}}>Examples</h2>
            </header>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1', padding: '10px'}}>
                    {
                        leftContent.map((example, index) => {
                            return (
                                
                                <div class="example-examplechart" id={`chart${index}`}>
                                    <div class="example-examplechart-title">
                                        {/* <p>{example.name}</p>
                                        <hr style={{
                                                borderTop: "3px dotted #bbb"
                                            }}/> */}
                                            <button type="button" onClick={e => handleCopy(example.data)} class="btn btn-primary btn-sm">
                                                <i class="bi bi-filetype-json"></i> Copy Code
                                            </button>
                                    </div>
                                    <MyChart style={{
                                        marginLeft: "10px",
                                        width: "90%",
                                        height: "380px",
                                        mariginTop: "10px"
                                    }} data={example.data}  container={`mychart${index}`}/>
                                </div>
                            )
                        })
                    }
                
                </div>
                <div style={{flex: '1', padding: '10px'}}>
                {
                        rightContent.map((example, index) => {
                            return (
                                
                                <div class="example-examplechart" id={`chart${index}`}>
                                    
                                    <div class="example-examplechart-title">
                                        {/* <p>{example.name}</p>
                                        <hr style={{
                                                borderTop: "3px dotted #bbb"
                                            }}/> */}
                                        {/* <div>
                                            <button type="button" onClick={e => handleCopy(example.data)} class="btn btn-outline-primary btn-lg">
                                                <i class="bi bi-filetype-json"></i> Copy Code
                                            </button>
                                        </div> */}
                                        <button type="button" onClick={e => handleCopy(example.data)} class="btn btn-primary btn-sm">
                                                <i class="bi bi-filetype-json"></i> Copy Code
                                            </button>
                                    </div>
                                    <MyChart style={{
                                        marginLeft: "10px",
                                        width: "90%",
                                        height: "380px",
                                        mariginTop: "10px"
                                    }} data={example.data}  container={`mychartright${index}`}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div  class="alert alert-primary" style={{
                textAlign: "center",
                marginBottom: "0px",
                width:"15%",
                position: "fixed",
                top: "45%",
                left: "40%",
                display: copied ? "block" : "none",
                zIndex: "101"
            
            }} role="alert">
                JSON data copied!
            </div>

            
            <Footer style={{ textAlign: 'center', marginTop: '120px' }}>VoGe Present ©2024 Copyright</Footer>
        </>
    )
}

export default ChartExamples;