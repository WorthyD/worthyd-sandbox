import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponent3Component } from './my-test-component-3.component';

describe('MyTestComponent3Component', () => {
  let component: MyTestComponent3Component;
  let fixture: ComponentFixture<MyTestComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestComponent3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
