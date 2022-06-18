import React from "react";
import { Link } from "react-router-dom";

const MessageDetail = () => {
    return (
        <dvi className='main'>
            <h1>Hello</h1>
            <div className='ui card centered'>
                <div className='content'>
                    <div className='header'>Dima</div>
                    <div className='description'>voronovdmitry95@gmail.com</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button>Назад</button>
                </Link>
            </div>
        </dvi>
    )
}

export default MessageDetail