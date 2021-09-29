import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Drawer } from "./Drawer";
import { AppBar } from "./AppBar"

import { mainListItems, secondaryListItems } from './listItems';

import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Badge, Box, Container, CssBaseline,Paper,
    Divider, IconButton, List, Toolbar, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

const theme = createTheme();


export function Layout({ children }: any){
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const drawerWidth: number = 240;
    return (

        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            {/*<div className="main-layout">*/}
                <AppBar position="absolute" >
                    <Toolbar sx={{pr: '24px',  /* keep right padding when drawer closed */}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{marginRight: '36px'/*, ...(open && {display: 'none'}),*/}}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>

                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List>{mainListItems}</List>
                    <Divider/>
                    <List>{secondaryListItems}</List>



                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            { children }
                        </Grid>
                        {/*<Copyright sx={{ pt: 4 }} />*/}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>

    );

}


