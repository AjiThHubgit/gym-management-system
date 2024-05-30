import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Member from './Member';
import Trainer from './Trainer';

function MainContent() {
    return (
        <Box sx={{ flex: 1, padding: 2, marginLeft: '250px' }}>
            <Routes>
                <Route path="/members" element={<Member />} />
                <Route path="/trainers" element={<Trainer />} />
            </Routes>
        </Box>
    )
}

export default MainContent;