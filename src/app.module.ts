import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo.component";
import { TaskComponent } from "./task.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [AppComponent, TodoComponent, TaskComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

