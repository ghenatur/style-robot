import React from 'react';
import {useState} from "react";


const Row = ({img1, img2, img3}) => {

    const imgList = [
        {
            id: img1,
            src: img1
        },
        {
            id: img2,
            src: img2
        },
        {
            id: img3,
            src: img3
        },
    ]
    const [dragImg, setDragImg] = useState([])

    function allowDrop(ev) {
        ev.preventDefault()
    }

    function drag(ev) {
        ev.dataTransfer.setData('img', ev.target.id)
    }

    function drop(ev) {
        const data = ev.dataTransfer.getData('img');
        setDragImg([document.getElementById(data)])
    }

    return (
        <div className="row">
            <div className={'column col1'} onDragOver={allowDrop} onDrop={drop}>
                {dragImg.map(img =>
                    <img src={img.src} alt={img.id} id={img.id} key={img.src} draggable={false}/>
                )}
            </div>
            <div className={'column col2'}>
                {dragImg.map(img =>
                    <img src={img.src} alt={img.id} id={img.id} key={img.src} draggable={false}/>
                )}
            </div>
            <div className={'column col3'} onDragStart={drag} onDragOver={allowDrop}>
                {imgList.map(img =>
                    <div>
                    <img src={img.src} alt={img.id} id={img.id} key={img.src} draggable={true}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row;
