import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPagesBasedOnUserComponent } from './show-pages-based-on-user.component';

describe('ShowPagesBasedOnUserComponent', () => {
  let component: ShowPagesBasedOnUserComponent;
  let fixture: ComponentFixture<ShowPagesBasedOnUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPagesBasedOnUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPagesBasedOnUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
