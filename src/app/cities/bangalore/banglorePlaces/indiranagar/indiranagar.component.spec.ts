import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiranagarComponent } from './indiranagar.component';

describe('IndiranagarComponent', () => {
  let component: IndiranagarComponent;
  let fixture: ComponentFixture<IndiranagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiranagarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiranagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
