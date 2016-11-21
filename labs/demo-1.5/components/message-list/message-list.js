//component name - component definition object
angular.module("mailApp").component("messageList",{
    templateUrl : "components/message-list/message-list.html",
    controller: MessageListController,
    controllerAs: "messageListCtrl", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        messages : "=messages",  //mandatory
        //it is the same as folders:"=?"
        //? means optional
        title: "=", //equivalent to "=title",
        onReply : "&",
        onForward : "&",
        onDelete : "&",
        onSelect : "&",
        onCurrentMessageChanged: "&"
        
    } 
    
});

function MessageListController() {
    if (!this.messages)
    {
        this.messages = [];
    }
    
    this.setCurrentMessage = function(index)
    {
        this.currentMessage = this.messages[index];
        
        this.onCurrentMessageChanged({
            message: this.currentMessage
        });
    }

    this.next = function () {
        
        if (this.currentMessageIndex < this.messages.length)
            this.currentMessageIndex++;

        this.setCurrentMessage(this.currentMessageIndex);
    };

    this.prev = function () {        
        if (this.currentMessageIndex <0)
            this.currentMessageIndex--;

        this.setCurrentMessage(this.currentMessageIndex);
    };
    
    //FUTURE lab - refactor the messageActionsToolbar with transclusion
    this.reply = function (message) {
        
        this.onReply({
            message : message
        });
    };
    this.forward = function (message) {
        //TODO lab        
    };

    this.delete = function (message) {
        //TODO ask for confirmation
        this.onDelete({
            message : message
        });
    };

    this.currentMessageIndex = 0;
 
    if (this.messages && this.messages.length)
        this.setCurrentMessage(this.currentMessageIndex);

}