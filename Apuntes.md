# Paso 1:

## Hacer un paquete npm con el comando: npm init 


# Paso 2:

## Instalar Electron con el siguiente comando


     npm i -s electron

##### *Alternativa* 
	npm install electron --save-dev --save-exact

##### Alternativa para conexion lenta 

      npm install --verbose electron --unsafe-perm=true

# Paso 3: 

## Definir el dentro del package.json,  "dev" : "electron" , ejemplo: 


     {
      "name": "platzipics",
      "version": "1.0.0",
      "description": "\"Una app para practicar electron js\"",
      "main": "index.js",
      "scripts": {
        "dev" : "electron",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/MrRojas/PlatziPics.git"
      },
      "keywords": [
        "armando_rojas"
      ],
      "author": "Armando Jose Rojas Querales",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/MrRojas/PlatziPics/issues"
      },
      "homepage": "https://github.com/MrRojas/PlatziPics#readme"
    }

# Paso 4:

## Revisar la documentacion de Electron js

https://electronjs.org/docs

# Paso 5: 

## Crear un archivo index.js 

### En esta parte del curso iniciamos con la creación de nuestra primera ventana en Electron, para esto es importante entender muy bien el uso del objeto  **App**, es un objeto que nos permite controlar el ciclo de vida de la aplicación.

### Donde se indica como buena practica el modo strict para luego definir la constante `app`  el cual se define que requiere electron, el ejemplo en clase es 

El objeto  **BrowserWindow** es el que nos permite cargar todo el contenido visual de la aplicación de escritorio.

    'use strict'
    const {app} = require ('electron')

## Ejemplo en clase 

    'use strict'
    
    const { app } = require ('electron')
    
    console.dir(app)
    
    app.on('before-quit' , () => {
    
    	console.log('salir...')
    })
    
    app.quit()

### El cual se ejecuta con el comando en la terminal que es :

    npm run dev 

#### Donde el package.json se debe agrega en la key dev:

### "electron index.js"

##### para que quede de la siguiente manera: 

    {
      "name": "platzipics",
      "version": "1.0.0",
      "description": "\"Una app para practicar electron js\"",
      "main": "index.js",
      "scripts": {
        "dev": "electron index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/MrRojas/PlatziPics.git"
      },
      "keywords": [
        "armando_rojas"
      ],
      "author": "Armando Jose Rojas Querales",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/MrRojas/PlatziPics/issues"
      },
      "homepage": "https://github.com/MrRojas/PlatziPics#readme",
      "dependencies": {
        "electron": "^2.0.3"
      }
    }

# Paso 6: 

## Para realizar una ventana debemos llamar a la variable :

**BrowserWindow** el cual me permite realizar la llamada a una ventana, ademas de cargar paginas web, tambien se integra otro tipo de eventos como **once** y  **ready-to-show**

### Ejemplo en clase: 


    'use strict'
    
    const { app  , BrowserWindow } = require ('electron')
    
    
    
    // app.on es para escuchar un evento 
    // ready es estilo JQUERY
    app.on('ready', () =>{
    
    
    	// se pasa un array con ciertoa atributo
    	let win = new BrowserWindow({
    		width : 800,
    		height : 600,
    		title : 'Hola Mundo',
    		center: true,
    		show : false 
    
    	})
    
    
    	// saber la posicion de la ventana 
    
    	win.on('move' ,  () =>{
    		const position = win.getPosition()
    		console.log( `La posicion es ${position } `)
    	})
    
    
    	// una vez listo el contenido se muestra la pantalla 
    
    	win.once('ready-to-show' , () => {
    
    		win.show()
    	})
    
    
    
    	// escuchar el evento de cierre de ventana 
    	win.on('closed' , () => {
    		// liberar memoria 
    		win = null 
    		// cerrar la aplicacion 
    		app.quit()
    	} )
    
    
    	// pagina a cargar 
    	win.loadURL('http://devdocs.io/')
    })



# Estructura Basica de una App en electron Js 

* src 
  * assets
    * css
    * img
  * render
  * index.js
* package.json

# Herramientas de desarrollo para Electron

## Configurando nuestro frontend

El proyecto electron-compile, nos permite escribir en diferentes tecnologías que no están soportadas nativamente en HTML y compila el código
en tiempo de ejecución.

En Windows instalemos la herramienta **cross-env** que nos permite que las variables de entorno que configuremos en package.json sean iguales para Windows, Linux y Mac.


npm install cross-env --save


# Luego de Haber cambiado a electron-compile...

## podemos usar import de la siguiente manera 