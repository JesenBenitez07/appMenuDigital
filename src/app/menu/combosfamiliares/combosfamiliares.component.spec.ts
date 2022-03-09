import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosfamiliaresComponent } from './combosfamiliares.component';

describe('CombosfamiliaresComponent', () => {
  let component: CombosfamiliaresComponent;
  let fixture: ComponentFixture<CombosfamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombosfamiliaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosfamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
