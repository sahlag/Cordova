// Pour obtenir une présentation du modèle Vide, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkID=397704
// Pour déboguer du code durant le chargement d'une page dans cordova-simulate ou sur les appareils/émulateurs Android, lancez votre application, définissez des points d'arrêt, 
// puis exécutez "window.location.reload()" dans la console JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Gérer les événements de suspension et de reprise Cordova
       
        // TODO: Cordova a été chargé. Effectuez l'initialisation qui nécessite Cordova ici.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // listener sur le bouton getPosition
        document.getElementById("getPosition").addEventListener('click', getPosition);

    };

    


    // affiche la position courante par geolocalisation
    function getPosition() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    
    // onSuccess Callback ==> current GPS coodinates = position
    var onSuccess = function (position) {
        var maPos = 'Latitude: ' + position.coords.latitude + '<br>' +
            'Longitude: ' + position.coords.longitude + '<br>' +
            'Altitude: ' + position.coords.altitude + '<br>' +
            'Accuracy: ' + position.coords.accuracy + '<br>' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy;

        document.getElementById("result").innerHTML = "<p>" + maPos + "</p>";
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        document.getElementById("result").innerHTML = 'code: ' + error.code +
            ' message: ' + error.message;
    }


   


} )();