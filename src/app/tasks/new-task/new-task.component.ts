import { Component, inject, input, output, signal } from '@angular/core';
import { type newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  userId = input.required<string>()

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')

  private taskService = inject(TasksService)


  close = output()

  onCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId())

    this.close.emit()
  }

}
