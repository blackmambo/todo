import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdisplayComponent } from './taskdisplay.component';

describe('TaskdisplayComponent', () => {
  let component: TaskdisplayComponent;
  let fixture: ComponentFixture<TaskdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
