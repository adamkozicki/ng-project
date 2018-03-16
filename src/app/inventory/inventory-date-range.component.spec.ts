import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDateRangeComponent } from './inventory-date-range.component';

describe('InventoryDateRangeComponent', () => {
  let component: InventoryDateRangeComponent;
  let fixture: ComponentFixture<InventoryDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
