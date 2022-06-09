import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {

  panelOpenState = false;

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.taskForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    alert("test");
  }

}
