import "./MapBoxMap.css"
import { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"

const mbToken = import.meta.env.VITE_MAPBOX_KEY;
mapboxgl.accessToken = mbToken

const MapBoxMap = ({ location }) => {
    const [longitudeString, latitudeString] = location.slice(1,-1).split(",")
    const longitude = parseFloat(longitudeString)
    const latitude = parseFloat(latitudeString)
    const map = useRef();
    const mapContainer = useRef();
  
    useEffect(() => {
      if (map.current) return;
  
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        center: [longitude, latitude],
        zoom: 11,
        style: 'mapbox://styles/mapbox/streets-v12',
      })

      map.current.on('style.load', () => {
        setTimeout(() => {
        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map.current);
        }, 100);
      });
  
    }, [latitude, longitude]);
  
    return (
        <div className="mapContainer">
          <div className="map" ref={mapContainer} />
        </div>
    );
};

export default MapBoxMap;