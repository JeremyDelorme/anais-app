import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AproposPage from './pages/AproposPage';
import MagasinPage from './pages/MagasinPage';
import SciencePage from './pages/SciencePage';
import MezonPage from './pages/MezonPage';


const drawerWidth = 240;
const navItems = ['mezon', 'apropos', 'science', 'magasin', 'temoignages'];

export default function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const links = [
        {
            to: '/apropos',
            name: 'À propos'
        },
        {
            to: '/magasin',
            name: 'Magasin'
        },
        {
            to: '/science',
            name: 'Science'
        },
        {
            to: '/temoignages',
            name: 'Témoignages'
        },
    ]


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Link href="/mezon">
                        <Box
                            component="img"
                            sx={{ height: 54 }}
                            alt="Logo"
                            src={"AnanouPortrait1.png"}
                        />
                    </Link>
                    <Box>
                        {navItems.map((item) => (
                            <Button
                                color='secondary'
                                key={item}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}