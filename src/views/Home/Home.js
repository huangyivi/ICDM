import React, { Component } from 'react';
import "./Home.less"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-container flex-center">
                <div className="title flex-center">DP-STP</div>
                <div className="abstract">
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Abstract</strong>-With  the  rapid  development  of  wireless  commu-nication  and  localization  technologies,  the  easier  collection  oftrajectory  data  can  bring  potential  data-driven  value.  In  recentyears,   extensive   researches   have   focused   on   how   to   publishtrajectory data without revealing personal information. However,the existing researches have some deficiencies. For example, theycannot  strike  a  good  balance  between  data  utility  and  privacyprotection. In this paper, we propose DP-STP(Differential PrivacySequential   Trajectory   Publishing)   framework   which   satisfiesdifferential  privacy  while  publishing  sequential  trajectory  datawith high utility. First, a multi level adaptive grid is proposed tomap trajectories to multi level grids, which generalizes the trajec-tories and make trajectories more uniformly distributed and lessdisturbed  by  noise.  Second,  DP-STP  designs  a  post-processingmethod based on the trajectory direction and trajectory densityto solve the problem that the end point deviates too much from itspredecessor  while  generating  trajectorys,  so  that  the  trajectoryis  more  in  line  with  the  real  situation.  The  experiments  onbenchmark datasets and taxi dataset in Guangzhou, China showthat  DP-STP  is  significantly  better  than  the  state-of-art  methodin  terms  of  trajectory  utility.
                </div>
            </div>  
         );
    }
}
 
export default Home;