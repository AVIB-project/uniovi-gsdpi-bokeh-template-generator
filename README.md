# Description
Bokeh template generator

## Instalación

First install [Yeoman](http://yeoman.io) and the el uniovi-bokeh-template with [npm](https://www.npmjs.com/) (
It is assumed that it is already installed [node.js](https://nodejs.org/)). 

```bash
$ npm install -g yo
$ npm install -g uniovi-bokeh-template
```

For a particular version execute:

```bash
$ npm install -g uniovi-bokeh-template@1.0.0
```

Then you can generate the new project:

```bash
$ yo uniovi-bokeh-template
```

## Post installation

Create a virtual environment and active it for your template to develop your application

```bash
$ python3 -m venv .venv
```

```bash
$ source .venv/bin/activate
```

Downdload default dependencies
```bash
$ pip install -r requirements.txt
```

Execute default template
```bash
$ python3 bootstrap.py
```

Develop your application and don't forget add new dependencies to your requirements file

## Update the generator

If you have already a generator version anf you want update this on execute:

```bash
npm install -g uniovi-bokeh-template
```

## Arbol del proyecto creado

Este es el arbol de carpeta y ficheros creados por el generador de yeoman. En resumen este árbol es muy semejante a cualquier
árbol de proyectos creado por el scaffolding de Angular al que se le ha añadido nuevas configuraciones propias a cualquier proyecto en Consum.
Estas particularidades las podemos resumir en:

 - Un menu mock por defecto que deberá de ser borrado al iniciar nuestro proyecto.
 - Reglas de Lint y Prettier y Html para aplicar buenas practicas y formato standard a nuestro código.
 - Reglas para anáisis estático de nuestro código por parte de SonarCloud.
 - Configuración del pipeline de Jenkins.
 - Incluye la dependencia de la última libreria de Componentes estable, con todos los componentes y paquetes de estilos de Consum.
 - Entorno de test configurado para poder empezar a desarrollar nuestra aplicación.

```text
├───src
│    ├───app
│    │   ├───core
│    │   │   ├───constants
│    │   │   │   └───menu-mock.ts ->  menu mock de prueba que podrá ser borrado tras el inicio del desarrollo del proyecto
│    │   │   └───models
│    │   │   │   └───environment.ts ->  fichero de configuración custom en donde podremos añadir variables de entorno si fuera necesario a nuestro proyecto
│    │   └───pages
│    │       └───... -> paginas mock que son accedidas por el menu mock y que pueden ser un punto de partida o simplemebte ser borradas tras el inicio del desarrollo del proyecto
│    ├───assets\i18n -> traducciones base de nuestro proyecto
│    │   ├───en-GB.json
│    │   └───es-ES.json
│    ├───centralized-config -> configuraciones de todos los servicios nginx remoto encargado de ofrecer las configuraciones de nuestro proyecto en tiempo de ejecución.
│    │   ├───nginx-des.conf
│    │   ├───nginx-pre.conf
│    │   └───nginx-test.conf
│    ├───environments -> configuracion de los entornos de nuestro proyecto. Local y producción, en este caso la configuración será recoogida en tiempo de ejecución del entorno correspondiente.
│    │   ├───environment.prod.ts
│    │   └───environment.ts
│    ├───local-config
│    │   └───environment.json: configuración local de nuestro proyecto
│    ├───scss
│    │   ├───styles.scss
│    │   └───styles.test.scss
│    ├───karma.conf.js -> configuración del entorno de test de nuestro proyecto
│    ├───main.js -> punto de arranque o entrada de nuestro proyecto
│    └───index.html -> index de nuestro proyecto
├───.gitignore               -> configuración ficheros ignorados por git
├───commitlint.config.js     -> configuración commit lint
├───.htmlhintrc              -> configuración de html lint
├───.prettierrc              -> configuración de prettier
├───.stylelintrc             -> configuración de style lint
├───.stylelintignore         -> configuración ficheros ignorados por style lint
├───Jenkinsfile              -> configuración del pipeline jenkins
├───karma.conf.js            -> configuración karma testing
├───angular.json             -> configuración global de Angular
├───package.json             -> fichero con todas las dependencia y comandos de muestro proyecto
├───package-lock.json        -> fichero con todas las dependencia concretas utilizadas por nuestro proyecto
├───sonar-project.properties -> configuración del proyecto de sonar asociado a nuestro proyecto
├───README                   -> README general de nnuestro proyecto
├───tsconfig.json            -> configuración gloabl del compilador de typecript
├───tsconfig.spec.json       -> configuración local del compilador de typecript de nuestro proyecto
```