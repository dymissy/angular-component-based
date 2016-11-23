//component name - component definition object
angular.module("mailApp").component("commonStar",{
    templateUrl : "components/common-star/common-star.html",
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        entity : "<",  //mandatory
        onStarred: "&",
    } 
    
});