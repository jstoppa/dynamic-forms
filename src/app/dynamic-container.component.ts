import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionControlService } from "./question-control.service";
import { QuestionBase } from './models/question-base';

@Component({
  selector: "[app-dynamic-container]",
  templateUrl: "./dynamic-container.component.html",
  providers: [QuestionControlService]
})
export class DynamicContainerComponent implements OnInit {
  @Input() questions: any = [];
  @Input() form: FormGroup;
  @Input() positionId: string;

  columnQuestions: any = [];

  constructor() {}

  ngOnInit() {
    this.columnQuestions = this.findColumnComponents();
  }

  private findColumnComponents(): QuestionBase<any>[] {
    const items: QuestionBase<any>[] = [];
    Object.keys(this.questions).forEach(key => {
      const question = this.questions[key];
        if (question.position.id === this.positionId)
          items.push(question);
    });

    items.sort(
      (left: QuestionBase<any>, right: QuestionBase<any>) => {
        return left.position.index - right.position.index;
      }
    );

    return items;
  }
}
