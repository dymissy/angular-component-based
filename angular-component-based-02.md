# PART 2 - Components with Angular 2



# Enter Angular 2



## TOPICS
* From AngularJS 1.5 to Angular 2.0: syntax changes, 
* but Component-based architecture remains



## Angular2 Key Concepts
Re-implementation of the framework
* build on best practices
* target a wider range of platforms
    * web
    * desktop 
    * mobile
* performance
* improve tooling



## Angular 2
Strongly Component-based
* no more controllers, scopes
* hierarchical Dependency Injection
* configurable change detection
    * dirty checking (zone.js)
    * Observables
    * immutables - based
    * custom
* generalized asynchronous handling (RxJs)
    * more general than Promises



## From Angular 1.5 to Angular 2 - syntax
In an html template

Model-to-view binding
```html
    <div [hidden]="results.length >0">No results</div>
```

View-to-model binding with events
```html
    <button (click)="ctrl.send()">
``` 

Two-way binding
```html
    <input [(ngModel)]="ctrl.userName">
```



## What the...
Initial surprise, but you get used to it.
* very clear if input or output binding
* automatically works with all DOM events and properties
  * without requiring ad-hoc directives such as ``ng-show``
  * also works with Web Components, css classes



## Example with a custom component
```
    <message-list [list]="messages" (selected)="select(message)">
```



## From Angular 1.5 to Angular 2 - constructs
* {{expression}} 
* filters -> pipes

* ng-controller -> @Component classes
* angular.component -> @Component classes

* attribute directives -> same!
* ng-repeat -> *ngFor
* ng-if -> *ngIf

Modules
* angular.module -> @NgModule classes 

https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html

https://angular.io/resources/live-examples/cb-a1-a2-quick-reference/ts/plnkr.html



## From Angular 1.5 to Angular 2 - Components
The key concepts and approach stay the same
* minor syntax changes
* component configuration in Metadata
  * as @Component annotations in Typescript
  * as fluent DSL in ES5 - ES6

https://angular.io/docs/ts/latest/guide/cheatsheet.html



## Angular2 Hello World Component



## Aside - how to bootstrap an Angular2 Application
From ng-app to AppModule
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```



## Common directives
From 
```html
<div ng-class="{active: isActive}">
<div ng-class="{active: isActive,
                   shazam: isImportant}">
```

To 

```html

<div [ngClass]="{active: isActive}">
<div [ngClass]="{active: isActive,
                 shazam: isImportant}">
<div [class.active]="isActive">
```



## For now
we focus on Component APIs

Additional concepts (module bundling, etc ) are needed before going into production



## Passing inputs to Components
```
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
```



## Propagating output from Components
```
@Component({
  moduleId: module.id,
  selector: 'app-confirm',
  templateUrl: 'confirm.component.html'
})
export class ConfirmComponent {
  @Input() okMsg = '';
  @Input('cancelMsg') notOkMsg = '';
  @Output() ok = new EventEmitter();
  @Output('cancel') notOk = new EventEmitter();
  onOkClick() {
    this.ok.emit(true);
  }
  onNotOkClick() {
    this.notOk.emit(true);
  }
}
```



## Without Typescript
```
ConfirmComponent.annotations = [
  new ng.core.Component({
    selector: 'app-confirm',
    templateUrl: 'app/confirm.component.html',
    inputs: [
      'okMsg',
      'notOkMsg: cancelMsg'
    ],
    outputs: [
      'ok',
      'notOk: cancel'
    ]
  })
];
function ConfirmComponent() {
  this.ok    = new ng.core.EventEmitter();
  this.notOk = new ng.core.EventEmitter();
}
ConfirmComponent.prototype.onOkClick = function() {
  this.ok.emit(true);
}
ConfirmComponent.prototype.onNotOkClick = function() {
  this.notOk.emit(true);
}
```



## What if I do not want Typescript? 
https://angular.io/docs/ts/latest/cookbook/ts-to-js.html
```
HeroComponent.annotations = [
  new ng.core.Component({
    selector: 'hero-view',
    template: '<h1>{{title}}: {{getName()}}</h1>'
  })
];
```



## Or with DSL 
```
app.HeroDslComponent = ng.core.Component({
    selector: 'hero-view-dsl',
    template: '<h1>{{title}}: {{getName()}}</h1>',
  })
  .Class({
    constructor: function HeroDslComponent() {
      this.title = "Hero Detail";
    },
    getName: function() { return 'Windstorm'; }
  });
```


## Routed Components



## Hierarchical DI



## ngUpgrade
* How to incrementally upgrade an application from 1.5 to 2.0 with ng-upgrade



## Performance 
* Sidenote: performance tips



##LAB - manual migration
A final lab will demonstrate porting the application to Angular 2.0.



## Angular 2 - to probe further
Dependency Injection (DI) 
Services
Http
Routing
RxJs and Observables

