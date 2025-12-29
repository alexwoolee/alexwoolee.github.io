import styles from "./home.module.css";

// Color mapping based on dominant colors from each icon's SVG
const iconColors = {
  C: "#a9bacd",
  Cpp: "#00599c",
  CSharp: "#9B4F96",
  Css: "#1572B6",
  Flutter: "#02569B",
  GDScript: "#414350",
  Html: "#E44D26",
  Java: "#0074BD",
  JavaScript: "#F0DB4F",
  Python: "#306998",
  Ruby: "#CC342D",
  SQL: "#008000",
  Tailwindcss: "#38bdf8",
  TypeScript: "#00599c",
};

// Convert hex to rgba with opacity
const hexToRgba = (hex, opacity = 0.2) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const SkillIconWrapper = ({ IconComponent, iconName }) => {
  const color = iconColors[iconName] || "#434447";
  const backgroundColor = hexToRgba(color, 0.2); // Uses the colors set above

  const containerStyle = {
    backgroundColor: backgroundColor,
    width: "2.3rem",
    minWidth: "2.3rem",
  };

  return (
    <div className={styles.languageClass} style={containerStyle}>
      <IconComponent className={styles.languageIcon} />
    </div>
  );
};

export default SkillIconWrapper;
