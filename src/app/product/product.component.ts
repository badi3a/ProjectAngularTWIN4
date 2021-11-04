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
  @Output() deleteEvent = new EventEmitter<Product>()
  @Output() updateEvent = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    //traitement
    this.notification.emit(this.product)
  }
  deleteNotif(){
    this.deleteEvent.emit(this.product)
  }
  updateNotif(){
    this.updateEvent.emit(this.product)
  }
}
