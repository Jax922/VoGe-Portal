import React, { useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AdvancedChartSettings({ page, onDataChange, ...props }) {

    return (
        <>
            <p>
                <strong>Mark Points</strong>
            </p>
            

            <hr style={{
                borderTop: "3px dotted #bbb"
            }}/>

            <p>
                <strong>Mark Areas</strong>
            </p>
        </>
    )

}


export default AdvancedChartSettings;