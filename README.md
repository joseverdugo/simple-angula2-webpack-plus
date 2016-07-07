# Angular 2 + WebPack con TypeScript

[![Dependency Status](https://david-dm.org/joseverdugo/simple-angula2-webpack.svg)](https://david-dm.org/joseverdugo/simple-angula2-webpack)
[![devDependency Status](https://david-dm.org/joseverdugo/simple-angula2-webpack/dev-status.svg)](https://david-dm.org/joseverdugo/simple-angula2-webpack#info=devDependencies)


Basado en documentacion oficial de angular 2 con webpack, pero sin Karma ni Jasmine.
https://angular.io/docs/ts/latest/guide/webpack.html 

### Inicio Rapido
**Make sure you have Node version >= 4.0 and NPM >= 3**

```bash
# Clone el repositorio
git clone --depth 1 https://github.com/joseverdugo/simple-angula2-webpack.git

# Ir a directorio
cd simple-angula2-webpack

# Agregar dependencias globales
npm install typings webpack-dev-server rimraf webpack -g

# Instalar dependencias en el proyecto.
npm install

# Inciar el servidor.
npm start

# Para compilar
npm run build

```
En browser ir a [http://0.0.0.0:8080](http://0.0.0.0:8080) o [http://localhost:8080](http://localhost:8080)

###Estilos de código:
* Agrega sugerencias de Jonh Papa. https://angular.io/docs/ts/latest/guide/style-guide.html
- Limite de 400 lineas de código por archivo.
- Limite de 75 lineas de código por funcion.
- Componentes upper camel case.
- Nomenclatura de nombre de archivo bajo el patron feature.type.ts
- Utilice guion para separar el nombre descriptivo.
- Utilice tipos de nombre convencionales como  .service , .component , .pipe
- Poner bootstrapping  y logica de plataforma en main.js
- Utilice upper camel case para servicios.
- Utilice upper camel case para nombres de selectores o directivas. ¿?
- Utilice prefijos de nombres personalizados para los selectores. eje toh.... que representa Tour o f Heroes ¿?
- Nombre de archivos concistentes para los "@Pipe"
- Archivos para prueba  que tengas el sufijo ".spec". Ej: heroes.component.spec.ts, logger.service.spec.ts, ellipsis.pipe.spec.ts. (En pruebas con Karma)
- Las pruebas de extremo a extremo q tengan como sufijo ".e2e-spec". (En pruebas con Protactor)
- utilizar upper camel case para nombre de clases
- Utilice mayusculas con guion bajo para nombre de constantes. Ej: exportconst HEROES_URL ='api/heroes';
- low camel case para propiedades y nombre de método.
- No dejar espacios en las importaciones.
- Hacer que localizar un archivo o codigo sea rapido e intuitivamente. Una estructura de capetas puede ayudar. (Locate)
- El nombre del archivo sea representativo y que permita saber al instante lo que contiene o representa. (Identify)
- Estructura de carpetas plana, evitar las subcarpetas, pero considere crear si un directorio tiene mas de 7 archivos. (FLAT)
- No escribas código de mas. T-DRY (Try to be DRY).
- Tener visión a largo plazo. No dejar todo en un solo directorio.
- Seguir la siguiente estructura: https://angular.io/docs/ts/latest/guide/style-guide.html#04-06
- Dejar componentes compartidos en directorio shared. Si corresponden dejar sub carpetas.
- Crear carperas con el nombre de la funcionalidad o feature. Ej: heroes, villanos.
- Dejar los componentes de diseño como menu, cabecera, pie en directorio shared.
- Utilice import masivo por directorio en un solo archivo llamado index.ts. La tecnica se llamada barril. Ej: 
export * from './about.component';
- Carga perezosa de carpetas. ? duda: https://angular.io/docs/ts/latest/guide/style-guide.html#04-11
- Prefijo "+" para la carga perezosa ¿Como implementar? ¿En Route?  Duda en: Style 04-11 a 04-15
- Nombre de Selector con formato kebab-case Ej: toh-hero-button
- Defina componentes como elementos atravez de selector. No directivas dentro de elementos. ... Duda: https://angular.io/docs/ts/latest/guide/style-guide.html#!#05-03
- Si el css o html de un componente supero las 3 lineas, dejar mejor en un archivo aparte.
- Utiice @Input y @Output para indicar las entradas y salida de los componentes. Style 05-12
- Evitar renombrar los parametros de entreda o salida de los componentes. Ej: @Input('labelAttribute') 
- Dejar primero los properties en una clase, luego método publicos y despues los privados.
- 

###Descripcion de Archivos:
- package.json : Definición nom de dependencias para modo desarrollo y producción.
- webpack.config.js : Configuracion de webpack.
- typings.json : Administrador de dependencias TypeScript. Ej: jQuery en typeScript
- tsconfig.json : Configuración del compilador TypeScript 
- config/webpack.prod.js : Configuracion webpack para compilar el proyecto. Se ejecuta con "npm run build" y el el compilado queda en directorio "dist"
- config/webpack.dev.js : Configuracion webpack para ejecutar en modo desarrollo. Se ejecuta con "npm start".
- config/webpack.common.js : Configuracion comun de webpack. 
- config/helpers.js : Configuracion comun de webpack. 
- src/vendor.ts 
- src/main.ts
- src/index.html
- src/polyfills.ts
- src/app/app.component.spect.ts
- src/app/app.component.ts
- src/app/app.component.html
- src/app/app.component.css
- src/css/styles.css
- src/images/angular.png



####Link's:
- http://teropa.info/blog/2016/05/19/things-that-excite-me-about-angular-2.html