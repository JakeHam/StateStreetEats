function randRestaurant() {
    var restaurants = [
        'Argus Bar Grille',
        'Asian Kitchen',
        'Bradbury\'s Coffee, Espresso & Crepes',
        'Brickhouse BBQ',
        'Brocach Irish Pub & Restaurant',
        'Buck And Badger Northwoods Lodge',
        'Capitol ChopHouse',
        'Casa De Lara Mexican Restaurant',
        'Cento',
        'Chasers Bar & Grille',
        'Chipotle Mexican Grill',
        'CIRC',
        'The City Bar & Restaurant',
        'The Coopers Tavern',
        'Cranberry Creek Take-Out & Catering',
        'Crandall\'s Peruvian Bistro',
        'Disco Fries',
        'DLUX',
        'Dragon I',
        'Einstein Bros. Bagels',
        'Estrellón Restaurant',
        'Field Table Restaurant & Market Cafe',
        'Five Guys Burgers & Fries',
        'Forage Kitchen',
        'The Fountain',
        'Francisco\'s Cantina',
        'Fresco Rooftop Restaurant & Lounge',
        'Fugu Asian Fusion',
        'Glaze Teriyaki Grill',
        'Gooseberry On The Square',
        'Gotham New York Bagels & Eats',
        'Graft',
        'Graze',
        'Hamilton\'s On The Square',
        'Harvest',
        'Hawk\'s Bar & Grill',
        'Heritage Tavern',
        'Himal Chuli Restaurant',
        'HopCat',
        'Ian\'s Pizza On State',
        'The Icon Restaurant & Tapas Bar',
        'Irish Pub',
        'Jimmy John\'s Sandwiches',
        'Johnny Delmonico\'s',
        'Kabul Restaurant',
        'Kollege Klub',
        'L\'Etoile Restaurant',
        'Lake Vista Café',
        'Los Gemelos Mexican Restaurant',
        'The Madison Blind',
        'Madison\'s',
        'Marigold Kitchen',
        'Mediterranean Café',
        'Merchant',
        'Mezze',
        'Milio\'s Sandwiches',
        'Mirch Masala',
        'Mooyah Burgers, Fries, & Shakes',
        'Morris Ramen',
        'Mr. Brews Taphouse',
        'Muramoto Downtown',
        'Naf Naf Grill',
        'Nick\'s Restaurant',
        'Noodles & Company',
        'The Old Fashioned',
        'Opus Lounge',
        'Osaka House Japanese Restaurant',
        'The Paradise Lounge',
        'Parthenon Gyros',
        'Paul\'s Pel\'meni',
        'Pita Pit',
        'Pizza Di Roma',
        'Plaza Tavern & Grill',
        'Portage Pi',
        'Potbelly Sandwich Shop',
        'Qdoba Mexican Grill',
        'Quizno\'s',
        'Rare Steakhouse',
        'Red Rock Saloon',
        'Red Sushi',
        'The Rigby Pub & Grill',
        'Rising Sons Laotian & Thai Deli',
        'Roast Public House',
        'The Roman Candle Sparkler',
        'Salads UP',
        'Samba Brazilian Grill',
        'The Shamrock Bar & Grill',
        'Short Stack Eatery',
        'Side Door Grill',
        'Soga Shabu Shabu',
        'Sol\'s On The Square',
        'State Street Brats',
        'Subway In Library Mall',
        'Subway On The Capitol Square',
        'Sunroom Café',
        'Taqueria 3 Amigos',
        'Tavernakaya',
        'Teddywedgers',
        'The Post In The Best Western Premier Park Hotel',
        'Tiki Shack',
        'The Tipsy Cow',
        'Tornado Steakhouse',
        'Tutto Pasta State Street',
        'The University Club',
        'Vientiane Palace',
        'Wasabi Japanese Restaurant And Sushi Bar',
        'Wendy\'s',
        'Which Wich',
        'Wisconsin Brewing Tap Haus',
        'Zandru\'s Tapas Bar & Restaurant'
    ];

    var selectedRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    document.getElementById("rest").innerHTML = selectedRestaurant;
    this.updateMap();
}

function initMap() {
  var uluru = {lat: 43.074761, lng: -89.391817};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });

  var marker = new google.maps.Marker({
    title: document.getElementById("rest").textContent,
    position: uluru,
    setMap: this.map
  });
}

function updateMap() {
  var map = new google.maps.Map(document.getElementById('map'))

  geocoder = new google.maps.Geocoder();
  var address = document.getElementById("rest").textContent;
  var position = geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      var position = new google.maps.LatLng(lat, lng);
      return position;
    }
    else {
      alert("Geocode was not successful for the following reason: " + status);
    }
    alert(position);
  });

  var marker = new google.maps.Marker({
    title: document.getElementById("rest").textContent,
    position: position,
    setMap: this.map
  })
}
