import React from 'react';

function Introduction(props) {
    return (
        <div className="flex-start-nocenter-col" style={{height: '100%',maxWidth: 800,fontSize: '1.2rem',overflow: "auto"}}>
            <div className="flex-center" style={{marginTop: "20px",fontSize: '30px',fontWeight: 600}}>Introduction of Ablation Analysis</div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;We give the complete ablation results, while varying $\epsilon$ between 0.1 and 2.0.</p>
            <br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;We can observe that AWDP often provides better utility than DP-Star and single contribution with respect to all metrics, which are expected results. Together these results provide important insights into the design of privacy budgets allocation by introducing the regional characteristics, and demonstrate that there exists a significant positive correlation between data utility and weighted differential privacy.</p>
        </div>
    )
}

export default Introduction;