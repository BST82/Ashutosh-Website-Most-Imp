import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferServicesComponent } from './what-we-offer-services.component';

describe('WhatWeOfferServicesComponent', () => {
  let component: WhatWeOfferServicesComponent;
  let fixture: ComponentFixture<WhatWeOfferServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeOfferServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeOfferServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
