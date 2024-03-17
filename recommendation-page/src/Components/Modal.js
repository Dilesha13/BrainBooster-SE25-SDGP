import React from "react";
const Modal=()=>{
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close"><i class="fa-light fa-square-xmark"></i></button>
                <div className="inner-box">
                    <img src="./images/book01.jpeg" alt="book"/>
                    <div className="info">
                        <h1>ffffffffffffffffffffffffffffffffffffffffffff</h1>
                        <h3>sssssssssssssss</h3><br/>
                        <h4>eeeeeeeeeeeeee<span>345566</span></h4><br/>
                        <a href="#"><button>More</button></a>
                    </div>
                </div>
                <h4 className="description">uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</h4>
            </div>
        </div>
        </>
    )
}
export default Modal;