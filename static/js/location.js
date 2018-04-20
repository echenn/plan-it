
var yelpApiKey = 'RS5xFR5EjvEsNEhAyN5sxFG0FnzmFdsJ6TyZoV6tXUpRI-FEJXxRouwTq54K_0a-DJCxag8L7wpjahFxz-GR1iSxYMfpv6oM3cVZoz9J-upyiP8ztxQ26g3B8n69WnYx';

console.log('Initialize yelp');
$.get({
    url: 'https://api.yelp.com/v3/businesses/search',
    headers: { 
        'Authorization': 'Bearer '+yelpApiKey,
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Headers': 'x-requested-with',
        'Content-Type': 'text/plain'
    },
    data: {
        // term: 'Restaurants',
        location: '11201'
    },
    success: function(data) {
        console.log(data);
    }
});


// const yelpClient = yelp.client(yelpApiKey);

//     let searchRequest = {
//         term: 'Restaurant',
//         location: info.area,
//         categories: info.food,
//         // open_at: ,
//         limit: 3
//     };
//     console.log(searchRequest);
//     yelpClient.search(searchRequest)
//         .then(result => {
//             console.log(result);
//             // Reply content
//             let body = JSON.parse(result.body);
//             let content = '';
//             if(body.businesses.length === 0) {
//                 content = 'Sorry, we cannot find any restaurant meeting your requirement.';
//             }
//             else {
//                 content += 'Hello! Here are my restaurant suggestions for you: \n\n';
//                 for(let i = 0; i < body.businesses.length; i++) {
//                     let business = body.businesses[i];
//                     content += business.name + '\n';
//                     content += 'Location: ' + business.location.display_address[0] + ' '+ business.location.display_address[1] + '\n';
//                     content += 'Phone: ' + business.phone + '\n';
//                     content += '\n';
//                 }
//             }

