import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsumaryComponent } from './marketsumary.component';

describe('MarketsumaryComponent', () => {
  let component: MarketsumaryComponent;
  let fixture: ComponentFixture<MarketsumaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketsumaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
