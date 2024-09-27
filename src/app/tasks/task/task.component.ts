import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
