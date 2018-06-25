
#  Browser Window


## Propiedades de BrowserWindow

_1.Iconos:_  
Esta propiedad nos permite manejar el icono que va a poseer nuestra aplicacion al momento de ser inicializada.

`icon:path.join(__dirname, 'assets/icons/png/64x64.png')`

Para agregar la extension de las imagenes (iconos) cambia dependiendo del sistema operativo para el cual se vaya a desarrollar la aplicacion: para  **_Linux es .png_**,  **_Windows es .ico_**  y para  **_Mac es .icns_**

  
  

_2.backgroundColor:_  
Esta propiedad nos permite manejar color de fondo que va a poseer nuestra aplicacion esta propiedad recibe un valor de tipo hexadecimal.

`backgroundColor: '#312450'`

  
  

_3. Acciones (Minimizar, Maximizar y Cerrar):_  
Estas propiedades nos permiten manejar los botones de acciones de nuestra ventana, para agregar estas propiedades no poseen soporte para Linux. Estos valores por defecto son TRUE esta propiedad es de tipo BOOLEAN

```
minimizable : false,
maximizable : false,
closable : false
```

  
  

_4. Resizable:_  
Esta propiedad nos permite modificar el tamaño de la ventana de nuestra aplicacion. Este valor por defecto es TRUE

`resizable : false`

  
  

_5. Center:_  
**Nota:** Esta propiedad centra la ventana de nuestra aplicacion en la pantalla. Esta opcion es de tipo Boolean

`center : true`

  
  

_6. Movable:_  
Esta propiedad nos permite mover nuestra ventana, esta propiedad no esta soportada por Linux.

`movable : false`

  
  

_7. defaultFontSize:_  
Esta propiedad nos permite definir el tamaño de la fuente de nuestra aplicacion, por defecto es 16

`defaultFontSize : 20`