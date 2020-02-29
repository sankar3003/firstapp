import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymoduleComponent } from './mymodule.component';

describe('MymoduleComponent', () => {
  let component: MymoduleComponent;
  let fixture: ComponentFixture<MymoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
