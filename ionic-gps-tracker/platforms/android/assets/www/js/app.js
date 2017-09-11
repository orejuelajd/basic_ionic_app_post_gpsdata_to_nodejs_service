angular.module($appModule, ['ionic'])

.run(function($ionicPlatform) 
{
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Esconde la accesory bar por defecto (Quitar esto si se quiere mostrar esta barra encima del
      // teclado en los inputs de los forms)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // No quitar, esto detiene el viewport del snapping cuando los inputs de texto estan
      // seleccionados. Ionic maneja esto internamente para una mejor experiencia en el teclado
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});