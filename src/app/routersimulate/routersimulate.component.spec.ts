import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutersimulateComponent } from './routersimulate.component';

describe('RoutersimulateComponent', () => {
  let component: RoutersimulateComponent;
  let fixture: ComponentFixture<RoutersimulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutersimulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutersimulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
