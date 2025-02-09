import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDatedComponent } from './special-dated.component';

describe('SpecialDatedComponent', () => {
  let component: SpecialDatedComponent;
  let fixture: ComponentFixture<SpecialDatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialDatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
