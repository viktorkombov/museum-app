import { MapContainer, Marker, Popup, TileLayer, useMap, GeoJSON, useMapEvents } from 'react-leaflet';
import GestureHandling from 'leaflet-gesture-handling';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import './Leaflet.scss';
import classes from './LefletMap.module.scss';
import { path, pathLine } from './data';
import { useEffect, useState } from 'react';
import MarkerClusterGroup from '../MarkerClusterGroup/MarkerClusterGroup';
import FloatingImage from '../../Layouts/FloatingImagesPage/FloatingImage';

const LefletMap = props => {
    const [init, setInit] = useState(true);

    useEffect(() => {
        setInit(false);
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);

    const position = [43.41901389224468, 23.686523437500004]

    const GestureHandlingSetter = () => {
        const map = useMap();
        map.gestureHandling.enable();
        map.on("gestureHandling", GestureHandling);
        map.on('fullscreenchange', (e) => {
            if (map.isFullscreen()) {
                map.gestureHandling.disable();
            } else {
                map.gestureHandling.enable();
            }
        })
        return null;
    };

    const generateLayer = (feature, latlng) => {
        const L = require("leaflet");
        // const type = feature.properties.type !== 'town' ? feature.properties.type : 'province';
        let icon = {
            className: classes['map-custom-divIcon'],
            iconSize: [20, 20],
            popupAnchor: [0, -3],
            iconAnchor: [11, 10]
        }

        return L.divIcon(icon)

        // return L.marker(latlng, {
        //     icon: L.divIcon({
        //         html: feature.properties.name_bg,
        //         className: classes['map-custom-text-divIcon'] + ' ' + classes['map-custom-text-divIcon' + type]
        //     })
        // })
    }

    const generateTextLayer = (feature, latlng) => {
        const L = require("leaflet");
        const type = feature.properties.type !== 'town' ? feature.properties.type : 'province';


        return L.marker(latlng, {
            icon: L.divIcon({
                html: feature.properties.name_bg,
                className: classes['map-custom-text-divIcon']
            })
        })
    }

    function MyComponent() {
        const map = useMapEvents({
            click: (e) => {
                map.locate()
                console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`);
                console.log(map.getZoom());
            },
            locationfound: (location) => {
                console.log('location found:', location)
            },

        })
        return null
    }

    function styleFeature(feature) {
        return {
            color: '#ed008c',
            weight: 3,
            opacity: 0.8,
            lineCap: "round",
            smoothFactor: 1,
            dashArray: "10 10"
        };
    }

    return (
        <MapContainer className={classes['map-container']} gestureHandling={true} fullscreenControl={true} center={position} zoom={9} minZoom={9} scrollWheelZoom={false} onClick={(e) => console.log(e)}>
            {init && <GestureHandlingSetter />}
            <MyComponent />

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                <Marker icon={generateLayer()} position={[43.771975129215235, 23.727709268167473]}>
                    <Popup className={classes.popup} maxHeight="350" maxWidth="320">
                        <FloatingImage small maxWidth="180px" title="Изглед от Козлодуй" src="https://muzeibotev.com/clients/152/files/images/snimki%20002.jpg" />
                        <h4>Козлодуй</h4>
                        <p>Четата влиза в селото, за да вземе коне и коли за превозване на боеприпасите. Към нея се присъединяват Младен Павлов, наречен Козлодуйското даскалче и Георги Катърджийски. Четата влиза в селото, за да вземе коне и коли за превозване на боеприпасите. Към нея се присъединяват Младен Павлов, наречен Козлодуйското даскалче и Георги Катърджийски. Четата влиза в селото, за да вземе коне и коли за превозване на боеприпасите. Към нея се присъединяват Младен Павлов, наречен Козлодуйското даскалче и Георги Катърджийски. Четата влиза в селото, за да вземе коне и коли за превозване на боеприпасите. Към нея се присъединяват Младен Павлов, наречен Козлодуйското даскалче и Георги Катърджийски. Четата влиза в селото, за да вземе коне и коли за превозване на боеприпасите. Към нея се присъединяват Младен Павлов, наречен Козлодуйското даскалче и Георги Катърджийски.</p>
                    </Popup>
                </Marker>
                <Marker icon={generateLayer()} position={[43.751703600350325, 23.752626922317507]}>
                <Popup className={classes.popup} maxHeight="350" maxWidth="320">
                        <FloatingImage small maxWidth="180px" title="Матеев геран" src="https://muzeibotev.com/clients/152/files/images/snimki.jpg" />
                        <h4>Матеев геран</h4>
                        <p>Тук, на път за с. Бутан, четата спира и си отпочива</p>
                    </Popup>
                </Marker>
                <Marker icon={generateLayer()} position={[43.328174695525846, 23.639918088285544]} />
                <Marker icon={generateLayer()} position={[43.26234370640785, 23.66880591783041]} />
            </MarkerClusterGroup>
            <MarkerClusterGroup>
                <Marker icon={generateLayer()} position={[43.1516864142034, 23.582076238740736]} />
                <Marker icon={generateLayer()} position={[43.149908837265606, 23.56903183088506]} />
            </MarkerClusterGroup>

            {/* <GeoJSON data={path} pointToLayer={generateLayer} /> */}
            {/* <GeoJSON data={path} pointToLayer={generateTextLayer} /> */}
            <GeoJSON style={styleFeature} data={pathLine} />
        </MapContainer>
    );
}

export default LefletMap;