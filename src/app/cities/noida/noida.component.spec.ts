import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidaComponent } from './noida.component';

describe('NoidaComponent', () => {
  let component: NoidaComponent;
  let fixture: ComponentFixture<NoidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
