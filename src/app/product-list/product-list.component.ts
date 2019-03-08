import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

export const products = [
  {name: 'Item One',price: '$4.99',description: 'This is a great item for your kids!',coupon: '10',date: '2019-03-08',},
  {name: 'Item Two',price: '$41.99',description: 'This is a great item for your parents!',date: '2019-03-08',},
  {name: 'Item Three',price: '$39.99',description: 'This is a great item for yourself!',date: '2019-03-08',},
  {name: 'Item Four',price: '$12.99',description: 'The thing you have always wanted',date: '2019-03-08',},
  {name: 'Item Five',price: '$1.98',description: 'I cannot believe this is so cheap!', date: '2019-03-08'},
 ];


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

  greatDeal(product) {
    alert("What a great deal!");
  }
  logInterest($event) {
    console.log("interest shown!");
  }



}
