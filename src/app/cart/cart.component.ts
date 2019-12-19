import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  sumPrice= 0;

  @Input() orderList = [];
  @Output() delete = new EventEmitter();


  constructor() { }

  ngOnInit() { }

  calculateSumPrice() {
    const sumPrice= _.sumBy(this.orderList, 'price');
    return sumPrice;
  }

  deleteOrder(orderIndex)
  {
    this.delete.emit(orderIndex)
  }

}
