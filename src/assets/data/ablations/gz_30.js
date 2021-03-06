const RE = [
  {
    epsilon: 0.1,
    "Baseline (DP-Star)": 0.1503,
    "Baseline+MRAG": 0.0672,
    "Baseline+RWDP": 0.0428,
    "Baseline+STCM": 0.0703,
    "AWDP": 0.0004,
  },
  {
    epsilon: 0.5,
    "Baseline (DP-Star)": 0.011,
    "Baseline+MRAG": 0.0094,
    "Baseline+RWDP": 0.0046,
    "Baseline+STCM": 0.0106,
    "AWDP": 0.0003,
  },
  {
    epsilon: 1.0,
    "Baseline (DP-Star)": 0.027,
    "Baseline+MRAG": 0.0136,
    "Baseline+RWDP": 0.0098,
    "Baseline+STCM": 0.0159,
    "AWDP": 0.0006,
  },
  {
    epsilon: 2.0,
    "Baseline (DP-Star)": 0.123,
    "Baseline+MRAG": 0.0792,
    "Baseline+RWDP": 0.0319,
    "Baseline+STCM": 0.0673,
    "AWDP": 0.0002,
  },
];
const FP = [
  {
    epsilon: 0.1,
    "Baseline (DP-Star)": 0.618,
    "Baseline+MRAG": 0.5662,
    "Baseline+RWDP": 0.5011,
    "Baseline+STCM": 0.5781,
    "AWDP": 0.462,
  },
  {
    epsilon: 0.5,
    "Baseline (DP-Star)": 0.62,
    "Baseline+MRAG": 0.5719,
    "Baseline+RWDP": 0.5174,
    "Baseline+STCM": 0.5826,
    "AWDP": 0.396,
  },
  {
    epsilon: 1.0,
    "Baseline (DP-Star)": 0.745,
    "Baseline+MRAG": 0.6621,
    "Baseline+RWDP": 0.5286,
    "Baseline+STCM": 0.6829,
    "AWDP": 0.425,
  },
  {
    epsilon: 2.0,
    "Baseline (DP-Star)": 0.806,
    "Baseline+MRAG": 0.5072,
    "Baseline+RWDP": 0.4661,
    "Baseline+STCM": 0.5729,
    "AWDP": 0.38,
  },
];
const KT = [
  {
    epsilon: 0.1,
    "Baseline (DP-Star)": -0.044,
    "Baseline+MRAG": 0.0142,
    "Baseline+RWDP": 0.0273,
    "Baseline+STCM": 0.0138,
    "AWDP": 0.037,
  },
  {
    epsilon: 0.5,
    "Baseline (DP-Star)": 0.026,
    "Baseline+MRAG": 0.0251,
    "Baseline+RWDP": 0.0367,
    "Baseline+STCM": 0.0247,
    "AWDP": 0.042,
  },
  {
    epsilon: 1.0,
    "Baseline (DP-Star)": 0.023,
    "Baseline+MRAG": 0.0271,
    "Baseline+RWDP": 0.0326,
    "Baseline+STCM": 0.0252,
    "AWDP": 0.036,
  },
  {
    epsilon: 2.0,
    "Baseline (DP-Star)": -0.029,
    "Baseline+MRAG": 0.0128,
    "Baseline+RWDP": 0.0244,
    "Baseline+STCM": 0.0105,
    "AWDP": 0.027,
  },
];
const TE = [
  {
    epsilon: 0.1,
    "Baseline (DP-Star)": 0.1241,
    "Baseline+MRAG": 0.0627,
    "Baseline+RWDP": 0.0391,
    "Baseline+STCM": 0.0644,
    "AWDP": 0.006,
  },
  {
    epsilon: 0.5,
    "Baseline (DP-Star)": 0.0723,
    "Baseline+MRAG": 0.0439,
    "Baseline+RWDP": 0.0298,
    "Baseline+STCM": 0.0464,
    "AWDP": 0.0049,
  },
  {
    epsilon: 1.0,
    "Baseline (DP-Star)": 0.0632,
    "Baseline+MRAG": 0.0357,
    "Baseline+RWDP": 0.0285,
    "Baseline+STCM": 0.0362,
    "AWDP": 0.0042,
  },
  {
    epsilon: 2.0,
    "Baseline (DP-Star)": 0.0604,
    "Baseline+MRAG": 0.042,
    "Baseline+RWDP": 0.0244,
    "Baseline+STCM": 0.0461,
    "AWDP": 0.0031,
  },
];
const DE = [
  {
    epsilon: 0.1,
    "Baseline (DP-Star)": 0.4458,
    "Baseline+MRAG": 0.0942,
    "Baseline+RWDP": 0.0412,
    "Baseline+STCM": 0.0965,
    "AWDP": 0.0144,
  },
  {
    epsilon: 0.5,
    "Baseline (DP-Star)": 0.2158,
    "Baseline+MRAG": 0.0625,
    "Baseline+RWDP": 0.0322,
    "Baseline+STCM": 0.0638,
    "AWDP": 0.0171,
  },
  {
    epsilon: 1.0,
    "Baseline (DP-Star)": 0.1302,
    "Baseline+MRAG": 0.0603,
    "Baseline+RWDP": 0.0211,
    "Baseline+STCM": 0.0642,
    "AWDP": 0.0049,
  },
  {
    epsilon: 2.0,
    "Baseline (DP-Star)": 0.0807,
    "Baseline+MRAG": 0.0523,
    "Baseline+RWDP": 0.0356,
    "Baseline+STCM": 0.0611,
    "AWDP": 0.0042,
  },
];

export default {
  RE,
  FP,
  KT,
  TE,
  DE,
};
