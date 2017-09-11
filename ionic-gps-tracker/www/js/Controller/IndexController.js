angular.module($appModule).controller('IndexController', function($scope, $http, $ionicPopup){
  
  var intervalGetPosition;
  var urlServer = 'http://192.168.1.54:8000/' // URL y puerto en el que se encuentra el servicio
  var urlSendData = urlServer + 'sendData' // API para el envio de la info al servidor
  $scope.jsonCurrentPosition   = {}; // Json en el que se almacenan los valores de geolocalización
  $scope.isTrackingPosition = false; // Bool que indica si el módulo gps del celular está activado o no

  $scope.startTracking = function(){
    // Se inicia el listener de posición
    initGetLocationListener();
  }

  // Detiene el listener de posición 
  $scope.stopTrackingPosition = function(){
    navigator.geolocation.clearWatch(intervalGetPosition);
  }

  // Inicia el listener de posición
  initGetLocationListener = function(){

    // Se almacenan los valores de latitud y longitud
    intervalGetPosition = navigator.geolocation.watchPosition( function(position){ 
      $scope.jsonCurrentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      $scope.$apply();
    }, 
    function(error){
      console.log(error.message);
    }, { 
      timeout: 3000 
    });
  }

  // Envia los datos de geolocalización al servidor
  $scope.sendData = function(){
    $http({
      method: "POST",
      url: urlSendData,
      headers: {
        'Content-Type': 'application/json'
      },
      data: $scope.jsonCurrentPosition
    })
    .then(function(res){
      // Se muestra en un popup la respuesta del server frente
      // al envío del dato realizado desde la app 
      console.log(res)
      var alertPopup = $ionicPopup.alert({
        title: 'Registro agregado',
        template: JSON.stringify(res.data)
      });
    })
  }
});