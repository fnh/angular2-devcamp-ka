import { Component, OnInit } from '@angular/core';
import { TodoService } from "./todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-component',
    templateUrl: 'todo.component.html'
})
export class TodoComponent {
    private todos;
    
    private nextTask = "Enter new Task";

    constructor(private todoService: TodoService) {}

    ngOnInit() {
        const responseHandler = (response: any) => { this.todos = JSON.parse(response._body); }
        this.todoService.getTodos().subscribe(responseHandler);
    }

    private toggle(entry) {
        entry.done = !entry.done;
    }

    private addTodo() {
        let todo = {
            task: this.nextTask,
            done: false
        };

        this.todos.push(todo);
        this.nextTask = "Enter new Task";
    }

}