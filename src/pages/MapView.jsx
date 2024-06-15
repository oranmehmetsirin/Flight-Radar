import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { icon } from "leaflet";
import { setPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const { flights, path } = useSelector((store) => store.flightReducer);
  const dispatch = useDispatch();
  const planeIcon = icon({
    iconUrl: "https://github.com/Udemig/9-hi-study/blob/main/2_redux/8-toolkit-thunk-flight-radar/public/plane-icon.png?raw=true",
    iconSize: [25, 25],
  });

  return (
    <MapContainer center={[45.45, 22.44]} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Code: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)}>Details</button>
              <button onClick={() => dispatch(setPath([]))}>Clear Route</button>
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={path} />
    </MapContainer>
  );
};

export default MapView;
