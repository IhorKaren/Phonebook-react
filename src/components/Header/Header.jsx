import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import MenuIcon from '@mui/icons-material/Menu';
import theme from 'components/Theme/Theme';
import ColorSchemeToggle from '../ColorSchemeToggle';

export const openSidebar = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
};

export const closeSidebar = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
};

const toggleSidebar = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn');
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
};

export default function Header() {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange theme={theme}>
      <Sheet
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          width: '100vw',
          height: 'var(--Header-height)',
          zIndex: 9995,
          py: 1,
          px: 2,
          gap: 1,
          boxShadow: 'sm',
        }}
      >
        <GlobalStyles
          styles={theme => ({
            ':root': {
              '--Header-height': '52px',
              [theme.breakpoints.up('md')]: {
                '--Header-height': '0px',
              },
            },
          })}
        />
        <IconButton
          onClick={() => toggleSidebar()}
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <MenuIcon />
        </IconButton>
        {/* <MuiLogo variant="plain" sx={{ boxShadow: 'none', mr: 'auto' }} /> */}
        <ColorSchemeToggle sx={{ ml: '30px' }} />
      </Sheet>
    </CssVarsProvider>
  );
}
