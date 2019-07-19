import { Component,OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";

import * as fromForm from "./store/reducers";
import { QuestionActions, TemplateActions } from "./store/actions";

@Component({
  selector: "app-root",
  template: `
    <app-page [questions]="questions$ | async" [template]="template$ | async"></app-page>
  `
})
export class AppComponent implements OnInit {
  questions$: any;
  template$: any;
  data$: any;

  constructor(private store: Store<fromForm.State>) {
    this.questions$ = this.store.pipe(select(fromForm.getQuestions));
    this.template$ = this.store.pipe(select(fromForm.getTemplate));
    this.data$ = this.store.pipe(select(fromForm.getData));
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionActions.loadQuestions());
    this.store.dispatch(TemplateActions.loadTemplate());
  }
}
