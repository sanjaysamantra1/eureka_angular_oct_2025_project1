import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3Demo } from './child3-demo';

describe('Child3Demo', () => {
  let component: Child3Demo;
  let fixture: ComponentFixture<Child3Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child3Demo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child3Demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
