import { Component, OnChanges, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromForm from './store/reducers';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/question-base';
import { QuestionActions } from './store/actions';


@Component({
    selector: 'app-root',
    template: `
    
    <div class="mainDiv">
        <div class="grid-container">
            <div class="editor">
                <ngx-monaco-editor class="code-editor" [options]="editorOptions" [ngModel]="_code" (ngModelChange)="code = $event"></ngx-monaco-editor>
            </div>
            <div class="form">
                <h2>Job Application for Heroes</h2>
                <app-dynamic-form  [questions]="(questions$ | async)"></app-dynamic-form>
            </div>
        </div>
    </div>
  `,
    styles: [
        `
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "editor form";
            grid-gap: 50px;
            height: 100%;
          }
          
          .mainDiv { position: absolute; top: 0; left: 0; right: 0;bottom: 0; }

          .code-editor { height:100% }

          .editor { grid-area: editor; height:100%; width: 100% }
          
          .form { grid-area: form; }
        
        `
    ]
})
export class AppComponent implements OnInit {
    
    editorOptions = { language: 'json', automaticLayout: true, fontSize: "25px"};
    _code = "";
    set code (value: string) {}

    questions: any[];
    questions$: any;

    constructor(private store: Store<fromForm.State> ) {
        this.questions$ = this.store.pipe(select(fromForm.getQuestions));
        
    }

    ngOnInit(): void {
        this.store.dispatch(QuestionActions.loadQuestions());

        
        // this.questions$.subscribe(res => {
        //     debugger;
        //     this.questions = res; 
        //     this._code = JSON.stringify(this.questions, null, 4);
        // });
    }
    
   
}
