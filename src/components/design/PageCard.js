
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {DeleteFilled, DeleteOutlined} from '@ant-design/icons';
import {Card, Row, Col, Button} from 'antd'

export default function PageCard({ page, handleClick, handleDelPage, ...props }) {

    const nonActiveStyle = {
        height: 82 * 1.1,
        width: 146 * 1.1,
        borderRadius: 10,
        position: 'relative',
        padding: '0px',
        backgroundColor: 'white',
    }

    

    const activeStyle = {
        ...nonActiveStyle,
        border: '3px solid #F59F22',
    }


    const handleDeletePage = (e) => {
        e.stopPropagation();
        handleDelPage(page);
    }

    return (
        <div
            style={{
                textAlign: 'top',
                position: 'relative',
                marginTop: 10,
            }}
            onClick={() => {handleClick(page)}}
        >   
        <Row>
                <Col flex={2} style={{textAlign: 'right', color: "#fff", marginRight: '-10px'}}>
                    <span>{page.index + 1}</span>
                </Col>
                <Col flex={8} style={{textAlign: 'center'}}>
                    <div 
                        style={page.active ? activeStyle : nonActiveStyle}
                        className={"design-page-card"}
                    >   {
                            page.img !== "" && page.img !== undefined && page.img !== null &&
                            <img style={{
                                height: 82 * 1,
                                width: 146 * 1,
                            }} src={`data:image/svg+xml;utf8,${encodeURIComponent(page.img)}`}/>
                        }
                        {
                            page.active && <Button style={{
                                display: 'inline-block',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                background: 'none',

                            }} type="primary" shape="circle" icon={<DeleteOutlined />} onClick={handleDeletePage} />
                        }
                        {/* <div dangerouslySetInnerHTML={{ __html: page.img }} /> */}
                        {/* <img src={`data:image/svg+xml;utf8,${encodeURIComponent(page.img)}`} /> */}
                    </div>
                </Col>
            </Row>
             
            
        </div>
    )
}