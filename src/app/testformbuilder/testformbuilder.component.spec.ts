import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestformbuilderComponent } from './testformbuilder.component';

describe('TestformbuilderComponent', () => {
  let component: TestformbuilderComponent;
  let fixture: ComponentFixture<TestformbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestformbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestformbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
