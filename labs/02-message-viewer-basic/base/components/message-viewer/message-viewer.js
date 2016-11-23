//component name - component definition object
angular.module("mailApp").component("",{ //TODO add component name
    templateUrl : "TODO add component path",
    controller: MessageViewerController,
    controllerAs: "messageViewerCtrl", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        //TODO bind the component parameters
    } 
    
});

function MessageViewerController() {



}