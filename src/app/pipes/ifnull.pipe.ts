import { Pipe } from '@angular/core';

@Pipe({name: 'appIfNull', pure:true})
export class IfNullPipe{

    /**
     * espressione | appIfNull:'N/A'
     * espressione | defEspressione : 'N/A'
     * espressione | a1 : a2 : a3
     */
    transform(val : any, ...args : any[]){
        if(val) return val;
        if(args){
            for(let i=0;i<args.length;i++){
                if(args[i])
                return args[i];
            }
        }
        return '';
    }

}