import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class TodoService {

    constructor(private http: Http) { }

    getTodos() {
        return this.http.get("src/data/todos.json");
    }
}