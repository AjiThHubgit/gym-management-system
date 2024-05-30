import React from 'react';
import Box from '@mui/material/Box';
import LeftSideBar from '../components/LeftSideBar';
import MainContent from '../components/MainContent';

function Dashboard() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <LeftSideBar />
                <MainContent sx={{ marginLeft: '250px', width: 'calc(100% - 250px)' }} />
            </Box>
        </>
    )
}

export default Dashboard;