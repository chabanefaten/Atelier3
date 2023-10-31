import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;

  message :string | undefined;

  constructor(private produitService: ProduitService,
                       private router :Router) {}

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();

  }

  addProduit() {
    console.log(this.newIdCat);
    this.newCategorie =
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.router.navigate(['produits'])
    this.produitService.ajouterProduit(this.newProduit);
    this.message =" Produit " + this.newProduit.nomProduit + "ajoute avec succes !" ;
  }

}

