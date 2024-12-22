import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPujaComponent } from './e-puja.component';

describe('EPujaComponent', () => {
  let component: EPujaComponent;
  let fixture: ComponentFixture<EPujaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EPujaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
