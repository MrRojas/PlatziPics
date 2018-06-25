'use strict'

import { app  , BrowserWindow } from 'electron' 
import devtools from './devtools'


if(process.env.NODE_ENV === 'development'){

	devtools()
}


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
	win.loadURL(`file://${__dirname}/render/index.html`)
})

