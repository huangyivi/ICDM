const RE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.0005,
        "DPSTAR" : 0.1363
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.0002,
        "DPSTAR" : 0.0294
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.0004,
        "DPSTAR" : 0.0212
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.0002,
        "DPSTAR" : 0.0219
    },
]
const FP = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.502,
        "DPSTAR" : 0.618
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.525,
        "DPSTAR" : 0.620
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.581,
        "DPSTAR" : 0.745
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.625,
        "DPSTAR" : 0.806
    },
]
const KT = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.002,
        "DPSTAR" : -0.044
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.003,
        "DPSTAR" : 0.026
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.006,
        "DPSTAR" : 0.023
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.020,
        "DPSTAR" : -0.029
    },
]
const TE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.007,
        "DPSTAR" : 0.124
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.006,
        "DPSTAR" : 0.072
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.005,
        "DPSTAR" : 0.063
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.003,
        "DPSTAR" : 0.060
    },
]
const DE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.003,
        "DPSTAR" : 0.446
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.017,
        "DPSTAR" : 0.216
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.005,
        "DPSTAR" : 0.130
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.003,
        "DPSTAR" : 0.081
    },
]

export default {
    RE,
    FP,
    KT,
    TE,
    DE
}