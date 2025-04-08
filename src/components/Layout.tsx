import { Outlet, Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';

const drawerWidth = 240;

export default function Layout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Top Navigation Bar */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        My App
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/">
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/settings">
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Page Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}