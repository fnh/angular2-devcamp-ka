import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [AppComponent, TodoComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

