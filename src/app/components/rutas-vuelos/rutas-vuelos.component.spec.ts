import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasVuelosComponent } from './rutas-vuelos.component';

describe('RutasVuelosComponent', () => {
  let component: RutasVuelosComponent;
  let fixture: ComponentFixture<RutasVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasVuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
