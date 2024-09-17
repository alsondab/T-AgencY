import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAgencyHomeComponent } from './t-agency-home.component';

describe('TAgencyHomeComponent', () => {
  let component: TAgencyHomeComponent;
  let fixture: ComponentFixture<TAgencyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TAgencyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAgencyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
