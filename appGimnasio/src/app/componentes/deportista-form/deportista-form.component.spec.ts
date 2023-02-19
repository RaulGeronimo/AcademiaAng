import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaFormComponent } from './deportista-form.component';

describe('DeportistaFormComponent', () => {
  let component: DeportistaFormComponent;
  let fixture: ComponentFixture<DeportistaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportistaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
