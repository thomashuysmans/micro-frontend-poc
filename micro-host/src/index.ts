import { ShellService } from './shell/shell.service';


export * from './shell/config';
export * from './shell/shell.service';


let shellService = new ShellService();



shellService.helloWorld();
