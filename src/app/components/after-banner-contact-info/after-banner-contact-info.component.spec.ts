import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterBannerContactInfoComponent } from './after-banner-contact-info.component';

describe('AfterBannerContactInfoComponent', () => {
  let component: AfterBannerContactInfoComponent;
  let fixture: ComponentFixture<AfterBannerContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterBannerContactInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterBannerContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
