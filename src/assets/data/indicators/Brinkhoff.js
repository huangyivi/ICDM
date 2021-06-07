const RE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.0018,
        "DPSTAR" : 0.1363
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.0021,
        "DPSTAR" : 0.0294
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.0012,
        "DPSTAR" : 0.0212
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.0121,
        "DPSTAR" : 0.0219
    },
]
const FP = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.119,
        "DPSTAR" : 0.532
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.277,
        "DPSTAR" : 0.549
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.198,
        "DPSTAR" : 0.625
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.178,
        "DPSTAR" : 0.588
    },
]
const KT = [
    {
        "epsilon" : 0.1,
        "DPSTP" : -0.011,
        "DPSTAR" : -0.123
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : -0.062,
        "DPSTAR" : 0.068
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : -0.036,
        "DPSTAR" : 0.013
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : -0.009,
        "DPSTAR" : 0.015
    },
]
const TE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.097,
        "DPSTAR" : 0.014
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.084,
        "DPSTAR" : 0.022
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.093,
        "DPSTAR" : 0.025
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.085,
        "DPSTAR" : 0.026
    },
]
const DE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.026,
        "DPSTAR" : 0.306
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.021,
        "DPSTAR" : 0.146
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.033,
        "DPSTAR" : 0.074
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.039,
        "DPSTAR" : 0.058
    },
]

export default {
    RE,
    FP,
    KT,
    TE,
    DE
}