import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseDonutBoxComponent } from './pulse-donut-box.component';

describe('PulseDonutBoxComponent', () => {
  let component: PulseDonutBoxComponent;
  let fixture: ComponentFixture<PulseDonutBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseDonutBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseDonutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
