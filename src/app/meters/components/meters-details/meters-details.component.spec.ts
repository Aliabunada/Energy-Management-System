import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersDetailsComponent } from './meters-details.component';

describe('MetersDetailsComponent', () => {
  let component: MetersDetailsComponent;
  let fixture: ComponentFixture<MetersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
