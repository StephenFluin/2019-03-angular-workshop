import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(public route: ActivatedRoute) {
    this.product = products[this.route.snapshot.params.id];

  }

  ngOnInit() {

  }

}
