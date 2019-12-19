import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeOwnerComponent } from './coffee-owner.component';

describe('CoffeeOwnerComponent', () => {
  let component: CoffeeOwnerComponent;
  let fixture: ComponentFixture<CoffeeOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
