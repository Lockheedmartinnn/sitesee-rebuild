import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const customerLocations = [
  { name: 'USA', lat: 37.0902, lng: -95.7129, operators: '12+' },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360, operators: '8+' },
  { name: 'Australia', lat: -25.2744, lng: 133.7751, operators: '6+' },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740, operators: '4+' },
  { name: 'Malaysia', lat: 4.2105, lng: 101.6964, operators: '3+' },
  { name: 'Oman', lat: 21.4735, lng: 55.9754, operators: '2+' },
];

export default function CustomerMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([20, 0], 2);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add markers
    customerLocations.forEach((location) => {
      L.marker([location.lat, location.lng])
        .bindPopup(
          `<div class="text-center"><h3 class="font-bold text-lg">${location.name}</h3><p class="text-blue-600 font-bold">${location.operators} Operators</p></div>`
        )
        .addTo(map);
    });

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-sm overflow-hidden shadow-2xl"
      style={{ height: '500px' }}
    />
  );
}
