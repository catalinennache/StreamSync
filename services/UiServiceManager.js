import UiDataService from './UiServices/dataservice';
import UiControlService from './UiServices/uicontrol';

const AsyncFunction = (async () => {}).constructor;

class UiServiceManager{
    constructor(){
        this.serviceRegitry = {}
        this.componentRegistry = {}
    }


    getService(name){
        name = name.toLowerCase();
  
        var service = this.serviceRegitry[name];
        if(!service || !service.isUiService) return null;
        
        return service.instance;
    }

    getComponent(name){
       
        name = name.toLowerCase();
        console.log(this.componentRegistry)
        var component = this.componentRegistry[name];
        if(!component) return null;
        
        return component;
    }
    

    async registerService(name, instance){
        if(!instance || !name) return;
        try{
           if(instance.onRegistered instanceof AsyncFunction === true){
               await instance.onRegistered(this);
           }else if(typeof instance['onRegistered'] == 'function'){
               instance.onRegistered(this);
           }
        }catch(e){}
       this.serviceRegitry[name] = {instance, isUiService: true};
    }

    registerComponent(name, instance){
        console.log("registered instance ", name)
        this.componentRegistry[name] = instance;
       
    }

}

global.UiServiceManager = global.UiServiceManager?global.UiServiceManager:new UiServiceManager();

const instance = global.UiServiceManager;



instance.registerService("dataservice", new UiDataService());
instance.registerService("uicontrol", new UiControlService());


export default instance;