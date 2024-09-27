import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  add = output<newTaskData>()

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')


  cancel = output()

  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }

}
