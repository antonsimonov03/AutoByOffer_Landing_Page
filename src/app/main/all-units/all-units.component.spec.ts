import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnitsComponent } from './all-units.component';

describe('AllUnitsComponent', () => {
  let component: AllUnitsComponent;
  let fixture: ComponentFixture<AllUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
