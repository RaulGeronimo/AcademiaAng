import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaListComponent } from './deportista-list.component';

describe('DeportistaListComponent', () => {
  let component: DeportistaListComponent;
  let fixture: ComponentFixture<DeportistaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportistaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
