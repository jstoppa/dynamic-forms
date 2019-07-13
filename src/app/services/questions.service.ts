import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { QuestionBase } from "../models/question-base";
import { TextboxQuestion } from "../question-textbox";
import { DropdownQuestion } from "../question-dropdown";
import { Action } from "@ngrx/store";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  constructor() {}

  getQuestions(): Observable<QuestionBase<any>[]> {
    return of([
      new TextboxQuestion({
        id: "1",
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        id: "2",
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2,
        rules: {
          readonly: "",
          hidden: "",
          required: "firstname"
        }
      }),
      new DropdownQuestion({
        id: "3",
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 3
      })
    ]);
  }
}
