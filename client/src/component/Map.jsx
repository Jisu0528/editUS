import React, { useEffect } from 'react';

function Map () {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.629150, lng: 127.081228 },
      zoom: 17,
    });

    new window.google.maps.Marker({
      position: { lat: 37.629150, lng: 127.081228 },
      map: map,
    });
  }, []);


  return (
    <div id="map" style={{ height: '405', width: '40vw' }} />
  );
};

export default Map;