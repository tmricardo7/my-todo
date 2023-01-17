import { Task } from "src/models/task.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable()
export class TasksService {
    tasks: Observable<Task[]>; 

    constructor(private db: AngularFireDatabase) {
        this.tasks = this.db.list<Task>('tasks').snapshotChanges()
        .pipe(map(changes => changes
        .map(c => ({ ...c.payload.val()!, key: c.payload.key! }))));
    }

    addTask(name: string) {
        const tasksRef = this.db.list('tasks');
        tasksRef.push({ name, isDone: false });
    }

    updateTask(task:Task){
        const tasksRef = this.db.list('tasks');
        tasksRef.update(task.key, task);
    }
}