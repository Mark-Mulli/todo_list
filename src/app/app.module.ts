import {NgModule} from "@angular/core"
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent,  CardComponent, TasksComponent, NewTaskComponent, TaskComponent],
  bootstrap: [AppComponent],
  imports: [ BrowserModule, FormsModule]
})


export class AppModule {}
