import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutourworkComponent } from './aboutourwork.component';

describe('AboutourworkComponent', () => {
  let component: AboutourworkComponent;
  let fixture: ComponentFixture<AboutourworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutourworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutourworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
