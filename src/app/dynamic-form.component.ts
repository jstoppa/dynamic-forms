import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as fromForm from "./store/reducers";
import { QuestionControlService } from './services/question-control.service';
import { Template } from './models/template';
import { Store } from '@ngrx/store';
import { DataActions } from './store/actions';
import { QuestionBase } from './models/question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() template: Template;
  @Input('data') set data(value: any) {
    const result = this.qcs.evaluateRules(this.questions, this.form, value);
    this.questions = result.questions;
    this.form = result.form;
  }


  form: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService,
    private store: Store<fromForm.State>
  ) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.form.valueChanges.subscribe(() => {
      this.store.dispatch(DataActions.updateData({ data: this.form.value }));
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
