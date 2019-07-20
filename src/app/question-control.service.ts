import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { QuestionBase } from './models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    Object.keys(questions).forEach(key => {
      const question = questions[key];
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  evaluateRules(questions: QuestionBase<any>[], form: FormGroup, data: any) {
    if (questions)
      Object.keys(questions).forEach(key => {
        const question = questions[key];
        if (question.rules) {
          Object.keys(question.rules).forEach(key => {
            const property = question.rules[key];
            if (property.condition)
              property.value = this.evaluateCondition(property.condition, data).value;
            else
              delete question.rules[key];

            if (form && form.controls[question.key]) {
              const control = form.controls[question.key];
              if (key === 'readonly') {
                if (property.value && control.enabled)
                  control.disable();
                else if (!property.value && control.disabled)
                  control.enable();
              }

              if (key === 'required') {
                if (property.value)
                  control.setValidators([Validators.required]);
                else
                  control.setValidators([]);
              }
            }
          });
        }
        
        if (form && form.controls[question.key] && form.controls[question.key].disabled) {
          const control = form.controls[question.key];
          if (!question.rules)
            control.enable();
          else if (!question.rules['readonly'] || (question.rules['readonly'] && !question.rules['readonly'].value))
            control.enable();
        }
      });
    return { questions: questions, form: form };
  }

  evaluateCondition(condition: string, data: any): EvalResponse {
    'use strict';
    let response = <EvalResponse>{ value: false, error: null };

    if (condition && condition.trim() !== '' && condition !== 'false') {

      if (condition === 'true') {
        response.value = true;
        return response;
      }

      if (!data)
        return response;

      response = { ...this.evaluate(condition, data) };

      if (response.value !== true)
        response.value = false;
    }
    return response;
  }

  evaluate(path: string, data: any): EvalResponse {
    'use strict';

    const response = <EvalResponse>{ value: null, error: null };

    const props = Object.keys(data);
    const params = [];

    for (let i = 0; i < props.length; i++)
      params.push(data[props[i]]);

    params.push(path);

    props.push('path');

    const expression = `
            'use strict'
            let window = undefined;
            let document = undefined;
            let alert = undefined;
            let a = undefined;
            return ${path};
        `;

    props.push(expression);

    try {
      const evalFunc = new Function(...props);
      response.value = evalFunc(...params);
    } catch (err) {
      response.error = err;
    }
    return response;
  }
}


export interface EvalResponse {
  value: boolean | any;
  error: any;
}

