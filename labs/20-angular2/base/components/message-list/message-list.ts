import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({selector: 'message-list', 
    templateUrl : "components/message-list/message-list.html",
    inputs : ["messages","title"],
    outputs: ["onCurrentMessageChanged","onSelect"],
    directives: ["common-star"]

})
export class MessageListComponent  {
    messages; 
    currentMessageIndex = 0;
    currentMessage;


    onCurrentMessageChanged = new EventEmitter<any>(); 
    
    ngOnInit(){
        
    }
    
    setCurrentMessage(index)
    {
        this.currentMessage = this.messages[index];
        this.currentMessageIndex = index; 

        this.onCurrentMessageChanged.emit({
            message: this.currentMessage
        });
    }

    next () {
        
        if (this.currentMessageIndex < this.messages.length -1)
            this.currentMessageIndex++;

        this.setCurrentMessage(this.currentMessageIndex);
    };

    prev () {        
        if (this.currentMessageIndex >0)
            this.currentMessageIndex--;

        this.setCurrentMessage(this.currentMessageIndex);
    };
    
    ngOnChanges (changes){
        if (changes.messages)
        {
            this.currentMessageIndex = 0;
        
            if (this.messages && this.messages.length)
                this.setCurrentMessage(this.currentMessageIndex);
        }
    }


}    
   
