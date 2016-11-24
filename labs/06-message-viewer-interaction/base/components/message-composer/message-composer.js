angular.module("mailApp")
    .component("messageComposer", //becomes message-composer in html 
    {
        controller: MessageComposerController, 
        controllerAs: "composeCtrl",
        templateUrl: "components/message-composer/message-composer.html",
        bindings: {
            "draft" : "<", //input parameter, with data binding
            //TODO BIND reply, forward, cancel callbacks
            onSave: '&',
            onCancel: '&',
            onSend: '&',
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
        this.onSend({
            message: this.draft
        });
    };

    this.save = function ()
    {
       this.onSave();
    };

    this.cancel = function ()
    {
       this.onCancel();
    };
}
