import { Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-dropdown',
  template: `
  <button class="save-button" type="submit" [disabled]="!form.valid">Save</button>
  `,
  styles: [`
  .save-button { 
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border: none;
    font-weight: 700;
    text-transform: uppercase;
    width: 170px;
  }
  `]
})

export class ButtonQuestionComponent {
  static componentName = "ButtonQuestionComponent";
  @Input() question: any;
  @Input() form: FormGroup;
}
