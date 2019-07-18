import { QuestionBase } from './models/question-base';
import { Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-dropdown',
  template: `
  <div [formGroup]="form">
    <label [attr.for]="question.key">{{question.label}}</label>
      <select [id]="question.key" [formControlName]="question.key">
        <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>
      </select>
  </div>
  `,
  styleUrls: ['./dynamic-form-question.component.css']
})

export class DropdownQuestionComponent {
  static componentName = "DropdownQuestionComponent";
  @Input() question: any;
  @Input() form: FormGroup;
}
