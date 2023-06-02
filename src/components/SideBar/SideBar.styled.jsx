import { styled } from '@mui/joy/styles';
import { CssVarsProvider } from '@mui/joy/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import theme from 'components/Theme/Theme';
import ColorSchemeToggle from 'Services/ColorSchemeToggle';

const Dropdown = styled('i')(({ theme }) => ({
  color: theme.vars.palette.text.tertiary,
}));

export default function StyledSidebar({ name, email, onClose, onClick }) {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange theme={theme}>
      <Sheet
        className="Sidebar"
        sx={{
          position: {
            xs: 'fixed',
            md: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
            md: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 10000,
          height: '100dvh',
          width: 'var(--Sidebar-width)',
          top: 0,
          p: 1.5,
          py: 3,
          pb: {
            xs: 1,
            sm: 1,
            md: 1,
          },
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <GlobalStyles
          styles={theme => ({
            ':root': {
              '--Sidebar-width': '224px',
              [theme.breakpoints.up('lg')]: {
                '--Sidebar-width': '256px',
              },
            },
          })}
        />
        <Box
          className="Sidebar-overlay"
          sx={{
            position: 'fixed',
            zIndex: 9998,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'background.body',
            opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
            transition: 'opacity 0.4s',
            transform: {
              xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
              lg: 'translateX(-100%)',
            },
          }}
          onClick={() => onClose()}
        />
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {/* <MuiLogo /> */}
          <Typography fontWeight="xl">PHONEBOOK</Typography>
          <ColorSchemeToggle />
        </Box>

        <Box
          sx={{
            minHeight: 0,
            overflow: 'hidden auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <List
            sx={{
              '--ListItem-radius': '8px',
              '--List-gap': '4px',
              '--List-nestedInsetStart': '40px',
            }}
          >
            <ListItem>
              <ListItemButton color="primary" selected variant="soft">
                <ListItemDecorator>
                  <HomeIcon />
                </ListItemDecorator>
                <ListItemContent to="/">Home</ListItemContent>
                <Dropdown data-feather="chevron-down" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Avatar variant="outlined" src="/static/images/avatar/3.jpg" />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography fontSize="sm" fontWeight="lg">
              {name}
            </Typography>
            <Typography level="body3">{email}</Typography>
          </Box>
          <IconButton variant="plain" color="neutral" onClick={onClick}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Sheet>
    </CssVarsProvider>
  );
}
