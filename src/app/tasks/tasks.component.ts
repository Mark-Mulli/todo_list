import { Component, computed, input, signal } from '@angular/core';

import { type newTaskData } from './task/task.model';
import { Title } from '@angular/platform-browser';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = false;

  constructor(private taskService: TasksService) {}


  selectedUserTasks = computed(() => {
    return this.taskService.getUserTasks(this.userId())
  });


  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
