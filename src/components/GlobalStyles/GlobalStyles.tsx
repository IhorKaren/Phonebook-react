import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';

const GlobalStyle = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          '[data-feather], .feather': {
            color: 'var(--Icon-color)',
            margin: 'var(--Icon-margin)',
            fontSize: 'var(--Icon-fontSize, 20px)',
            width: '1em',
            height: '1em',
          },
        }}
      />
      <CssBaseline />
    </>
  );
};

export default GlobalStyle