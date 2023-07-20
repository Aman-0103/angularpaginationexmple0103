import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyAPIComponent } from './third-party-api.component';

describe('ThirdPartyAPIComponent', () => {
  let component: ThirdPartyAPIComponent;
  let fixture: ComponentFixture<ThirdPartyAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdPartyAPIComponent]
    });
    fixture = TestBed.createComponent(ThirdPartyAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
