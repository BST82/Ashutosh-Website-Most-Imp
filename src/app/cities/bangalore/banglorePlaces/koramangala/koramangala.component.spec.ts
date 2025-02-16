import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoramangalaComponent } from './koramangala.component';

describe('KoramangalaComponent', () => {
  let component: KoramangalaComponent;
  let fixture: ComponentFixture<KoramangalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoramangalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoramangalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
