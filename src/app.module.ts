import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo.component";
import { TaskComponent } from "./task.component";

import { TodoService } from "./todo.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [AppComponent, TodoComponent, TaskComponent],
    providers: [TodoService],
    bootstrap: [AppComponent],
})
export class AppModule { }

