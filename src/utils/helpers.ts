export function isCurrentPathActive(curPath: string, pathname: string) {
  return pathname.includes(curPath);
}

export function getRandomBgColor() {
  const colors = [
    "FF6B6B", // Soft Red
    "6A0572", // Deep Purple
    "FF9F1C", // Bright Orange
    "28C76F", // Fresh Green
    "17A2B8", // Teal Blue
    "FF477E", // Vibrant Pink
    "845EC2", // Rich Violet
    "FFC75F", // Warm Yellow
    "FF5F40", // Coral Red
    "1FAB89", // Mint Green
  ];
  const idx = Math.floor(Math.random() * colors.length) + 1;
  return colors[idx];
}
