module.exports = {
  theme: {
    extend: {
      colors: {
        aero: {
          glass: "rgba(255, 255, 255, 0.60)",
          "glass-hover": "rgba(255, 255, 255, 0.75)",
          "glass-border": "rgba(255, 255, 255, 0.85)",

          "bg-start": "#F0F9FF",
          "bg-mid": "#E0F2FE",
          "bg-end": "#FFFFFF",

          sky: "#0EA5E9",
          aqua: "#00D2FF",
          mint: "#34D399",

          heading: "#0F172A",
          body: "#334155",
          muted: "#64748B",
        },
      },
      boxShadow: {
        "aero-glass": "0 8px 32px 0 rgba(14, 165, 233, 0.12)",
        "aero-hover": "0 12px 40px 0 rgba(14, 165, 233, 0.22)",
        "aero-gloss": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)",
      },
    },
  },
};
