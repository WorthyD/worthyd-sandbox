import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Intake2Component } from './intake2.component';

describe('Intake2Component', () => {
  let component: Intake2Component;
  let fixture: ComponentFixture<Intake2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intake2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Intake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
