import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    // @Input({ required: true   }) avatar!: string
    // @Input({ required: true }) name!: string

    //working with input signals
    id = input.required<string>()
    avatar = input.required<string>()
    name = input.required<string>()

    @Output() select = new EventEmitter()

    imagePath = computed(() => {
      return 'assets/users/' + this.avatar()
    })


    // get ImagePath() {
    //   return "assets/users/" + this.avatar
    // }

    onSelectUser() {
      this.select.emit(this.id)
    }
}
