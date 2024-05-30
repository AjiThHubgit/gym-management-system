// LeftSideBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';

function LeftSideBar() {
    const navigate = useNavigate(); // Initialize useNavigate

    const menuItems = [
        { text: "DashBoard", icon: <DashboardIcon />, route: '/dashboard' },
        { text: "Members", icon: <PeopleIcon />, route: '/members' },
        { text: "Trainers", icon: <FitnessCenterIcon />, route: '/trainers' },
        { text: "Payments", icon: <PaymentIcon />, route: '/payments' },
        { text: "Settings", icon: <SettingsIcon />, route: '/settings' }
    ];

    const handleMenuItems = (route) => {
        navigate(route);
    }

    return (
        <Box sx={{ width: 250, height: '100vh', position: 'fixed', bgcolor: 'red' }}>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemButton onClick={() => handleMenuItems(item.route)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default LeftSideBar;
