import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentDetailComponent } from './sent-detail.component';

describe('SentDetailComponent', () => {
  let component: SentDetailComponent;
  let fixture: ComponentFixture<SentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
