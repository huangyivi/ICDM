import React from "react";
import './Dataset.less';
import SideNavi from '../../components/SideNavi/SideNavi';
import Introduction from '../../components/Introduction/Introduction';
const Dataset = () => (
  <div className="dataset-container flex-between">
    <SideNavi></SideNavi>
    <Introduction></Introduction>
  </div>
);

export default Dataset;
