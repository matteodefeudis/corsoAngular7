import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdottiService } from 'src/app/model/prodotti.service';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  formProdotto : FormGroup;
  messaggio : string;

  constructor(private prodottiService : ProdottiService) { }

  ngOnInit() {
    this.prodottiService.loadProdotti();

    this.formProdotto = new FormGroup({
      nome : new FormControl('',[Validators.required]),
      descrizione : new FormControl(''),
      categoria : new FormControl('',[Validators.required]),
      prezzo : new FormControl(0,[Validators.required])
    });

    let prodotto = this.prodottiService.getProdottoInModifica();
    if(prodotto){
      this.formProdotto.patchValue({
        nome: prodotto.nome,
        descrizione : prodotto.descrizione,
        categoria : prodotto.categoria,
        prezzo: prodotto.prezzo
      });
    }
  }

  get categorie(){
    return this.prodottiService.getCategorie();
  }

  salva(){
    this.prodottiService.salvaProdotto(this.formProdotto.value)
    .subscribe(res=>{
      if(!this.prodottiService.getProdottoInModifica()){
        this.messaggio = "Prodotto inserito!"
        this.svuota();
      }
      this.messaggio = 'Prodotto modificato!';
      this.svuota();
    }),(error)=>{
      this.messaggio = 'Si è verificato un errore!'
    }
  }

  svuota(){
    this.formProdotto.reset();
    this.prodottiService.setProdottoInModifica(null);
  }

}
