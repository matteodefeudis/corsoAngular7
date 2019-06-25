import { Pipe } from '@angular/core';
import { isNumber } from 'util';

@Pipe({name : 'appPercentuale', pure : true})
export class PercentualePipe {

    /**
     * val | appPercentuale : perc
     * 100 | appPercentuale : 10 -> 10
     */
    transform(val : any, perc : any = 100){
        let numberVal : number = Number(val);
        let numberPerc : number = Number(perc);
        if(isNumber(numberVal) && isNumber(numberPerc)){
            return numberVal * numberPerc / 100;
        }else{
            return val;
        }

    }

}