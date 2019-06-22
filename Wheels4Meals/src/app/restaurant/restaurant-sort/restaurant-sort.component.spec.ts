import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSortComponent } from './restaurant-sort.component';

describe('RestaurantSortComponent', () => {
  let component: RestaurantSortComponent;
  let fixture: ComponentFixture<RestaurantSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
