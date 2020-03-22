import { Component } from '@angular/core';
import {Task} from './task';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    editMode = false;
    config: { [key:string]: string | Date } = null;
    taskName = 'Sugerowane zadanie codzienne: odkurzanie';
    taskDate = '';

    tasks: Task[] = [{
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: true
    },
    {
      name: 'Nauka',
      deadline: '2020-03-10',
      done: false
    },
    {
      name: 'Sprzątanie',
      deadline: '2020-03-21',
      done: false
    }
    ];

    constructor(){
      setTimeout( () => {
        this.config = {
        title: 'Lista zadań',
        footer: ' Lista zadań zbudowana  w Angularze.',
        date : new Date()
        };
      },  500);
      this.sortTasks();
      
    }
  clearTasks(){
    this.tasks = [];
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }
  switchEditMode(){
    this.editMode = !this.editMode;
  }
  markTaskAsDone(task: Task){
    task.done = true;
    this.sortTasks();
  }
  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }
  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
    a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
