import { Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-dropdown',
  template: `
  <div [formGroup]="form">
    <label [attr.for]="question.key">{{question.label}}</label>
      <input [formControlName]="question.key"
        [id]="question.key" [type]="question.type">
  </div>
  `,
  styleUrls: ['./dynamic-form-question.component.css']
})

export class TextboxQuestionComponent {
  static componentName = "TextboxQuestionComponent";
  @Input() question: any;
  @Input() form: FormGroup;
}
