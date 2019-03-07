function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'YOUR_API_KEY',
    // Your API key will be automatically added to the Discovery Document URLs.
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    // clientId and scope are optional if auth is not required.
    'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.people.people.get({
      'resourceName': 'people/me',
      'requestMask.includeField': 'person.names'
    });
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
// gapi.load('client', start);

// function getVideos(video) {
//   // Constructing a queryURL 
//   var queryURL = "https://www.googleapis.com/youtube/v3/videos?q=" +
//     video + "&part=snippet,contentDetails,statistics,status" + process.env.youtube_API_Key;


    
     
//   // Performing an AJAX request with the queryURL
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//     // After data comes back from the request
//     .then(function (response) {

//       for (var i = 0; i < diet.length; i++) {
//         queryURL = queryURL + "&diet=" + diet[i];
//       }

//       for (var i = 0; i < allergies.length; i++) {
//         queryURL = queryURL + "&excluded=" + allergies[i];
//       }

//       //console.log(queryURL);
//       //console.log(response);

//       // storing the data from the AJAX request in the results variable
//       var recipeData = response.hits;
//       displayRecipes(recipeData);

//     });


