// Design Tokens extracted from Stitch MCP - "Design System Framework" project
// Theme: Cyberpunk Minimalist

// ─── Colors ───
export const colors = {
  // Backgrounds
  bgDeep:    "#050A12",
  bgAlt:     "#0C1220",
  surface:   "#111827",
  borderDim: "#1E2D40",

  // Accents
  cyan:      "#00D8FF",
  violet:    "#7C3AED",

  // Text
  textPri:   "#F0F4F8",
  textSec:   "#8899AA",
  textMuted: "#445566",

  // Functional
  success:   "#22C55E",
  warning:   "#F59E0B",
};

// ─── Typography ───
export const typography = {
  heroHeadline: {
    fontFamily: "Syne",
    fontSize: "80px",
    fontWeight: "800",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
  },
  heroHeadlineMobile: {
    fontFamily: "Syne",
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
  },
  sectionTitle: {
    fontFamily: "Syne",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "1.2",
  },
  subHeading: {
    fontFamily: "DM Sans",
    fontSize: "28px",
    fontWeight: "600",
    lineHeight: "1.4",
  },
  bodyLg: {
    fontFamily: "DM Sans",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "1.6",
  },
  bodyMd: {
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.6",
  },
  labelMono: {
    fontFamily: "JetBrains Mono",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "1.0",
  },
  caption: {
    fontFamily: "DM Sans",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.4",
  },
};

// ─── Spacing ───
export const spacing = {
  containerMax: "1280px",
  gutter: "24px",
  marginMobile: "20px",
  sectionPadding: "120px",
  stackSm: "8px",
  stackMd: "16px",
  stackLg: "32px",
};

// ─── Border Radius ───
export const rounded = {
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
};
