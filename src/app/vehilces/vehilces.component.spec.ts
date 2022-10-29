import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehilcesComponent } from './vehilces.component';

describe('VehilcesComponent', () => {
  let component: VehilcesComponent;
  let fixture: ComponentFixture<VehilcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehilcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehilcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
