import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitefieldComponent } from './whitefield.component';

describe('WhitefieldComponent', () => {
  let component: WhitefieldComponent;
  let fixture: ComponentFixture<WhitefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitefieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
