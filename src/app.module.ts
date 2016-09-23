import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo.component";
import { TaskComponent } from "./task.component";
import { FinishComponent }      from './finish.component';

import { TodoService } from "./todo.service";
import { routing } from "./app.routes";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [AppComponent, TodoComponent, TaskComponent, FinishComponent],
    providers: [TodoService],
    bootstrap: [AppComponent],
})
export class AppModule { }

