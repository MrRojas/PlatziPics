'use strict'

const { app  , BrowserWindow } = require ('electron')



// app.on es para escuchar un evento 
// ready es estilo JQUERY
app.on('ready', () =>{

	let win = new BrowserWindow()

	// escuchar el evento de cierre de ventana 
	win.on('closed' , () => {
		// liberar memoria 
		win = null 
		// cerrar la aplicacion 
		app.quit()
	} )
})

