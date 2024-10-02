import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucknowComponent } from './lucknow.component';

describe('LucknowComponent', () => {
  let component: LucknowComponent;
  let fixture: ComponentFixture<LucknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucknowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
