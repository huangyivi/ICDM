import React, { Component } from 'react';
import './Map.less'
const AMap = window.AMap;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rmap : null
        }
    }
    componentDidMount() {
        this.rmap = new AMap.Map('container', {
            zoom : 9,
            center : [113,23]
        });
        // 使用插件
        let that = this;
        AMap.plugin(['AMap.ToolBar'],function() {
            let toolbar = new AMap.ToolBar({
                position : 'LT'
            });
            that.rmap.addControl(toolbar);
        })
    }
    componentDidUpdate(prevProps, prevState) {
        // this.rmap && this.rmap.destory();
        console.log(this.rmap);
    }
    render() { 
        return ( 
            <div className="mapCmp">
                <div id="container" style={{ width:"100%", height:"100%" }}></div>
            </div>
        );
    }
}
 
export default Map;