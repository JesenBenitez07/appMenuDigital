import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenSemanalComponent } from './resumen-semanal.component';

describe('ResumenSemanalComponent', () => {
  let component: ResumenSemanalComponent;
  let fixture: ComponentFixture<ResumenSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenSemanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
