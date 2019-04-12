


    initMap() {
        
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 20, lng: -160 },
        zoom: 2
      });

      var script = document.createElement('script');
      script.setAttribute(
          'src',
          'https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json');
      document.getElementsByTagName('head')[0].appendChild(script);
    }

    eqfeed_callback(data) {
        
        map.data.addGeoJson(data);
      }
    


