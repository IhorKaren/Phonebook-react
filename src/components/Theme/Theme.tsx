const { extendTheme } = require('@mui/joy/styles');

const theme = extendTheme({
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
});

export default theme;
