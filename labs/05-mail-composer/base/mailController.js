
/* Main page controller, coordinates all the other components  */
function MailController(AccountService, MessageService)
{
    this.defaultQuery = "js";
    

    
    this.messages = [];
    this.currentMessage = null; 

    //TODO load data from services (or backend)
    this.folders = [
        "Inbox",
        "Trash",
        "Sent"
    ];
    this.customFolders = [
        "Angular",
        "Typescript",
    ];
    this.defaultFolder = 'Inbox';
    
        //TODO load messages list from service
    function loadInbox(){ 
        return MessageService.getMessages();
    };

    this.messages = loadInbox(); 
    this.currentMessage = this.messages[0];

    this.selectFolder = function (folderName) {
        this.messageListTitle = folderName;
        
        if ("Inbox" == folderName)
        {
            this.messages = loadInbox();
            return;
        }   
        //TODO load data from services (or backend)
        
        this.messages = MessageService.getMessagesByFolder(folderName);
    };

    this.selectCurrentMessage = function (message)
    {
        this.currentMessage = message; 
    }


    //TODO discuss if initialize the sender here or in the composer    
    this.draft = {
        from : AccountService.getAccountEmail()
    };

    this.send = function (message) {
        //TODO close the composer section
        //TODO ADVANCED add to sent messages
    };
    
    this.closeComposer = function () {
        //TODO 
    };
    
    this.compose = function (template) {
    
        //TODO set composerActive flag 
    };

    
}

angular.module("mailApp")
    .controller("MailController", MailController);

