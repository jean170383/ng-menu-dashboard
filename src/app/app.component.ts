import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./pages/todo/todo.component";
import { TODO_DATA } from '../assets/todo';
import { log } from 'console';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent,CommonModule,HighlightedDirective,NgxUnlessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // console.log(this.highlightedDirect);
  }
  todoData=TODO_DATA[0];
  // todoData:NTodo.TodoData[]=[];
  @ViewChild('todoRef',{read:HighlightedDirective}) highlightedDirect!:HighlightedDirective;

  getTodoInfo(val:NTodo.TodoData){
    console.log(val);
  }
  trackByFn(_index:number,item:NTodo.TodoData){
    return item.id;
  }

  // orderData(){
  //   this.todoData.sort((a,b)=>a.priority-b.priority);
  // }

  OnToggleHighlighted(highlighted:boolean){
    console.log(highlighted);
  }
}
