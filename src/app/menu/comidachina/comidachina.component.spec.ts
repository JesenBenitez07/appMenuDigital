import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidachinaComponent } from './comidachina.component';

describe('ComidachinaComponent', () => {
  let component: ComidachinaComponent;
  let fixture: ComponentFixture<ComidachinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidachinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidachinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
