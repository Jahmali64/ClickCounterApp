import {JSX} from "react";
import {Outlet, Link} from 'react-router-dom';
import {AppBar, Box, Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText} from '@mui/material';

const drawerWidth = 240;
const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
};

type MenuItem = {
    name: string,
    path: string,
};
const menuItems: MenuItem[] = [
    {name: 'Dashboard', path: '/'},
    {name: 'Settings', path: '/settings'},
    {name: 'Counters', path: '/counters'},
];

export default function MainLayout() {
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">Click Counter App</Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" sx={drawerStyle}>
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {
                            menuItems.map((item: MenuItem): JSX.Element => (
                                <ListItem disablePadding>
                                    <ListItemButton component={Link} to={item.path}>
                                        <ListItemText primary={item.name}/>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3, minHeight: '100vh'}}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}