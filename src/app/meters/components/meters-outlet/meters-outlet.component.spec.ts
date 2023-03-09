import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersOutletComponent } from './meters-outlet.component';

describe('MetersOutletComponent', () => {
  let component: MetersOutletComponent;
  let fixture: ComponentFixture<MetersOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetersOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
