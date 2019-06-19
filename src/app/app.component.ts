import { Component, OnChanges } from '@angular/core';

import { QuestionService } from './question.service';
import { Store, select } from '@ngrx/store';

import * as fromForm from './store/reducers';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/question-base';


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
                <app-dynamic-form [questions]="questions"></app-dynamic-form>
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
    ],
    providers: [QuestionService]
})
export class AppComponent {
    editorOptions = { language: 'json', automaticLayout: true, fontSize: "25px"};
    _code = "";
    set code (value: string) {
        debugger;
    }

    questions: any[];
    questions$: Observable<QuestionBase<any>[]>;

    constructor(private service: QuestionService,
                private store: Store<fromForm.State> ) {

        this.questions$ = store.pipe(select(fromForm.getAllQuestions))
        
        this.questions = service.getQuestions();
        

    }
   
}
