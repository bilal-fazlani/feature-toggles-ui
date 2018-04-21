class ConfigService{
    constructor(){
        this.initialized = false;
        this.configs = {};
    }

    async init(){
        if(!this.initialized){
            const response = await fetch('/config.json');
            const json = await response.json();
            this.configs = json;
            console.info(json);
        }
    }
}

const configService = new ConfigService();
export default configService;