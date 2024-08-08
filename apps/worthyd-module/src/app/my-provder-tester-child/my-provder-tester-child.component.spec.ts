import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyProvderTesterChildComponent } from './my-provder-tester-child.component';

describe('MyProvderTesterChildComponent', () => {
  let component: MyProvderTesterChildComponent;
  let fixture: ComponentFixture<MyProvderTesterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProvderTesterChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyProvderTesterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
