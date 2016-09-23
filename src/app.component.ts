import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `DevCamp KA Todo App<hr>
    <a routerLink="/">Todos</a>
    <a routerLink="/finish">Ende</a>
    <router-outlet></router-outlet>`
})
export class AppComponent { 

}
