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
      name: ['', Validators.required],
      desc: ['', Validators.required],
      priority: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.store.load();
  }

  onSubmit() {

    if (this.taskForm.invalid) {
     alert("Enter all fields!");
     return;
    }
    
    const task = new DtoTask();

    task.id = Date.now();
    task.name = this.taskForm.get('name')?.value;
    task.desc = this.taskForm.get('desc')?.value;
    task.priority =  this.taskForm.get('priority')?.value;
    task.status = false;

    this.store.create(task);
    this.taskForm.reset();
    this.loadTasks();
    //this is a test of the read and write functions of microsoft
  }

  onTaskChange(tk: any) {
    console.log(tk);
   // console.log(tk.options[0].value.id);

   if (tk.options[0].selected == true) {
     this.store.update(tk.options[0].value.id, true);
   } else  {
    this.store.update(tk.options[0].value.id, false);
   }

   this.loadTasks();

  }

}
