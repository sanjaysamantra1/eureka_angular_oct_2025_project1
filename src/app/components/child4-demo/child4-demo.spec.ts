import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child4Demo } from './child4-demo';

describe('Child4Demo', () => {
  let component: Child4Demo;
  let fixture: ComponentFixture<Child4Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child4Demo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child4Demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
