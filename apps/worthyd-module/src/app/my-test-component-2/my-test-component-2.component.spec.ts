import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponent2Component } from './my-test-component-2.component';

describe('MyTestComponent2Component', () => {
  let component: MyTestComponent2Component;
  let fixture: ComponentFixture<MyTestComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestComponent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
