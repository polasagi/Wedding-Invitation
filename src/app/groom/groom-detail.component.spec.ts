import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomDetailComponent } from './groom-detail.component';

describe('GroomDetailComponent', () => {
  let component: GroomDetailComponent;
  let fixture: ComponentFixture<GroomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
