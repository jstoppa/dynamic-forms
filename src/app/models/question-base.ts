import { GridPosition } from "./template";

export class QuestionBase<T> {
  id: string;
  value: T;
  key: string;
  label: string;
  rules: FormRules;
  order: number;
  controlType: string;
  position: GridPosition;

  constructor(
    options: {
      id?: string;
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      position?: GridPosition;
      rules?: FormRules
    } = {}
  ) {
    this.id = options.id;
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    if (options.position)
      this.position = {...options.position};
    if (options.rules)
      this.rules = { ...options.rules };
  }
}

export declare interface FormRules {
  [key: string]: FormRule;
}

export interface FormRule {
  key: string;
  condition: string;
  value: boolean;
  errorMessage: string;
}
