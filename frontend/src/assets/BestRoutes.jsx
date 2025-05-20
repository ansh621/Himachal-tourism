import React, { useEffect, useState } from "react";

const mapStyles = {
  height: "500px",
  width: "91.666667%",
};

const lightMapStyle = [];

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
];

const BestRoute = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [routeInfo, setRouteInfo] = useState({ distance: "", duration: "" });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://maps.goMaps.pro/maps/api/js?key=AlzaSys4c2x-stS6tDMij2TeUXuw7-HvznZuLii&callback=initMap&libraries=places&solution_channel=GMP_QB_commutes_v2_c";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  window.initMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const initialMap = new window.google.maps.Map(document.getElementById("map"), {
            center: currentLocation,
            zoom: 14,
            styles: isDarkMode ? darkMapStyle : lightMapStyle,
          });

          new window.google.maps.Marker({
            position: currentLocation,
            map: initialMap,
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            title: "You are here",
          });
          

          setMap(initialMap);
          setDirectionsService(new window.google.maps.DirectionsService());
          const renderer = new window.google.maps.DirectionsRenderer();
          renderer.setMap(initialMap);
          setDirectionsRenderer(renderer);

          const trafficLayer = new window.google.maps.TrafficLayer();
          trafficLayer.setMap(initialMap);

          const tempGeocoder = new window.google.maps.Geocoder();
          setGeocoder(tempGeocoder);

          tempGeocoder.geocode({ location: currentLocation }, (results, status) => {
            if (status === "OK") {
              setOrigin(results[0].formatted_address);

              const originInput = document.getElementById("origin");
              const destinationInput = document.getElementById("destination");

              const originAuto = new window.google.maps.places.Autocomplete(originInput, {
                fields: ["place_id", "geometry", "name"],
              });
              originAuto.addListener("place_changed", () => {
                const place = originAuto.getPlace();
                setOrigin(place.name || originInput.value);
              });

              const destinationAuto = new window.google.maps.places.Autocomplete(destinationInput, {
                fields: ["place_id", "geometry", "name"],
              });
              destinationAuto.addListener("place_changed", () => {
                const place = destinationAuto.getPlace();
                setDestination(place.name || destinationInput.value);
              });
            }
          });
        },
        (err) => {
          alert("Please allow location access.");
          console.error(err);
        }
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const travelMode = document.getElementById("travelMode").value;

    if (directionsService && directionsRenderer && map) {
      directionsService.route(
        {
          origin,
          destination,
          travelMode: window.google.maps.TravelMode[travelMode],
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);

            const leg = result.routes[0].legs[0];
            setRouteInfo({
              distance: leg.distance.text,
              duration: leg.duration.text,
            });

            new window.google.maps.Marker({
              position: leg.end_location,
              map: map,
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Custom marker
  scaledSize: new window.google.maps.Size(32, 32)
              },
              title: "Destination",
            });
          } else {
            alert("Route not found. Please check inputs.");
            console.error("Directions error:", status);
          }
        }
      );
    }
  };

  const handleStreetView = () => {
    const service = new window.google.maps.places.PlacesService(map);
    service.findPlaceFromQuery({ query: destination, fields: ["geometry"] }, (results) => {
      if (results && results[0]) {
        const location = results[0].geometry.location;
        const panorama = new window.google.maps.StreetViewPanorama(document.getElementById("map"), {
          position: location,
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        });
        map.setStreetView(panorama);
      }
    });
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (map) {
      map.setOptions({ styles: newMode ? darkMapStyle : lightMapStyle });
    }
  };

  return (
    <>
      <div className="w-screen mt-5 flex justify-center flex-col items-center gap-4">
        <form className="flex flex-wrap gap-4 justify-center" onSubmit={handleSubmit}>
          <input
            className="w-[300px] p-3 rounded-lg border"
            placeholder="Start location"
            id="origin"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
          <input
            className="w-[300px] p-3 rounded-lg border"
            placeholder="Where do you want to go !!!"
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <select id="travelMode" className="p-3 rounded-lg border">
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600"
          >
            Show Route
          </button>
        </form>

        <div className="flex gap-4 mt-2">
          <button
            onClick={handleStreetView}
            className="px-5 py-2 bg-[#333] text-white rounded-xl hover:bg-black"
          >
            Street View
          </button>
          <button
            onClick={toggleTheme}
            className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </button>

          {routeInfo.distance && (
            <div className="text-white bg-[#222] p-3 rounded-xl">
              <strong>Distance:</strong> {routeInfo.distance} <br />
              <strong>ETA:</strong> {routeInfo.duration}
            </div>
          )}
        </div>
      </div>

      <div
        className="w-11/12 h-[500px] rounded-2xl border mx-auto mt-5"
        id="map"
        style={mapStyles}
      ></div>
    </>
  );
};

export default BestRoute;
