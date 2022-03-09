import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombospersonalesComponent } from './combospersonales.component';

describe('CombospersonalesComponent', () => {
  let component: CombospersonalesComponent;
  let fixture: ComponentFixture<CombospersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombospersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombospersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
