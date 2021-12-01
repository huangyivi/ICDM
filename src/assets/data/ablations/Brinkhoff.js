const RE = [
    {
        "epsilon" : 0.1,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 0.5,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 1.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 2.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    }
]
const FP = [
    {
        "epsilon" : 0.1,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 0.5,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 1.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 2.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    }
]
const KT = [
    {
        "epsilon" : 0.1,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 0.5,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 1.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 2.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    }
]
const TE = [
    {
        "epsilon" : 0.1,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 0.5,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 1.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 2.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    }
]
const DE = [
    {
        "epsilon" : 0.1,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 0.5,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 1.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    },
    {
        "epsilon" : 2.0,
        "Baseline (DP-Star)" : 0.0017,
        "Baseline+MRAG" : 0.1363,
        "Baseline+RWDP" : 0.123,
        "Baseline+STCM" : 0.123,
        "Baseline+MRAG+RWDP+STCM" : 0.123
    }
]

export default {
    RE,
    FP,
    KT,
    TE,
    DE
}