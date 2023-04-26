import React, { useState } from 'react'
import { MapView } from "@aws-amplify/ui-react";
import { Marker } from "react-map-gl";
import { Box, useMediaQuery, useTheme } from '@mui/material';

import "@aws-amplify/ui-react/styles.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-js-amplify/dist/public/amplify-map.css";
import LineChart1 from '../components/LineChart1';
import LineChart2 from '../components/LineChart2';

import { tempData, humidityData } from '../data/SimulatedData'

const test = [{ latitude: 33.8, longitude: -117.4, color: "red" }];

function LandingPage() {
    const theme = useTheme();
    const [items, setItems] = useState(test);
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <h2>LandingPage Sample Map / Location Services</h2>
            <div>
                <MapView
                    initialViewState={{
                        latitude: 33.8,
                        longitude: -117.4,
                        zoom: 8,
                    }}
                    style={{ width: "100%", height: "400px" }}
                >
                    {items.map((item) => {
                        return (
                            <Marker
                                key={item.color}
                                latitude={item.latitude}
                                longitude={item.longitude}
                                color={item.color}
                            ></Marker>
                        );
                    })}
                </MapView>
                {/* <Box width='300px' height='500px'>
                    <LineChart1 />
                </Box> */}
                <Box pt={2} />
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: matches ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
                    gridAutoFlow: 'row',
                    gap: 4,
                    // width: '100%',
                    minHeight: '600px',
                }}>
                    <LineChart1 title='Temperature' data={tempData} xTitle='time' yTitle='temp' />
                    <LineChart1 title='Humidity' data={humidityData} xTitle='time' yTitle='humidity' />
                    <LineChart2 />
                </Box>
            </div>
        </>
    )
}

export default LandingPage