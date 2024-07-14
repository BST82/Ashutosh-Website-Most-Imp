import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanskarComponent } from './sanskar.component';

describe('SanskarComponent', () => {
  let component: SanskarComponent;
  let fixture: ComponentFixture<SanskarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanskarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanskarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
