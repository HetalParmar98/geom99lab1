// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom:5,
      center: { lat: 28.7041, lng: 77.1025},
      mapTypeId: "terrain",
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      [{ lat: 20.8880, lng: 70.4010 }, "Shree Somnath Jyotirling Temple"],
      [{ lat: 22.3173, lng: 69.0911 }, "Nageshwar,Gujarat"],
      [{ lat: 32.0508, lng: 76.6459 }, "Shri Shiv Temple Baijnath,Himachal Pradesh"],
      [{ lat: 30.7346, lng: 79.0669 }, "Kedarnath,Uttarakhand"],
      [{ lat: 23.1829, lng: 75.7683 }, "Mahakaleshwar,Madhya Pradesh"],
      [{ lat: 22.2445, lng: 76.1523 }, "Omkareshwar Jyotirlinga,Madhya Pradesh"],
      [{ lat: 25.3109, lng: 83.0107 }, "Shri Kashi Vishwanath Temple"],
      
      [{ lat:  20.0249, lng: 75.1699 }, "Grishneshwar,Maharashtra"],
      [{ lat: 19.939142, lng: 73.536819 }, "Trimbakeshwar, Maharashtra"],
      [{ lat: 19.072, lng: 73.536 }, "Bhimashankar Temple,Khed,Maharashtra"],
      [{ lat: 16.0738, lng: 78.8678 }, "Sri Bhramaramba Mallikarjuna Temple,Andhra Pradesh"],
      [{ lat: 9.2885, lng: 79.31271 }, "Rameshwaram,Tamil Nadu"],
      
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });


  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  const lineSymbol = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 5,
    strokeColor: "green",
   
  };
  // Create the polyline and add the symbol to it via the 'icons' property.
  const line = new google.maps.Polyline({
    path: [
      { lat: 20.8880, lng: 70.4010 },
      { lat: 22.3173, lng: 69.0911 },
      { lat: 32.0508, lng: 76.6459 },
      { lat: 30.7346, lng: 79.0669 },
      { lat: 23.1829, lng: 75.7683 },
      { lat: 22.2445, lng: 76.1523 },
      { lat: 25.3109, lng: 83.0107 },
      
      { lat:  20.0249, lng: 75.1699 },
      { lat: 19.939142, lng: 73.536819 },
      { lat: 19.072, lng: 73.536 },
      { lat: 16.0738, lng: 78.8678 },
      { lat: 9.2885, lng: 79.31271 },

      
    ],
    icons: [
      {
        icon: lineSymbol,
        offset: "100%",
      },
    ],
    map: map,
  });

  animateCircle(line);
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle(line) {
  let count = 0;

  window.setInterval(() => {
    count = (count + 1) % 200;

    const icons = line.get("icons");

    icons[0].offset = count / 2 + "%";
    line.set("icons", icons);
  }, 55);
}

  
  window.initMap = initMap;
