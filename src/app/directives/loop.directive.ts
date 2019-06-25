import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({selector:'[appLoop]'})
export class LoopDirective implements OnChanges{

    @Input()
    appLoopOf : Array<any>
    @Input()
    appLoopOrderBy : (a,b)=>number;

    constructor(
        private template : TemplateRef<any>,
        private container : ViewContainerRef
    ){}

    ngOnChanges(){
        //ripulire il container 
        this.container.clear();

        if(this.appLoopOrderBy && this.appLoopOf){
            // attenzione che sort modifica l'array di partenza 
            this.appLoopOf.sort(this.appLoopOrderBy);
        }

        for(let i=0;i<this.appLoopOf.length;i++){
            const loopContext : LoopContext = new 
            LoopContext(this.appLoopOf[i],i);

            this.container
            .createEmbeddedView(
                this.template,
                loopContext
            );
        }
    }

}

class LoopContext {
    even : boolean;
    odd : boolean;
    constructor(public $implicit, public index){
        this.even = index % 2 == 0;
        this.odd = index % 2 == 1;
    }
}