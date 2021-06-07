const RE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.073,
        "DPSTAR" : 0.0413
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.0023,
        "DPSTAR" : 0.0106
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.0010,
        "DPSTAR" : 0.0030
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.0046,
        "DPSTAR" : 0.0386
    },
]
const FP = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.461,
        "DPSTAR" : 0.521
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.879,
        "DPSTAR" : 0.901
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.749,
        "DPSTAR" : 1.322
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 1.255,
        "DPSTAR" : 1.717
    },
]
const KT = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.286,
        "DPSTAR" : -0.009
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.299,
        "DPSTAR" : 0.098
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.272,
        "DPSTAR" : 0.098
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.332,
        "DPSTAR" : 0.182
    },
]
const TE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.052,
        "DPSTAR" : 0.147
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.007,
        "DPSTAR" : 0.065
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.004,
        "DPSTAR" : 0.042
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.003,
        "DPSTAR" : 0.028
    },
]
const DE = [
    {
        "epsilon" : 0.1,
        "DPSTP" : 0.134,
        "DPSTAR" : 0.446
    },
    {
        "epsilon" : 0.5,
        "DPSTP" : 0.013,
        "DPSTAR" : 0.211
    },
    {
        "epsilon" : 1.0,
        "DPSTP" : 0.006,
        "DPSTAR" : 0.130
    },
    {
        "epsilon" : 2.0,
        "DPSTP" : 0.004,
        "DPSTAR" : 0.073
    },
]

export default {
    RE,
    FP,
    KT,
    TE,
    DE
}