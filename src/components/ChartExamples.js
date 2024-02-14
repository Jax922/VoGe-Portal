import React, { useRef, useState, useEffect } from 'react';
import lineChartExamples from './examples/lineChartExamples';
import barChartExamples from './examples/barChartExamples';
import MyChart from './design/ExampleChartRender';

const ChartExamples = () => {

    const exampleLists = lineChartExamples.concat(barChartExamples);

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
            <div  class="alert alert-primary" style={{
                textAlign: "center",
                marginBottom: "0px",
                width:"15%",
                position: "fixed",
                top: "45%",
                left: "40%",
                display: copied ? "block" : "none"
            
            }} role="alert">
                JSON data copied!
            </div>
            <header className="example-header">
                <h2><span>
                    <font style={{color: "#0056b3"}}>Vo</font><font style={{color: "#ff7f0e"}}>Ge</font>
                  </span> Chart Examples</h2>
            </header>

            <div class="example-chart-container">
                {
                    exampleLists.map((example, index) => {
                        return (
                            
                            <div class="example-examplechart" id={`chart${index}`}>
                                <MyChart data={example.data}  container={`mychart${index}`}/>
                                <div class="example-examplechart-title">
                                    <p>{example.name}</p>
                                    <hr style={{
                                            borderTop: "3px dotted #bbb"
                                        }}/>
                                    <div>
                                    {/* <button id="debugButton" data-status="off" class="btn rounded-circle icon-button">
                                        <i class="bi bi-bug"></i>
                                    </button> */}
                                        <button type="button" onClick={e => handleCopy(example.data)} class="btn btn-outline-primary btn-lg">
                                            <i class="bi bi-filetype-json"></i> Copy Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChartExamples;