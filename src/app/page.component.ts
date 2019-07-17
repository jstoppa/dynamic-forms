import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromForm from "./store/reducers";
import { QuestionActions, TemplateActions } from "./store/actions";
import { QuestionBase } from "./models/question-base";
import { Template } from './models/template';

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  @Input() questions: any = [];
  @Input() template: Template = null;
  
  editorOptions = {
    theme: "vs-dark",
    language: "json",
    automaticLayout: true,
    fontSize: "30px"
  };
  questionsError = "";
  templateError = "";

  editorType = EditorType;
  activeEditor = EditorType.Questions;

  _questionJson = "";
  set questionJson(value: string) {
    try {
      const updateQuestions = JSON.parse(value);
      const updateQuestionsArray = Object.entries(updateQuestions).map(
        ([k, v]) => <QuestionBase<any>>v
      );
      this.store.dispatch(
        QuestionActions.updateQuestions({ questions: updateQuestionsArray })
      );
      this.questionsError = "";
    } catch (ex) {
      this.questionsError = "Error parsing JSON";
    }
  }

  _templateJson = "";
  set templateJson(value: string) {
    try {
      const updateTemplate = JSON.parse(value);
      this.store.dispatch(
        TemplateActions.updateTemplate({ template: updateTemplate })
      );
      this.templateError = "";
    } catch (ex) {
      this.templateError = "Error parsing JSON";
    }
  }

  constructor(private store: Store<fromForm.State>) {}

  ngOnInit(): void {
    this._questionJson = JSON.stringify(this.questions, null, 2);
    this._templateJson = JSON.stringify(this.template, null, 2);
  }
  
  changeEditor(value: EditorType) {
    this.activeEditor = value;
  }
}

export enum EditorType {
  Questions,
  Template
}
