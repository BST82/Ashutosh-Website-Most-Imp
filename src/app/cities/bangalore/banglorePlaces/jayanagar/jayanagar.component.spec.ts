import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JayanagarComponent } from './jayanagar.component';

describe('JayanagarComponent', () => {
  let component: JayanagarComponent;
  let fixture: ComponentFixture<JayanagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JayanagarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JayanagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
