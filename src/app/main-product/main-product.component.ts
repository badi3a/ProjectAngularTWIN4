import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct: Product[];
  showFormTemplate: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.listProduct= [
      { id: "123",
        title: "T-shirt 1",
        description: "product description.....",
        price: 12,
        quantity: 0,
        nbrLike: 2,
        category: 'category1',
        picture: 'assets/t shirt 1.jpg'},
      { id: "89",
        title: "T-shirt 2",
        description: "product description.....",
        price: 100,
        quantity: 10,
        nbrLike: 2,
        category: 'category1',
        picture: 'assets/t shirt 2.jpg'},
      {id: "15",
        title: "T-shirt 3",
        description: "product description.....",
        price: 134,
        quantity: 2,
        nbrLike: 0,
        category: 'category1',
        picture: 'assets/t shirt 1.jpg'},
      { id: "9",
        title: "T-shirt 4",
        description: "product description.....",
        price: 100,
        quantity: 10,
        nbrLike: 2,
        category: 'category1',
        picture: 'assets/t shirt 2.jpg'},

    ]
  }
 like(p:Product){
    let i = this.listProduct.indexOf(p);
    this.listProduct[i].nbrLike++;
 }

  saveProduct(product: Product) {
    this.listProduct.push(product);
    this.showFormTemplate = false;
  }
  showForm(){
    this.showFormTemplate =true
  }
}
