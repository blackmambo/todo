import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { TaskManagerLocalStorage } from 'src/app/shared/lib/TaskManager';
import { DtoTask } from 'src/app/shared/dto/dtoTask';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {

  private store = new TaskManagerLocalStorage();
  public tasks: DtoTask[] = [];
 
  panelOpenState = false;

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.taskForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.store.load();
  }

  onSubmit() {
    
    const task = new DtoTask();

    task.id = Date.now();
    task.name = "test";
    task.priority = "high";

    this.store.create(task);
    this.loadTasks();
    
  }

}
