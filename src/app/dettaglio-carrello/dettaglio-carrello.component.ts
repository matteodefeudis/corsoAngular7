import { Component, OnInit } from '@angular/core';
import { Carrello } from '../model/carrello';

@Component({
  selector: 'app-dettaglio-carrello',
  templateUrl: './dettaglio-carrello.component.html',
  styleUrls: ['./dettaglio-carrello.component.css']
})
export class DettaglioCarrelloComponent implements OnInit {

  constructor(public carrello : Carrello) { }

  ngOnInit() {
  }

}
