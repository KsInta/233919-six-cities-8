import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {MapProps} from './type';
import {getCurrentOffers} from '../../utils/utils';
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
  const currentOffers = getCurrentOffers(offers, city);
  const currentCity = currentOffers[0].city;
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    let markers: Marker[] = [];
    if (map) {
      markers = currentOffers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(selectedOffer !== undefined && offer.id === selectedOffer ? activetCustomIcon: defaultCustomIcon)
          .addTo(map);
        return marker;
      });
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, selectedOffer, currentCity]);

  useEffect(() => {
    const {latitude, longitude, zoom} = currentCity.location;
    if (map) {
      map.flyTo([latitude, longitude], zoom);
    }
  }, [currentCity, map]);

  return (
    <section className="cities__map map" style={{ height: `${mapHeigth}` }} ref={mapRef}>
    </section>
  );
}

export default Map;
