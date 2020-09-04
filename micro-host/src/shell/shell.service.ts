import { ShellConfig, ClientConfigs, ClientConfig } from './config';

export class ShellService {
    
    private config: ShellConfig;
    private contentContainerId = "container-content";
    
    private clientConfigs: ClientConfigs;


    constructor() {}

    // constructor(clientConfigs: ClientConfigs) {
    //     this.clientConfigs = clientConfigs;

    // }


    init(clientConfigs:ClientConfigs) {
        this.clientConfigs = clientConfigs;
        this.preloadClients();
    }


    navigateTo(name:string) {
        const configItem = this.clientConfigs[name];
        this.loadApp(configItem);
    }

    private createElement(configItem:ClientConfig){
        const customElement = document.createElement(configItem.element);
        return customElement;
    }

    private preloadClients(){
        for(const client in this.clientConfigs){
            // Preload flag controleren
            this.preload(client);
        }
    }

    private preload(clientName: string) {
        const configItem = this.clientConfigs[clientName];

        if(configItem.preload)
            this.loadApp(configItem);
    }

    private loadApp(configItem:ClientConfig){
      
        if(configItem.loaded)
            return;
        
        configItem.loaded = true;

        const customElement = this.createElement(configItem);

        const contentContainer = document.getElementById(this.contentContainerId);
        
        if(contentContainer.children.length > 0) {
            contentContainer.removeChild(contentContainer.children[0]);
        }

        contentContainer.appendChild(customElement);
    }

    private loadMicroApp(clientName: string) {
        const configItem = this.clientConfigs[clientName];

        if(configItem.loaded)
            return;
        
        configItem.loaded = true;

        const customElement = this.createElement(configItem);

        const contentContainer = document.getElementById(this.contentContainerId);
        
        if(contentContainer.children.length > 0) {
            contentContainer.removeChild(contentContainer.children[0]);
        }

        contentContainer.appendChild(customElement);
    }
}