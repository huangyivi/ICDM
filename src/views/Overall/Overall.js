import React from 'react';
import "./Overall.less";


function Overall() {
    return (
        <div className="overall-container">
            <div className="overall-item">
                <img className="overall-img" src={require("../../assets/total-compare/brinkhoff2.png").default}/>
                <img className="overall-img" src={require("../../assets/total-compare/brinkhoff8.png").default}/>
            </div>
            <div className="overall-item">
                <img className="overall-img" src={require("../../assets/total-compare/geolife2.png").default}/>
                <img className="overall-img" src={require("../../assets/total-compare/geolife8.png").default}/>
            </div>
            <div className="overall-item">
                <img className="overall-img" src={require("../../assets/total-compare/gztaxi2.png").default}/>
                <img className="overall-img" src={require("../../assets/total-compare/gztaxi8.png").default}/>
            </div>
        </div>
    )
}

export default Overall;