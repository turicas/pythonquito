*[Lee la documentación en Portugués](https://github.com/braziljs/conf-boilerplate/blob/master/README-pt.md)*

---

# Conf Boilerplate [![Build Status](https://secure.travis-ci.org/braziljs/conf-boilerplate.png?branch=master)](https://travis-ci.org/braziljs/conf-boilerplate)

![image](http://f.cl.ly/items/2i1m3z3i1a3Z0I1X472B/logo.jpg)

Es una iniciativa de la [Fundación BrazilJS](http://braziljs.org) para ayudar a aquellas personas que deseen organizar conferencias/eventos y no tengan mucho tiempo de crear un sitio web para tal fin.

> **Responsable:** [Jean Carlo Emer](https://github.com/jcemer)

## Tabla de Contenidos

* [Mira un DEMO en Vivo](http://braziljs.github.io/conf-boilerplate/)
* [¿Cómo funciona?](#how-it-works)
* [¿Cómo empezar?](#getting-started)
* [Estructura](#structure)
* [Personalización](#customization)
* [Deploy](#deploy)
* [Showcase](#showcase)
* [¿Cómo contribuir?](#contributing)
* [¿Quiénes están detrás del proyecto?](#who-is-behind-it)
* [Licencia](#license)

## ¿Cómo funciona?

[![image](http://f.cl.ly/items/1q3i0r3q0n3y1N070M47/Screen%20Shot%202012-11-16%20at%207.05.44%20PM.png)](http://www.youtube.com/watch?v=EI99oZI3nKY)

Nosotros usamos [DocPad](https://github.com/bevry/docpad), un generador estático en NodeJS, para crear una plantilla fácil de personalizar. Más que eso, el hosting es gratuito vía [GitHub Pages](http://pages.github.com) y tú puedes utilizar incluso tu propio dominion *(más información de esto en la sección de [Deploy](#custom-domain))*.

Por defecto, tenemos las siguientes secciones:

* *About* - (Acerca de) para describir cuál es el principal objetivo de tu evento.
* *Location* - (Ubicación) para mostrar donde va a ser el evento utilizando GOogle Maps por ejemplo.
* *Speakers* - (Expositores) para mostrar la información de los conferencistas.
* *Schedule* - (Cronograma) para mostrar la agenda del evento.
* *Sponsors* - (Auspiciantes) para mostrar las marcas de las distintas organizaciones que apoyaron al evento.
* *Partners* - (Copartícipe) para mostrar las marcas de los co-organizadores o empresas aliadas.

*P.D. 1: No existe integración con plataformas de registro o de pago. Por esta razón, nosotros recomendamos [Eventick](http://eventick.com.br/).*

*P.D. 2: No hemos desarrollado aún una solución personalizable y altamente automatizada para formularios de contacto. Por esta razón, nosotros recomendamos [Wufoo](http://wufoo.com/).*

## ¿Cómo empezar?

1. Instala [Git](http://git-scm.com/downloads) y [NodeJS](http://nodejs.org/download/), si no los tienes aún en tu equipo.

2. Procede a clonar el repositorio:

    ```sh
    $ git clone git://github.com/braziljs/conf-boilerplate.git
    ```

3. Dirígete a la carpeta del proyecto:

    ```sh
    $ cd conf-boilerplate
    ```

4. Instala todas las dependencias:

    ```sh
    $ npm install
    ```

5. Y finalmente ejecuta:

    ```sh
    $ npm run watch
    ```

Luego de esto podrás ver el sitio web ejecutándose en la siguiente dirección:
`localhost:9778` :D

## Estructura

La estructura básica del proyecto está dada en la siguiente forma:

```
.
|-- out/
|-- src/
|   |-- documents
|   |-- layouts
|   |-- partials
|-- docpad.js
|-- package.json
`-- publish.sh
```

### out/

Esta carpeta es donde se almacenan los archivos generados, una vez que el DocPad ha sido ejecutado. Sin embargo,, este directorio no es requerido para el versionamiento, por lo tanto es ignorado ([.gitignore](https://github.com/braziljs/conf-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents)

Contiene el archivo responsable de importar todas las secciones de la aplicación. Incluso todos los assets de los temas, tales como imágenes, archivos CSS y JS.

### [src/layouts](https://github.com/braziljs/conf-boilerplate/tree/master/src/layouts)

Contiene la plantilla por defecto de la aplicación.

### [src/partials](https://github.com/braziljs/conf-boilerplate/tree/master/src/partials)

Son bloques de código utilizados para generar la página principal del sitio ([index.html](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents/index.html.eco)).

### [docpad.js](https://github.com/braziljs/conf-boilerplate/blob/master/docpad.js)

Almacena la mayoría de configuraciones de la aplicación.

### [package.json](https://github.com/braziljs/conf-boilerplate/blob/master/package.json)

Lista las dependencias de los módulos de NodeJS.

### [publish.sh](https://github.com/braziljs/conf-boilerplate/blob/master/publish.sh)

Script Shell responsable de la publicación del sitio vía [GitHub Pages](http://pages.github.com).

## Personalización

El proyecto ya viene con una plantilla visual, siéntete libre de utilizarla, pero nosotros recomendamos que crees una propia para que puedas agregarle la identidad del evento.

De todas maneras, nosotros hemos preparado algo altamente personalizable para ti, así que para la mayoría de los cambios solo debes dirigirte al archivo `docpad.js` y cambiar los valores de las variables.

### Información básica acerca de la Conferencia

¿Deseas cambiar el nombre, la fecha, la dirección, la ciudad o el precio de la converencia? Adelante!

```
conf:
  name: "Nombre de la Conferencia"
  description: "Descripción de la Conferencia"
  date: "15 de Noviembre 2016"
  price: "$100 USD"
  address: "Ladrón de Guevara y Av. 12 de Octubre, Escuela Politécnica Nacional, Comunidad de Software Libre y Seguridad Informática Hackem"
  venue: "Hemiciclo Politécnico"
  city: "Quito"
```

### Información básica acerca del sitio web

¿Deseas cambiar la imagen de portada, el código de Google Analytics o el favicon? Adelante!

```
site:
  theme: "yellow-swan"
  url: "http://braziljs.github.io/conf-boilerplate/"
  googleanalytics: "UA-33656081-1"
```

### Secciones activas

¿Aún no tienes el cronograma completo del evento? No hay problema, solo comenta la línea que dice `schedule` (utilizando un `#`).

¿Aún no tienes confirmado quiénes darán las charlas? Ok, solo comenta la línea que dice `speakers` (utilizando un `#`).

Y así sucesivamente para todas las secciones.  =)

```
sections: [
  "about"
  "location"
  #"speakers"
  #"schedule"
  "sponsors"
  "partners"
  "contact"
]
```

También puedes cambiar el orden en el que aparecen las secciones en la página y en la navefación al cambiar el orden de las líneas aquí presentadas!

### Etiquetas (i18n)

Si deseas utilizar diferentes palabras que las existentes por defecto, o utilizar un lenguaje diferente solo cambia las etiquetas para los elementos correspondientes:


```
labels:
  about: "Acerca de"
  location: "Ubicación"
  speakers: "Expositores"
  schedule: "Agenda"
  sponsors: "Auspiciantes"
  partners: "Co-partícipes"
  contact: "Contato"
```

Tú también puedes utilizar este objeto para definir otras etiquetas, a las cuáles desees acceder en tus plantillas.

### Lista de Conferencistas

Para añadir/modificar/excluir a un conferencista es igual de simple, solo busca la variable `schedule`.

```
schedule: [
  name: "Richard Stallman"
  photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg"
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
  company: "Free Software Foundation"
  twitter: "rms"
  presentation:
    title: "How to kill Microsoft Windows"
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    time: "13h00"
]
```

¿Deseas agregar un atributo al expositor que no está incluido en la lista anterior? Ok, solo agrégalo en el archivo `docpad.js` y luego muéstralo con `<%= speaker.tuNuevoAtributo %>` en [speakers.html.eco](https://github.com/braziljs/conf-boilerplate/blob/master/src/partials/section/speakers.html.eco).

### Listar otros ítems en la Agenda

Para cambiar el tiempo de check-in, almuerzo y coffee-break, solo busca la variable `schedule`.

```
schedule: [
  name: "Check-in / Desayuno"
  time: "9h00"
]
```

Pero si deseas agregar otro coffee-creak o cualquier tipo de ítem en la agenda, solo agrega el ítem en la lista.

### Lista de Auspiciantes/Co-partícipes

Para agregar un auspiciante o co-partícipe, solo busca las variables `sponsors` y `partners` respectivamente.

```
partners: [
  name: "Hackem Research Group"
  logo: "http://4.bp.blogspot.com/-7wsc7MXsZEQ/U8VsPifG5bI/AAAAAAAACvE/MTQbTmPIQzo/s1600/Hackem+Research+Group.png"
  url: "https://facebook.com/hackem.epn"
]
```

## Deploy

No nos gusta centralizar el poder de hacer Deploy a una sola persona, así que nosotros utilizaremos [GitHub Pages](http://pages.github.com) que son gratuitas. Para eso solo necesitas ejecutar:

```sh
$ npm run deploy
```

Espera algunos minutos hasta que GitHub te envíe un correo electrónico indicando que todo se ha realizado de manera correcta. Entonces accede a: `http://tuUsuario.github.io/tuFork`

### Dominio Personalizado

Si no deseas utilizar el dominio de GitHub, puedes utilizar tu propio dominio con unos pocos pasos.

1. Crea un archivo `CNAME` dentro del directorio `src/files` y llénalo con el dominio deseado, por ejemplo: `hackemCON.org`.
2. Cambia los DNS de tu dominio [siguiendo las instrucciones de GitHub](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### ¿Cómo hacer deploy sin utilizar GitHub Pages?

Si deseas utilizar tu propio servidor para almancenar tu sitio web:

* Ejecuta `npm run generate` en la raíz del proyecto.

Este comando generará una carpeta de nombre `out` que contiene solamente los archivos estáticos, ahora solo sube estos archivos a tu servidor.

## Showcase

Mira las conferencias que ya han utilizado este proyecto como punto de lanzamiento:

* [FrontInterior](http://frontinterior.com.br)
* [Random Hacks of Kindness](http://www.myskills.com.br/rhok-recife/)
* [yoLab](http://yodojo.github.com/yoLab/) ([source code](https://github.com/yodojo/yoLab))
* [Payphone Hackday](http://payphonehackday.com/) ([source code](https://github.com/octanebaby/conf-boilerplate))
* [RSJS](http://rsjs.org/) ([source code](https://github.com/braziljs/rsjs))
* [Front in BH](http://frontinbh.com.br/) ([source code](https://github.com/braziljs/front-in-bh))
* [Front in Rio](http://frontinrio.com.br/)
* [Front in Bahia](http://frontinbahia.com.br/)
* [Dev in Company BH](http://devincompanybh.github.io/setembro-2013/) ([source code](https://github.com/devincompanybh/setembro-2013/))
* [TEDx Recife](http://tedxrecife.com.br/)
* [DevFest](http://www.devfest.com.br/2013/)
* [DevFest Sul](http://www.devfestsul.com.br/)
* [Front in Floripa](http://frontinfloripa.com.br/)
* [Front in POA](http://frontinpoa.com.br/) ([source code](https://github.com/braziljs/front-in-poa))
* [mloc.js](http://mloc-js.com/2014/)
* [Craft Conf](http://craft-conf.com/2014/) ([source code](https://github.com/ustream/craftconf))
* [Stretch Conference](http://stretchcon.com/2013/)
* [Meet.us()](http://meetus.github.io/) ([source code](https://github.com/meetus/meetus.github.io))
* [MPI LAMEC 2014](http://mpilamec.com/)
* [Front in Cuiabá](http://frontincuiaba.com.br/) ([source code](https://github.com/braziljs/front-in-cuiaba))
* [JS Day - Feira de Santana](http://jsday.com.br/) ([source code](https://github.com/devfsa/jsday))
* [V SAICC](http://saicc.furg.br/)
* [Dia do Codigo](http://diadocodigo.org/)

¿Has creato un sitio web utilizando ConfBoilerplate? Háznos saber! =D

## Forks

* [Versión en Ruby de ConfBoilerplate hecha con Jekyll por Mauro George](https://github.com/maurogeorge/conf_boilerplate_ruby)

## ¿Cómo contribuir?

Si tu deseas enviar una Pull Request con tus cambios, por favor házlo en la rama `dev`.

* `master` contiene la versión estable del proyecto.
* `dev` contiene características en desarrollo.

## ¿Quienes están detrás del Proyecto?

Somos un grupo de desarrolladores que han atravesado tiempos difíciles al moento de organizar eventos alrededor de Brazil y ahora solo deseamos ayudar a otras personas en esta tarea difícil.

**Creado por**:

* [Zeno Rocha](http://github.com/zenorocha)
* [Bernard De Luna](http://github.com/bernarddeluna)

**Traducido por**:
* [Galoget Latorre](http://github.com/galoget)

Agradecimientos especiales a todos los miembros de la Comunidad por su retroalimentación y contribuciones.

## Licencia.

[MIT License](http://braziljs.mit-license.org/) © BrazilJS Foundation
