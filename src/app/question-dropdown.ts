import { QuestionBase } from './models/question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'DropdownQuestionComponent';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
