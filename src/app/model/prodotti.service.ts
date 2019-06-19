import { Injectable } from '@angular/core';
import { PersistenceModule } from './persistence.module';
import { Prodotto } from './prodotto';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({providedIn:PersistenceModule})
export class ProdottiService {

  private urlProdotti = 'http://localhost:3000/prodotti';
  private urlCategorie = 'http://localhost:3000/categorie';


  constructor(
    private httpClient : HttpClient,
    private loginService : LoginService
    ) { }

  private prodotti : Prodotto[] = [
    /*{id:1,nome:'Il Nome della Rosa',categoria:'Libri',prezzo:10,descrizione:'Best Seller di Umberto Eco'},
    {id:2,nome:'La Divina Commedia',categoria:'Libri',prezzo:200,descrizione:'Best Seller di Dante Alighieri'},
    {id:3,nome:'L\'Attimo fuggente',categoria:'Film',prezzo:20,descrizione:'Film con Robin Williams'},
    {id:4,nome:'La Pantera Rosa',categoria:'Film',prezzo:10,descrizione:'Film commedia'},
    {id:5,nome:'iPhone XS',categoria:'Smartphone',prezzo:1000,descrizione:'Ultimo modello di Apple'}*/
  ];

  private categorie : string[] = [];
  private prodottoInModifica : Prodotto;

  loadProdotti(){
    //costruisce l'observable che gestirà la chiamata
    let o : Observable<Prodotto[]> = this.httpClient.get<Prodotto[]>(this.urlProdotti);
    //1
    //Sottoscrivo l'observable
    o.subscribe(
      (response)=>{
        //3
        this.prodotti = response;
      },
      (error)=>{console.error(error)}
    );
    //2
    this.httpClient.get<string[]>(this.urlCategorie)
    .subscribe(res=>{this.categorie=res})
  }

  getProdotti(categoria? : string) : Prodotto[] {
    if(categoria){
      //sintassi classica
      //function(prod){return prod.categoria==categoria}
      //sintassi lambda
      return this.prodotti.filter((prod)=>prod.categoria==categoria);
    } else
      return this.prodotti;
  }

  //restituisce le categorie dell'array prodotti senza ripetizioni
  getCategorie() : string[]{
    /*let cat = [];
    this.prodotti.map(
      (prod)=>prod.categoria
      ).forEach((categoria)=>{
        if(cat.indexOf(categoria)==-1)
        cat.push(categoria);
      });*/
      return this.categorie;
  }

  salvaProdotto(prodotto : Prodotto) : Observable<any>{
    if(!this.prodottoInModifica || !this.prodottoInModifica.id){
      return this.httpClient.post(
        this.urlProdotti,
        prodotto,
        this.loginService.getAuthHeader());
    }else{
      prodotto.id = this.prodottoInModifica.id;
      return this.httpClient.put(
        this.urlProdotti+'/'+prodotto.id,
        prodotto,
        this.loginService.getAuthHeader()
      )
    }
    
  }

  setProdottoInModifica(prodotto : Prodotto){
    this.prodottoInModifica = prodotto;
  }

  getProdottoInModifica(){
    return this.prodottoInModifica;
  }

}
