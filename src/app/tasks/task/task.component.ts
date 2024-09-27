import { Component, input, output } from '@angular/core';

import { type task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<task>()
  complete = output<string>()

  onCompleteTask() {
    this.complete.emit(this.task().id)
  }
}
