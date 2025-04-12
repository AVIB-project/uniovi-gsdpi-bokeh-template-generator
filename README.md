# Description
Bokeh basic authentication template generator 

## Install template

First install [Yeoman](http://yeoman.io) template manager. It is assumed that node is already installed [node.js](https://nodejs.org/) in your computer:

```bash
$ npm install -g yo
```

Install the last generator-uniovi-bokeh-template npm package from [npm](https://www.npmjs.com/):

```bash
$ npm install -g generator-uniovi-bokeh-template
```

## Update template

If you have already has installed a bokeh generator version and you want update it, execute again this command:

```bash
npm install -g generator-uniovi-bokeh-template
```

## Generate your project from template

Then you can generate your new project from template. Follow the promt question to configure your project:

```bash
$ yo uniovi-bokeh-template
```

## Post project generation

Create a virtual environment and active it for your project to develop your application

```bash
$ python3 -m venv .venv
```

```bash
$ source .venv/bin/activate
```

Install default dependencies
```bash
$ pip install -r requirements.txt
```

If exist any problem with the python dependencies in your python environment install this tool:
```bash
pip install pur
```

and update your requirements file with the last dependencies for your environment. Then try again to install the dependencies:
```bash
pur -r requirements.txt
```

Execute default template just created
```bash
$ python bootstrap.py
```
## Develop your own application

By default the generator create a basic Bokeh application to be serve by Bokeh Server. This application is implemented in the **main.py** python module. **Now you must substitute this module with your own application**

## Template tree folder structure

```text
├───auth                     -> Bokeh basic authentication module
│    ├──auth.py              
│    └──login.html           
├───static                   -> Bokeh login styles and image resources
│    ├───css
│    │   └───styles.css      
│    └───images              
│        ├──login_background.png 
│        └──login_gsdpi.png  
├───.gitignore               -> git ignore default application configuration
├───bootstrap.py             -> application bootstrap
├───Dockerfile               -> dockerfile to build appplication docker image
├───main.py                  -> main python application module
├───README                   -> application README file
├───requirements.txt         -> application python dependencies
```

## Build, run and publish your docker image

After finalize your proyect you can build your docker image, run and publish it. Follow these steps:

Build your image:

```
$ docker build -t uniovi-gsdpi-bokeh-my-app:1.0.0 .
```

Start a container from your image and test:

```
$ docker run --rm --name uniovi-gsdpi-bokeh-my-app -p 5006:5006 uniovi-gsdpi-bokeh-my-app:1.0.0
```

If you want publish your image, tag your docker image to be uploaded to your repository:

```
$ docker tag uniovi-gsdpi-bokeh-my-app:1.0.0 your-account/uniovi-gsdpi-bokeh-my-app:1.0.0
```

Finally push the docker image to your repository:

```
$ docker push your-account/uniovi-gsdpi-bokeh-my-app:1.0.0
```

Open your application from your browser:

http://localhost:9006/prefix

## An example
Bokeh template prompt
![bokeh-template-prompt](https://github.com/AVIB-project/uniovi-gsdpi-bokeh-template-generator/blob/main/images/bokeh_template_prompt.png "bokeh-template-prompt")

Bokeh Login
![bokeh-login](https://github.com/AVIB-project/uniovi-gsdpi-bokeh-template-generator/blob/main/images/bokeh_login.png "bokeh-login")

Bokeh sample application
![bokeh-application](https://github.com/AVIB-project/uniovi-gsdpi-bokeh-template-generator/blob/main/images/bokeh_application.png "bokeh-application")