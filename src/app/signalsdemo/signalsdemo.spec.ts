import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalsdemo } from './signalsdemo';

describe('Signalsdemo', () => {
  let component: Signalsdemo;
  let fixture: ComponentFixture<Signalsdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalsdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalsdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
