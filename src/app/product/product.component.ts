import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() notification= new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    //traitement
    this.notification.emit(this.product)
  }
}
