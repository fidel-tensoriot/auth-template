import React from 'react'
import { Box, Typography } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";

import PageLayout from './components/PageLayout'
import Protected from './Auth'
import LandingPage from './pages/LandingPage';
import Test from './pages/Test'

function App() {
  return (
    <PageLayout>
      <Typography>Test PageLayout</Typography>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<Protected> <Test /> </Protected>} />
      </Routes>
    </PageLayout>
  )
}

export default App
