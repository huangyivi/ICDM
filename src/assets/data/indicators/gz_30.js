const RE = [
    {
        "epsilon" : 0.1,
        "AWDP" : 0.0004,
        "DPSTAR" : 0.1503
    },
    {
        "epsilon" : 0.5,
        "AWDP" : 0.0003,
        "DPSTAR" : 0.011
    },
    {
        "epsilon" : 1.0,
        "AWDP" : 0.0006,
        "DPSTAR" : 0.027
    },
    {
        "epsilon" : 2.0,
        "AWDP" : 0.0002,
        "DPSTAR" : 0.0123
    },
]
const FP = [
    {
        "epsilon" : 0.1,
        "AWDP" : 0.462,
        "DPSTAR" : 0.618
    },
    {
        "epsilon" : 0.5,
        "AWDP" : 0.396,
        "DPSTAR" : 0.620
    },
    {
        "epsilon" : 1.0,
        "AWDP" : 0.425,
        "DPSTAR" : 0.745
    },
    {
        "epsilon" : 2.0,
        "AWDP" : 0.380,
        "DPSTAR" : 0.806
    },
]
const KT = [
    {
        "epsilon" : 0.1,
        "AWDP" : 0.037,
        "DPSTAR" : -0.044
    },
    {
        "epsilon" : 0.5,
        "AWDP" : 0.042,
        "DPSTAR" : 0.026
    },
    {
        "epsilon" : 1.0,
        "AWDP" : 0.036,
        "DPSTAR" : 0.023
    },
    {
        "epsilon" : 2.0,
        "AWDP" : 0.027,
        "DPSTAR" : -0.029
    },
]
const TE = [
    {
        "epsilon" : 0.1,
        "AWDP" : 0.0060,
        "DPSTAR" : 0.124
    },
    {
        "epsilon" : 0.5,
        "AWDP" : 0.0049,
        "DPSTAR" : 0.0723
    },
    {
        "epsilon" : 1.0,
        "AWDP" : 0.0042,
        "DPSTAR" : 0.0632
    },
    {
        "epsilon" : 2.0,
        "AWDP" : 0.0031,
        "DPSTAR" : 0.0604
    },
]
const DE = [
    {
        "epsilon" : 0.1,
        "AWDP" : 0.0144,
        "DPSTAR" : 0.4458
    },
    {
        "epsilon" : 0.5,
        "AWDP" : 0.0171,
        "DPSTAR" : 0.2158
    },
    {
        "epsilon" : 1.0,
        "AWDP" : 0.0049,
        "DPSTAR" : 0.1302
    },
    {
        "epsilon" : 2.0,
        "AWDP" : 0.0042,
        "DPSTAR" : 0.0807
    },
]

export default {
    RE,
    FP,
    KT,
    TE,
    DE
}