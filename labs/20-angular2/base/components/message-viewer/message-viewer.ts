import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({selector: 'message-viewer', 
    templateUrl : "components/message-viewer/message-viewer.html",
    inputs : ["message"],
    outputs: ["onReply","onForward","onDelete"],
    directives: ["common-star"]
})
export class MessageViewerComponent  {
    message; 
    
    onReply = new EventEmitter<any>(); 
    onForward = new EventEmitter<any>(); 
    onDelete = new EventEmitter<any>(); 
    
    reply() {
        
        this.onReply.emit({
            message : this.message
        });
    };
    forward() {
        this.onForward.emit({
            message : this.message
        });      
    };

    delete() {
        //TODO ask for confirmation
        this.onDelete.emit({
            message : this.message
        });
    };

}
