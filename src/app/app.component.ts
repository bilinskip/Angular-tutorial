import { Component } from '@angular/core';
import {Task} from './task';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    config: { [key:string]: string | Date } = null;

    taskName: string;

    tasks: Task[] = [{
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false
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
      
    }
  clearTasks(){
    this.tasks = [];
  }
  onKeyUp(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }
  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: '2020-04-01',
      done: false
    };
    this.tasks.push(task);
  }
}
