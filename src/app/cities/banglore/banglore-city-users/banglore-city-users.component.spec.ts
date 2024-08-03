import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangloreCityUsersComponent } from './banglore-city-users.component';

describe('BangloreCityUsersComponent', () => {
  let component: BangloreCityUsersComponent;
  let fixture: ComponentFixture<BangloreCityUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BangloreCityUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangloreCityUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
