
export default class UiControlService{
    constructor(){
       
    }
    onRegistered(manager){
        this.manager = manager;
    }

    openDetailsPanel(model){
        var detailsPanel = this.manager.getComponent("detailspanel");

        detailsPanel.show(model);
    }

    closeDetailsPanel(model){
        var detailsPanel = this.manager.getComponent("detailspanel");

        detailsPanel.hide();
    }

    showToast(){

    }
}