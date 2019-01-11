import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDetailComponent } from './welcome-detail.component';

describe('WelcomeDetailComponent', () => {
  let component: WelcomeDetailComponent;
  let fixture: ComponentFixture<WelcomeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
