import React, { useState } from 'react'
import { AppBar, Box, Link, Toolbar, Typography, useTheme, useMediaQuery, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    // position: "block",
    backgroundColor: theme.colors.red,
    color: theme.palette.text.secondary,
    minHeight: theme.drawer.height,
    zIndex: 10000,
}));

const RenderRoutes = ({ weight }) => {
    const NavTypography = styled(Typography)(() => ({
        fontWeight: weight ? weight : ''
    }));

    return (
        <>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <NavTypography>Home</NavTypography>
            </Link>
            <Link href="/test" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <NavTypography>Test</NavTypography>
            </Link>
        </>
    )
}


function PageLayout(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [showMenu, setShowMenu] = useState(false)


    return (
        <>
            {/* // HEADER --------------------------------------------------------------------------------------------- */}
            <StyledAppBar elevation={0}>
                <Toolbar
                    disableGutters
                    sx={{
                        px: 3,
                        // padding: '15px 22px',
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ color: '#fff', fontSize: '32px', fontWeight: 700, marginLeft: '12px' }}>
                            LOGO
                        </Typography>
                    </Link>
                    <Box display='flex' alignItems='center'>
                        {/* Regular Menu --------------------------------------------------------------------------------- */}
                        {matches ? (
                            <Box display='flex' gap='20px' mr='10px'>
                                <RenderRoutes weight='900' />
                            </Box>
                        ) : (
                            <Button variant="contained" onClick={() => setShowMenu(!showMenu)}>Menu</Button>
                        )}
                    </Box>
                </Toolbar>
                {/* Mobile Menu ------------------------------------------------------------------------------------------- */}
                {showMenu && matches === false && (
                    <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-around' }}>
                        <RenderRoutes weight='900' />
                    </Box>
                )}
            </StyledAppBar>
            {/* // END HEADER --------------------------------------------------------------------------------------------- */}
            <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
                <Box
                    sx={{
                        background: '#fff',
                        overflowY: 'auto',
                        height: theme.drawer.calcHeight,
                        marginTop: showMenu && matches === false ? '24px' : '',
                        width: '100%',
                        // padding: '65px 36px 0px 36px',
                        // marginTop: theme.drawer.height,
                        // width: matches ? theme.drawer.calcWidth : '100%',
                        // marginLeft: matches ? theme.drawer.width : '',
                        padding: theme.respStyle.pageLayout,
                    }}
                >
                    {props.children}
                </Box>
            </Box>
        </>
    )
}

export default PageLayout