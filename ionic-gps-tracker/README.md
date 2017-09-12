# App híbrida en Ionic para la detección de GPS

Requisitos:

* Tener instalado el sdk de android 

* Ajustar las variables de entorno para el jdk, ndk (java) y las del sdk de android:
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
```

* Tener instalado npm

* Instalar ionic cordova (Se usa Ionic v1):
```
$ sudo npm install -g ionic cordova
``` 

* Instalar dependencias:
```
$ npm install
```

* [Opcional] Se puede iniciar un nuevo proyecto y copiar los archivos de este repo sobre ese proyecto:
```
$ ionic cordova start myBlank blank
```

* Anadir la plataforma de android al proyecto
```
$ ionic cordova platform add android
```

* Correr el proyecto:
```
$ ionic cordova run android
```

En caso de instalar sobre ios, reemplazar la palabra android por ios.
