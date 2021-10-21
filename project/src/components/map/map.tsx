import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {MapProps} from './type';
import {URL_MARKER_DEFAULT, URL_MARKER_ACTIVE} from '../../const';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const activetCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map({city, offers, selectedOffer, mapHeigth}: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(selectedOffer !== undefined && offer.id === selectedOffer.id ? activetCustomIcon: defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div style={{ height: `${mapHeigth}` }} ref={mapRef}>
    </div>
  );
}

export default Map;
