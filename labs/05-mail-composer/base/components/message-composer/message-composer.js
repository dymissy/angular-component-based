angular.module("mailApp")
    .component("TODO COMPONENT NAME", //becomes message-composer in html 
    {
        controller: MessageComposerController, 
        controllerAs: "composeCtrl",
        templateUrl: "components/message-composer/message-composer.html",
        bindings: {
            //TODO bind callbacks for send, save, cancel
            
        }
   
    });

function MessageComposerController(AccountService){

    if (!this.draft)
    {
        this.draft = getDefaultMessage();
    } 
    
    this.accountEmail = AccountService.getAccountEmail();

    function getDefaultMessage() {
        var draft = {
            from: this.accountEmail,
            to: "",
            subject: "",
            body: ""
        };
        return draft;
    };
    
    this.send = function ()
    {
        //TODO implement send callback
    };
    this.save = function ()
    {
        //TODO advanced implement save callback    
    };
    this.cancel = function ()
    {
        //TODO implement cancel callback     
    };
}
