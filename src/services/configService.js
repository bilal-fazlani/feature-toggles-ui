class ConfigService{
    constructor(){
        this.initialized = false;
        this.configs = {};
    }

    async init(){
        if(!this.initialized){
            const response = await fetch('/config.json');
            this.configs = await response.json();
        }
    }
}

const configService = new ConfigService();
export default configService;