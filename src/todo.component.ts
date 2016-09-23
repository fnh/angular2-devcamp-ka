import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-component',
    templateUrl: 'todo.component.html'
})
export class TodoComponent {
    private todos;

    ngOnInit() {
        this.todos = [ { task: "Prepare Angular 2 demo", done: false }, 
                       { task: "Clean at home", done: false },
                       { task: "mvn clean install", done: true } ];

    }

}