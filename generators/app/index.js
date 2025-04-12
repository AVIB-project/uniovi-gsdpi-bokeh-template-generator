'use strict';
import CFonts from "cfonts";
import chalk from "chalk";
import Generator from "yeoman-generator";

const log = console.log;
const versionBokehTemplate = '1.0.0';

export default class extends Generator {
  // configure template prompt  
  prompting() {
    CFonts.say('GSDPI', {
      font: 'block',
      align: 'left',
      colors: ['#FF681F', 'yellowBright'],
      background: 'transparent',
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: '0',
    });

    log(
      chalk.blue(
        'Welcome to the Bokeh Template Generator ' +
          versionBokehTemplate
      )
    );
    log('\n');
    log(
      chalk.green(
        'The project will be generated inside this folder: ' +
          chalk.yellow(this.destinationPath())
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name? [without blanks], By default:',
        default: this.appname.trim().replace(' ', '-'),
      },
      {
        type: 'input',
        name: 'projectVersion',
        message: 'Project version?, By default:',
        default: '0.0.1',
      },
      {
        type: 'input',
        name: 'appTitle',
        message: 'App title?, By default:',
        default: 'Bokeh Template',
      },       
      {
        type: 'input',
        name: 'appUsername',
        message: 'App username?, By default:',
        default: 'username',
      },
      {
        type: 'input',
        name: 'appPassword',
        message: 'App password?, By default:',
        default: 'password',
      }, 
      {
        type: 'input',
        name: 'appPrefix',
        message: 'App path prefix? [without blanks], By default:',
        default: 'prefix',
      },        
      {
        type: 'input',
        name: 'appPort',
        message: 'App port?, By default:',
        default: 5006,
      },      
    ];
    
    return this.prompt(prompts).then((props) => {
      this.props = props;
      this.versionBokehTemplate = versionBokehTemplate;
    });
  }

  writing() {
    console.log('Copy all files in folder');
    this.fs.copyTpl(this.templatePath('project/**'), this.destinationPath(this.props.projectName), {
      projectName: this.props.projectName,
      projectVersion: this.props.projectVersion,
      appTitle: this.props.appTitle,
      appUsername: this.props.appUsername,
      appPassword: this.props.appPassword,
      appPrefix: this.props.appPrefix,
      appPort: this.props.appPort,
      versionBokehTemplate: this.versionBokehTemplate,
    });
  }

  install() {
    // Se ejecuta la herramienta prettier para formatear la calidad de nuestro codigo
    //this.spawnCommandSync('npm run format');
  }
}
