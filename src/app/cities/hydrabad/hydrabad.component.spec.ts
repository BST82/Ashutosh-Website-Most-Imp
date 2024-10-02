import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrabadComponent } from './hydrabad.component';

describe('HydrabadComponent', () => {
  let component: HydrabadComponent;
  let fixture: ComponentFixture<HydrabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydrabadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
