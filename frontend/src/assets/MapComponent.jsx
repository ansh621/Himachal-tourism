import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { io } from 'socket.io-client';

const MapComponent = () => {
    const mapRef = useRef(null);
    const markers = useRef({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const socket = io();

        // Initialize Leaflet map only once
        if (!mapRef.current) {
            // Disable scroll wheel zoom
            mapRef.current = L.map('map2', { scrollWheelZoom: false }).setView([0, 0], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Ansh Verma'
            }).addTo(mapRef.current);
        }

        // Check if geolocation is available in the browser
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    // Set the view to the user's current location
                    if (mapRef.current) {
                        mapRef.current.setView([latitude, longitude], 15);

                        // Update or add the marker for the user's location
                        if (!markers.current.userMarker) {
                            markers.current.userMarker = L.marker([latitude, longitude]).addTo(mapRef.current);
                        } else {
                            markers.current.userMarker.setLatLng([latitude, longitude]);
                        }
                    }

                    // Emit the user's location to the server
                    socket.emit("send-location", { latitude, longitude });
                },
                (error) => {
                    console.error("Geolocation error: ", error);
                    //alert("Geolocation is not enabled. Please allow location access.");
                },
                {
                    enableHighAccuracy: true,
                    timeout: 1000,
                    maximumAge: 0
                }
            );
        }

        // Cleanup on component unmount
        return () => {
            socket.disconnect();
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <div id="map2" className=' h-[508px] rounded-[49px] p-2'></div>
        </div>
    );
};

export default MapComponent;
