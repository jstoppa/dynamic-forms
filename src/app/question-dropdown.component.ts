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
      <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
  </div>
  `,
  styleUrls: ['./dynamic-form-question.component.css']
})

export class DropdownQuestionComponent {
  static componentName = "DropdownQuestionComponent";
  @Input() question: any;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
