import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;
  isEditing: boolean;

  constructor(private tasksService: TasksService){
  }

  onClick() {
    this.isEditing = true;
  }

  updateTask() {
    this.tasksService.updateTask(this.task);
    this.isEditing = false;
  }
}
