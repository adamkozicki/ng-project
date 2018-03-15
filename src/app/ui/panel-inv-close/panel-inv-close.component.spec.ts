import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInvCloseComponent } from './panel-inv-close.component';

describe('PanelInvCloseComponent', () => {
  let component: PanelInvCloseComponent;
  let fixture: ComponentFixture<PanelInvCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInvCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInvCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
