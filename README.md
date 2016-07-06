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

