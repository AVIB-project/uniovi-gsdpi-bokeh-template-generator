# Description
Bokeh basic authentication template generator 

## Install template

First install [Yeoman](http://yeoman.io) template manager. It is assumed that node is already installed [node.js](https://nodejs.org/) in your computer:

```bash
$ npm install -g yo
```

Install the uniovi-bokeh-template from [npm](https://www.npmjs.com/):

```bash
$ npm install -g generator-uniovi-bokeh-template
```

For a particular template version:

```bash
$ npm install -g generator-uniovi-bokeh-template@1.0.0
```
## Update template

If you have already a template version and you want update it, execute this comm:

```bash
npm install -g generator-uniovi-bokeh-template
```

## Generate your project from template

Then you can generate your new project from template:

```bash
$ yo uniovi-bokeh-template
```

## Post project generation

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
## Develop your own application

By default the generator create a basic python module to be serve by Bocke Server. This application is implemented in the **main.py** module. **Now you must subsitute this file with your own application**

## Template tree folder structure

```text
├───auth
│    ├──auth.py
│    └──login.html
├───static
│    ├───css
│    │   └───styles.css
│    └───images
│        ├──login_background.png
│        └──login_gsdpi.png
├───.gitignore               -> git ignore files app configuration
├───bootstrap.py             -> application bootstrap
├───Dockerfile               -> dockerfile to build your docker image
├───main.py                  -> main python application module
├───README                   -> application README file
├───requirements.txt         -> application python dependencies
```

## Build, run and publish your docker image

After finalize your proyect you can build your docker image, run and publish it. Follow these steps:

Build your image for exampe

```
$ docker build -t uniovi-gsdpi-bokeh-my-app:1.0.0 .
```

Start a container from your image

```
$ docker run --rm --name uniovi-gsdpi-bokeh-my-app -p 5006:5006 uniovi-gsdpi-bokeh-my-app:1.0.0
```

If you want publish your image, tag yout image docker image to be uploaded to your docker repository

```
$ docker tag uniovi-gsdpi-bokeh-my-app:1.0.0 your-account/uniovi-gsdpi-bokeh-my-app:1.0.0
```

Finally push the docker image to your repository

```
$ docker push your-account/uniovi-gsdpi-bokeh-my-app:1.0.0
```

Open in your browser this link

http://localhost:9006/prefix

## An example
Bohek template prompt
![bokeh-template-prompt](./captures/bokeh_template_prompt.png "bokeh-template-prompt")

Bokeh Login
![bokeh-login](./captures/bokeh_login.png "bokeh-login")

Bokeh sample application
![bokeh-application](./captures/bokeh_application.png "bokeh-application")