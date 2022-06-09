import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdashboardComponent } from './taskdashboard.component';

describe('TaskdashboardComponent', () => {
  let component: TaskdashboardComponent;
  let fixture: ComponentFixture<TaskdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
