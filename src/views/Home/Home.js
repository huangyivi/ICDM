import React, { Component } from 'react';
import "./Home.less"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-container flex-center">
                <div className="title flex-center">DP-STP</div>
                <div className="abstract">
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Abstract</strong>—With the rapid development of location services andpositioning technologies, the collection of trajectory data becomeseasier and meaningful. In recent years, extensive researches havefocused on how to publish trajectory data without revealingpersonal information. However, the existing researches have thefollowing shortcomings: The grid structure is a uniform or onlya secondary grid structure, which can not preserve trajectoryinformation effectively. The end point of the generated trajectorydeviates too much from its predecessor, etc. In this paper, wepropose DP-S.T.P, a systematic component-based framework forpublishing sequential trajectory data, which satisfies differentialprivacy while publishing sequential trajectory data with highusability. First, DP-S.T.P uses a multi-level adaptive grid togeneralize the high-dimensional trajectories, which can makethe trajectories more uniformly distributed and less disturbedby noise. Second, DP-S.T.P designs a post-processing methodbased on the trajectory direction and trajectory density to solvethe problem that the end point deviates too much from itspredecessor while generating trajectorys, so that the trajectory ismore in line with the real situation. In addition to the standarddataset, we also verified the superiority of DP-S.T.P on thereal Guangzhou Taxi dataset through extensive simulations fromvarious metrics. The experimental results show that DP-S.T.Pis significantly better than the existing methods in terms oftrajectory usability and accuracy.
                </div>
            </div>  
         );
    }
}
 
export default Home;