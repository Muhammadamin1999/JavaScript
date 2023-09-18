class Settings {
    constructor(){
        if(Settings.instance instanceof Settings){
            return Settings.instance;
        }
        this.settingsObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        };
        Object.freeze(this.settingsObject);
        Object.freeze(this);
        Settings.instance = this;
    }
    get(key){
        return this.settingsObject[key];
    }
}