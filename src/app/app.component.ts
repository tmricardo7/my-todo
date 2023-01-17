import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Task } from 'src/models/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'My Tasks';
  newTask: string;
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}
  ngOnInit(): void {
    this.tasksService.tasks.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addNewTask(){
    this.tasksService.addTask(this.newTask);
    this.newTask = "";
  }
}
