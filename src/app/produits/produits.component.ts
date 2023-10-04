import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits : string[];
  constructor() {

  this.produits = ["pc asus", "Imprimante Epson", "Tablette Samsung"];
}
  ngOnInit(): void {}
}
