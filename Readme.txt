
***************Instrucciones para ejecutar la prueba**********************
* Se construyo una API REST la cual se encarga de exponer los endpoints con el crud de datos.
* Como base de datos se implemento mongodb en donde se hizo una importacion del archivo data.json sumistrado para la prueba
* El front se construyó con Angular 6 para la visualizacion de los datos
	- se creo funcionalidad para listar todos los hoteles una vez cargue la pagina.
	- se creo funcionalidad para filtrar los hoteles por cualquier caracter ingresado que contenga el nombre del hotel, al dar click en el boton
		Aceptar. Si no se escribe nada en el textbox se carga nuevamente la lista de todos los hoteles.
	- el filtrado de hoteles se envia desde la API REST. 

1. Crear variable de entorno de usuario para mongodb y agregar la ruta del bin de instalacion de mongodb	
	por ejemplo --> C:\Program Files\MongoDB\Server\4.0\bin
	
2. Crear carpeta en el disco "C" llamada "data" y dentro de esta, una carpeta llamada "db" con el fin de almacenar los objetos de la base
	de dato de mongodb.

3. Ejecutar en la consola de windows el comando mongod.exe para levantar el servicio de mongo y darle acceso al sistema operativo para interactuar
	con mongodb.

4. Ejecutar el archivo shell "import_data_mongo.sh" el cual permite importar a mongodb el archivo "data.json" que contiene los datos de los hoteles.

5. La API REST se encuentra en la carpeta "AlmundoApi". Abrir una consola de windows a la ruta de dicha carpeta y ejecutar con el comando "npm start" para 
	iniciar el servicio con los respectivos endpoints que contienen el CRUD de los datos.
	
6. El proyecto FRONT se encuentra en la carpeta "appAlmundo". Abrir una consola de windows a la ruta de dicha carpeta y ejecutar con el comando "ng serve --open"
	para compilar e iniciar la aplicacion en el navegador.