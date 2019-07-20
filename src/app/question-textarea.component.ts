import { Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-dropdown',
  template: `
  <div [formGroup]="form">
    <label 
       [ngClass]="{'label-required': question.rules?.required?.value}"
       [attr.for]="question.key">{{question.label}}</label>
      <textarea [formControlName]="question.key" rows="4"
        [id]="question.key"></textarea>
  </div>
  `,
  styleUrls: ['./dynamic-form-question.component.css']
})

export class TextareaQuestionComponent {
  static componentName = "TextareaQuestionComponent";
  @Input() question: any;
  @Input() form: FormGroup;
}
