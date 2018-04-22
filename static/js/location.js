
var yelpApiKey = 'RS5xFR5EjvEsNEhAyN5sxFG0FnzmFdsJ6TyZoV6tXUpRI-FEJXxRouwTq54K_0a-DJCxag8L7wpjahFxz-GR1iSxYMfpv6oM3cVZoz9J-upyiP8ztxQ26g3B8n69WnYx';

console.log('Initialize yelp');

var map1;
function initMap() {
    map1 = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.691676, lng: -73.9888796},
        zoom: 15
    });

}

function getYelp() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var zipcode = url.searchParams.get("zipcode");
    $.get({
        url: '/api/location',
        data: {
            zipcode: zipcode,
        },
        success: function(data) {
            console.log(data);
            data['businesses'].forEach(function(business){
                name = business['name'];
                latitude = business['coordinates']['latitude'];
                longitude = business['coordinates']['longitude'];
                phone = business['display_phone'];
                address = business['location']['display_address'].join(' ');

                var infowindow = new google.maps.InfoWindow({
                    content: "<span>"+name+"</span>"
                            +"</br>"
                            +"<span>"+address+"</span>"
                            +"</br>"
                            +"<span>"+phone+"</span>"
                            +"</br>"
                            +"<button type='button' onClick='addRest(\""+name+"\",\""+address+"\")'>Select</button>"
                });

                var marker = new google.maps.Marker({
                    position: {lat: latitude, lng: longitude},
                    map: map1
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });
            });
        }
    });
}

function addRest(name, address) {
     var params = {
         name: name,
         address: address
     }
     //url = '/item?'+encodeQueryData(params);
     url = '/item'
     location = url;
}

function encodeQueryData(data) {
   let ret = [];
   for (let d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}



$( document ).ready(function() {
    sleep(500).then(() => {
        initMap();
        getYelp();
    });
    // setTimeout(initMap(), 5000);
    // setTimeout(getYelp(), 5000);
});




