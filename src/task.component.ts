import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'task-component',
    template: `<div>{{todo.task}} <span *ngIf='todo.done'>&#x2713;</span></div>`
})
export class TaskComponent {
    @Input() private todo;
}