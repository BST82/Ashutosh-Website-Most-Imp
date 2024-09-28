import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanarashComponent } from './banarash.component';

describe('BanarashComponent', () => {
  let component: BanarashComponent;
  let fixture: ComponentFixture<BanarashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanarashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanarashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
