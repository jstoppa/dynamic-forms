import { QuestionBase } from './models/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'TextboxQuestionComponent';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
