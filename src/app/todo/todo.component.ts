import { Component, OnInit, Input } from '@angular/core';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getVal: string;
  todoArray :string[] = [];

  getText(text : string){
      if (text.length < 3){
        alert("Please Fill Minimum 3 Characters");
      }
      else {
        this.todoArray.push(text);
      }
  }

  delete(e){
    this.todoArray.splice(e , 1);
  }


}

