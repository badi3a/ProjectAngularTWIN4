import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form : FormGroup;
  private product: Product;

  @Output() addEvent = new EventEmitter<Product>()

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    this.product = new Product();

    this.form = this.builder.group({
      'title' : ['', [Validators.required, Validators.minLength(5)]],
      'description' : ['', Validators.required],
      'price' : ['', [Validators.required, Validators.min(10)]],
      'picture' : ['default.png', Validators.required],
      'category' : ['', Validators.required],
      'quantity' : ['0', [Validators.required, Validators.min(0)]]
    });
  }

  addProduct(form : FormGroup){
    this.product.title       = form.value.title;
    this.product.description = form.value.description;
    this.product.price       = form.value.price;
    this.product.picture     = form.value.picture;
    this.product.quantity    = form.value.quantity;

    this.addEvent.emit(this.product);
  }

}
