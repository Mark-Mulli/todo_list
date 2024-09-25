import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';

interface User {
  id:string;
  avatar: string;
  name:string
}

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
    // id = input.required<string>()
    // avatar = input.required<string>()
    // name = input.required<string>()

    @Input({required: true}) user!: User

    // @Output() select = new EventEmitter()
    select = output<string>()

    // imagePath = computed(() => {
    //   return 'assets/users/' + this.avatar()
    // })


    get ImagePath() {
      return "assets/users/" + this.user.avatar
    }

    onSelectUser() {
      this.select.emit(this.user.id)
    }
}
