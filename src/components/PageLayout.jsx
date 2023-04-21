import React from 'react'
import { AppBar, Box, Link, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    // position: "block",
    backgroundColor: theme.colors.red,
    color: theme.palette.text.secondary,
    minHeight: theme.drawer.height,
    zIndex: 10000,
}));


function PageLayout(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));


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
                    <Box display={'flex'} alignItems={'center'}>
                        <Box sx={{ marginLeft: '18px', textAlign: 'center', background: theme.colors.lighterGrey, padding: '8px 17px', borderRadius: '8px' }}>
                            <Typography sx={{ color: theme.colors.darkerGrey, fontSize: '12px', fontWeight: 600 }}>
                                {'Sign Out'}
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            {/* // END HEADER --------------------------------------------------------------------------------------------- */}
            <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
                <Box
                    sx={{
                        background: '#fff',
                        overflowY: 'auto',
                        height: theme.drawer.calcHeight,
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