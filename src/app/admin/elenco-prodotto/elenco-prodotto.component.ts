import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/app/model/prodotti.service';
import { Prodotto } from 'src/app/model/prodotto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elenco-prodotto',
  templateUrl: './elenco-prodotto.component.html',
  styleUrls: ['./elenco-prodotto.component.css']
})
export class ElencoProdottoComponent implements OnInit {

  constructor(
    private prodottiService : ProdottiService,
    private router : Router
    ) { }

  ngOnInit() {
    this.prodottiService.loadProdotti();
  }

  get prodotti(){
    return this.prodottiService.getProdotti();
  }
  
  modifica(prodotto : Prodotto){
    this.prodottiService.setProdottoInModifica(prodotto);
    this.router.navigateByUrl('/admin/main/form-prodotto');
  }

}
