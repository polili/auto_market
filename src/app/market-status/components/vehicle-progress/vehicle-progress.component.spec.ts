import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleProgressComponent } from './vehicle-progress.component';

describe('VehicleProgressComponent', () => {
  let component: VehicleProgressComponent;
  let fixture: ComponentFixture<VehicleProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
