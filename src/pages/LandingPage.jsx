import React, { useState } from 'react'
import { MapView } from "@aws-amplify/ui-react";
import { Marker } from "react-map-gl";

import "@aws-amplify/ui-react/styles.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-js-amplify/dist/public/amplify-map.css";

const test = [{ latitude: 33.8, longitude: -117.4, color: "red" }];

function LandingPage() {
    const [items, setItems] = useState(test);

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
            </div>
        </>
    )
}

export default LandingPage