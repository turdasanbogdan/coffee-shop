import { CoffeeService } from './../coffee.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffeeList = [];

  @Output() added = new EventEmitter;

  constructor( private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.coffeeList = this.coffeeService.getCoffees();
  }

  addCoffeeToCart(coffee)
  {
    this.added.emit(coffee);
  }

}
