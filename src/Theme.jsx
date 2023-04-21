import { createTheme } from "@mui/material";

const Drawer = {
    drawerWidth: '260px',
    drawerHeight: '60px',
    drawerHeight2: '66px',
}

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#076A99',
        },
        secondary: {
            main: 'rgb(35, 47, 62)',
        },
        background: { paper: 'rgb(237, 237, 237)' },
        text: {
            primary: '#000000',
            secondary: '#777',
            disabled: '#A0A7B0',
        },
    },
    colors: {
        red: '#CC0000',
        white: '#fff',
        darkerGrey: '#25282C',
        darkGrey: '#50575F',
        grey: '#737A84',
        lightGrey: '#A0A7B0',
        lighterGrey: '#EEEEEF',
        yellow: '#FFA500',
        green: '#56B700',
        blue: '#00B9E4',
    },
    respStyle: {
        spacing: { xs: 2, md: 4 }, // ex usage sx={{ pt: theme.respStyle.spacing }}
        showMd: { xs: "none", md: "block" }, // hides on small screens, starts to show on md screens
        pageLayout: { xs: "61px 8px 0 12px", md: '65px 26px 0px 26px', xl: '65px 36px 0px 36px' },
    },
    drawer: {
        height: Drawer.drawerHeight,
        calcHeight: `calc(100vh - ${Drawer.drawerHeight2})`,
        width: Drawer.drawerWidth,
    },
});
