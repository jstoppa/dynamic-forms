import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromForm from "./store/reducers";
import { QuestionActions, TemplateActions } from "./store/actions";
import { QuestionBase } from "./models/question-base";
import { Update } from "@ngrx/entity";
import { Template } from './models/template';

@Component({
  selector: "app-page",
  template: `
    <div class="mainDiv">
      <button class="button" (click)="changeEditor(editorType.Questions)"
        [ngStyle]="{'background-color': activeEditor === editorType.Questions ? 'blanchedalmond':''}"
      >Questions</button>
      <button class="button" (click)="changeEditor(editorType.Template)"
        [ngStyle]="{'background-color': activeEditor === editorType.Template ? 'blanchedalmond':''}"
      >Template</button>
      {{template | json }}
      <div class="grid-container">
        <div class="editor" [ngStyle]="{'display': activeEditor === editorType.Questions ? '':'none'}">
          <h2 style="color:red; padding-left:100px">{{ questionsError }}</h2>
          <ngx-monaco-editor
            class="code-editor"
            [options]="editorOptions"
            [ngModel]="_questionJson"
            (ngModelChange)="questionJson = $event"
          ></ngx-monaco-editor>
        </div>
        <div class="editor" [ngStyle]="{'display': activeEditor === editorType.Template ? '':'none'}">
          <h2 style="color:red; padding-left:100px">{{ templateError }}</h2>
          <ngx-monaco-editor
            class="code-editor"
            [options]="editorOptions"
            [ngModel]="_templateJson"
            (ngModelChange)="templateJson = $event"
          ></ngx-monaco-editor>
        </div>
        <div class="form">
          <h2>Job Application for Heroes</h2>
          <app-dynamic-form [questions]="questions"></app-dynamic-form>
        </div>
      </div>
    </div>`,
  styles: [
    `.grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "editor form";
        grid-gap: 50px;
        height: 100%;
      }

      .mainDiv {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .code-editor {
        height: 100%;
      }

      .editor {
        grid-area: editor;
        height: 100%;
        width: 100%;
      }

      .form {
        grid-area: form;
      }

      .button {
        margin: 10px;
        margin-left: 50px;
        font-size: 25px;
      }
    `
  ]
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
