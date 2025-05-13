import React, { useEffect, useState } from "react";

const mapStyles = {
  height: "500px",
  width: "91.666667%",
};

const BestRoute = () => {
  const [destination, setDestination] = useState("");
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [distance, setDistance] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);

  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = callback;
    };

    loadScript(
      "https://maps.gomaps.pro/maps/api/js?key=AlzaSykvwnwxuK35TDry9u9DiHpIlenHGIFAl-g",
      () => window.initMap()
    );

    loadScript(
      "https://maps.gomaps.pro/maps/api/js?key=AlzaSykvwnwxuK35TDry9u9DiHpIlenHGIFAl-g&libraries=places",
      () => window.initAutocomplete()
    );
  }, []);

  window.initMap = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(location);
          setLoadingLocation(false);

          const initialMap = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: location,
              zoom: 13,
            }
          );

          setMap(initialMap);
          setDirectionsService(new window.google.maps.DirectionsService());
          setDirectionsRenderer(new window.google.maps.DirectionsRenderer());
          setGeocoder(new window.google.maps.Geocoder());
        },
        () => {
          alert("Geolocation failed or is not available.");
          setLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  window.initAutocomplete = () => {
    const input = document.getElementById("destination");
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setDestination(place.formatted_address);
      } else {
        alert("No details available for input: '" + place.name + "'");
      }
    });
  };

  const geocodeLocation = async (location) => {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ location }, (results, status) => {
        if (status === "OK") {
          resolve(results);
        } else {
          reject("Geocode was not successful for the following reason: " + status);
        }
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentLocation) {
      alert("Current location is not available yet. Please try again later.");
      return;
    }

    if (directionsService && directionsRenderer && map) {
      const destinationValue = document.getElementById("destination").value;

      if (destinationValue && currentLocation) {
        console.log(`Origin (coordinates):`, currentLocation);
        console.log(`Destination:`, destinationValue);

        // Set directions renderer to the map first
        directionsRenderer.setMap(map);

        const request = {
          origin: currentLocation, // Coordinates
          destination: destinationValue,
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        // Define a function to retry if UNKNOWN_ERROR occurs
        const fetchRoute = (attempt = 1) => {
          directionsService.route(request, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);

              const route = result.routes[0];
              const distanceText = route.legs[0].distance.text;
              setDistance(distanceText);
            } else if (status === "UNKNOWN_ERROR" && attempt <= 3) {
              console.warn(`Attempt ${attempt} failed: Retrying...`);
              setTimeout(() => fetchRoute(attempt + 1), 1000); // Retry after 1 second
            } else {
              console.error(`Directions request failed with status: ${status}`);
              alert(`An error occurred while fetching the route: ${status}. Please try a different location.`);
            }
          });
        };

        // Start the route fetch with retry
        fetchRoute();
      } else {
        alert("Please enter a destination and ensure your location is available.");
      }
    }
  };

  return (
    <>
      <div className="h-[56px] w-screen mt-5  ">
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-[625px] p-5 h-[50px] opacity-40 rounded-lg mr-6"
              placeholder={"Where do you want to go !!!"}
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          <button
            className="w-[281px] h-[50px] bg-[#73CB6D] text-lg rounded-2xl font-['Raleway'] text-white opacity-100 hover:bg-[#67b961] active:bg-[#5aa354]"
            type="submit"
            disabled={loadingLocation}
          >
            {loadingLocation ? "Loading Location..." : "Show Route"}
          </button>
        </form>
      </div>
      <div className="w-11/12 h-[500px] border mx-16 mt-5 rounded-2xl" id="map" style={mapStyles}></div>
      {distance && (
        <div className="mt-4 text-center font-['Raleway'] text-md text-white">
          Distance: {distance}
        </div>
      )}
    </>
  );
}

export default BestRoute;