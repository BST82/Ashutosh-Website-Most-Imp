import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedabadComponent } from './ahmedabad.component';

describe('AhmedabadComponent', () => {
  let component: AhmedabadComponent;
  let fixture: ComponentFixture<AhmedabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhmedabadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmedabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
