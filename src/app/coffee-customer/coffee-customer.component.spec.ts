import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCustomerComponent } from './coffee-customer.component';

describe('CoffeeCustomerComponent', () => {
  let component: CoffeeCustomerComponent;
  let fixture: ComponentFixture<CoffeeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
