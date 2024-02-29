import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Card} from 'antd'
import { EditOutlined, PlayCircleOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, StarTwoTone} from '@ant-design/icons';
import { Button, Modal, Toast } from "react-bootstrap";
import { database, storage } from "../../firebase";
const { Meta } = Card;

export default function SlideCard({ slide, ...props }) {

    const coverImg = slide.coverImg ? slide.coverImg : "/empty_slides.jpeg"
    const title = slide.title ? slide.title : "Untitled"

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    let dataOption = {}
    if (slide && slide.data) {
        dataOption = JSON.parse(slide.data);
    }

    console.log("slide", slide);

    function openModal(e) {
        e.stopPropagation();
        e.preventDefault();
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    const handleSlideDelete = () => {
        closeModal();
        setLoading(true);
        const deleteTask = storage.refFromURL(slide.url).delete();

        deleteTask.then(() =>
            database.slides
                .where("userId", "==", slide.userId)
                .where("name", "==", slide.name)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                    setLoading(false);
                })
        );
    }

    const handleGotoDisplay = () => {
        const displayLink = `userId=${slide.userId}&slide=${slide.name}&name=${slide.title}`;
        const link = `http://localhost:3001/?model=selfie_segmentation&${displayLink}`;
        window.open(link, "_blank");
    }

    return(
        <Card
            hoverable
            style={{
                width: 240,
                padding: '5px',
            }}
            cover={ 
                coverImg === "/empty_slides.jpeg" ? <img style={{
                    width: 230,
                    height: 135,
                }} alt="" src={coverImg} /> : 
                <img style={{
                    width: 230,
                    height: 135,
                }} src={`data:image/svg+xml;utf8,${encodeURIComponent(coverImg)}`}/>
                
            }
            actions={[
                <DeleteOutlined key="delete" className='icon-hover' onClick={openModal}/>,
                <EditOutlined key="edit"/>,
                // <EllipsisOutlined key="ellipsis" />,
                <PlayCircleOutlined onClick={handleGotoDisplay}/>
            ]}
        >
            <Meta title={title}/>

            <Modal show={open} onHide={closeModal} centered>
                <Modal.Body>
                    Are you sure you want to delete {slide.title} slide ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleSlideDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            {loading &&
                ReactDOM.createPortal(
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            maxWidth: "250px",
                        }}
                    >
                        {<Toast className="p-3 m-3 fs-5">Deleting...</Toast>}
                    </div>,
                    document.body
                )}
           
        </Card>
    )

}