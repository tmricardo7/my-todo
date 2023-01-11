import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Tasks';
  newTask: string;
  tasks: Task[] = [
    {name:"My Task #1", isDone :false},
    {name:"My Task #2", isDone :true},
  ];

  addNewTask(){
    this.tasks.push({name:this.newTask, isDone :false});
    this.newTask = "";
  }
}
