import DataService from './BEServices/dataservice';
const AsyncFunction = (async () => {}).constructor;

class ServiceManager{
    constructor(){
        this.regitry = {}
    }
    getService(name){
        name = name.toLowerCase();
  
        var service = this.regitry[name];
        if(!service || service.isUiService) return null;
        
        return service.instance;
    }

   
    async registerService(name, instance){
        if(!instance || !name) return;
         try{
            if(instance.onInit instanceof AsyncFunction === true){
                await instance.onInit();
            }else if(typeof instance['onInit'] == 'function'){
                instance.onInit();
            }
         }catch(e){}
        this.regitry[name] = {instance, isUiService: false};
    }
}


const instance = new ServiceManager();



instance.registerService("dataservice", new DataService());



export default instance;