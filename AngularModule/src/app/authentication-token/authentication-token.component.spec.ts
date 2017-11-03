import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationTokenComponent } from './authentication-token.component';

describe('AuthenticationTokenComponent', () => {
  let component: AuthenticationTokenComponent;
  let fixture: ComponentFixture<AuthenticationTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
