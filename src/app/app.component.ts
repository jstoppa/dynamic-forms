import { Component } from '@angular/core';

import { QuestionService } from './question.service';


@Component({
    selector: 'app-root',
    template: `
    <div>
        <ngx-monaco-editor [options]="editorOptions" [(ngModel)]="code"></ngx-monaco-editor>

        Here
        <div>{{code}}</div>
        <h2>Job Application for Heroes</h2>
        <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
    providers: [QuestionService]
})
export class AppComponent  {
    editorOptions = { language: 'javascript'};
    code: "";

    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }

}
