import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoActividadListComponent } from './grupo-actividad-list.component';

describe('GrupoActividadListComponent', () => {
  let component: GrupoActividadListComponent;
  let fixture: ComponentFixture<GrupoActividadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoActividadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoActividadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
