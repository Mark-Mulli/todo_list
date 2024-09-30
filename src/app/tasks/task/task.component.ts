import { Component, input, output } from '@angular/core';


import { type task } from './task.model';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<task>()

  constructor(private taskService: TasksService){}

  onCompleteTask() {
    this.taskService.removeTask(this.task().id)
  }
}
