import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSRlayoutComponent } from './h-srlayout.component';

describe('HSRlayoutComponent', () => {
  let component: HSRlayoutComponent;
  let fixture: ComponentFixture<HSRlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HSRlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSRlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
