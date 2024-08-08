import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyProvderTesterComponent } from './my-provder-tester.component';

describe('MyProvderTesterComponent', () => {
  let component: MyProvderTesterComponent;
  let fixture: ComponentFixture<MyProvderTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProvderTesterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyProvderTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
