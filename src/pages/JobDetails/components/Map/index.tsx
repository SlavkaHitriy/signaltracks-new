import { Box, Stack } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import { memo, useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import { useDebouncedCallback } from 'use-debounce';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

export const Map = memo(() => {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);
  const mapContainer = useRef<HTMLElement>(null);
  const map = useRef<mapboxgl.Map>(null);
  const [lng, setLng] = useState(-95.37633596642475);
  const [lat, setLat] = useState(29.765726711787348);
  const [zoom, setZoom] = useState(12);

  const renderMap = () => {
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/slavkahitriy/clu8wd2m000sg01prgthyf88f',
        center: [lng, lat],
        zoom: zoom
      });

      map.current.on('load', () => {
        map.current!.on('move', () => {
          setLng(Number(map.current!.getCenter().lng.toFixed(4)));
          setLat(Number(map.current!.getCenter().lat.toFixed(4)));
          setZoom(Number(map.current!.getZoom().toFixed(2)));
        });
      });
    }
  };

  const initMap = () => {
    if (!map.current && mapContainer.current) {
      renderMap();
    }
  };

  const handleStorageChange = useDebouncedCallback(() => {
    map.current?.remove();
    renderMap();
  }, 500);

  useEffect(() => {
    handleStorageChange();
  }, [isSidebarOpen]);

  useEffect(() => {
    initMap();
  }, []);

  return (
    <Stack
      sx={{
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.03)'
      }}
      mt={'24px'}
      minHeight={500}
    >
      <Box flex={1} ref={mapContainer} />
    </Stack>
  );
});
