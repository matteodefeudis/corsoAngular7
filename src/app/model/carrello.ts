import { Injectable } from '@angular/core';
import { PersistenceModule } from './persistence.module';
import { Prodotto } from './prodotto';

@Injectable({ providedIn : PersistenceModule})
export class Carrello {
    numeroArticoli : number = 0;
    totaleValore : number = 0;
    datiCarrello : RigaCarrello[] = [];

    aggiungiAlCarrello(prodotto:Prodotto, quantita : number = 1) {
        let riga = this.datiCarrello.find(
            (rigaCarrello)=>rigaCarrello.prodotto.id == prodotto.id
        );
        if(riga){
            riga.quantita+=quantita;
        }else{
            this.datiCarrello.push({prodotto : prodotto, quantita : quantita})
        }
        this.numeroArticoli += quantita;
        this.totaleValore += quantita*prodotto.prezzo;
    }
}

class RigaCarrello {
    prodotto : Prodotto;
    quantita : number;
}