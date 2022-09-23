function hexToRgb(color) {
  const chroma = require('chroma.ts');
  return chroma(color).rgb().join(', ');
}

export default hexToRgb;
